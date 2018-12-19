package com.wann.minesoft;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.dozer.DozerBeanMapper;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wann.minesoft.dao.Bassin;
import com.wann.minesoft.dao.Mine;
import com.wann.minesoft.dao.VisiteBassin;
import com.wann.minesoft.dao.VisiteMine;
import com.wann.minesoft.dto.BassinLightDTO;
import com.wann.minesoft.dto.MineLightDTO;
import com.wann.minesoft.dto.VisiteBassinDTO;
import com.wann.minesoft.dto.VisiteMineDTO;

@RestController
public class MineController {

	@Autowired
	private MineRepository mineRepo;

	@Autowired
	private VisiteRepository visiteRepo;

	@Autowired
	private ModelMapper modelMapper;

	@PostConstruct
	public void initialize() {
		modelMapper.createTypeMap(VisiteBassinDTO.class, VisiteBassin.class);
		modelMapper.createTypeMap(VisiteBassin.class, VisiteBassinDTO.class);
		modelMapper.createTypeMap(VisiteMineDTO.class, VisiteMine.class);
		modelMapper.createTypeMap(VisiteMine.class, VisiteMineDTO.class).addMappings(new PropertyMap<VisiteMine, VisiteMineDTO>() {
			
			@Override
			protected void configure() {
				// TODO Auto-generated method stub
				
			}
		});;
		modelMapper.createTypeMap(BassinLightDTO.class, Bassin.class);
		modelMapper.createTypeMap(Bassin.class, BassinLightDTO.class);
		modelMapper.createTypeMap(MineLightDTO.class, Mine.class);
		modelMapper.createTypeMap(Mine.class, MineLightDTO.class);
	}

	@GetMapping("/services/mines-all")
	@CrossOrigin
	public List<MineLightDTO> retrieveAll() {
		List<Mine> result = mineRepo.findAll();
		return result.stream().map(mine -> convertMineToDTO(mine)).collect(Collectors.toList());
	}

	private MineLightDTO convertMineToDTO(Mine mine) {
		MineLightDTO mineDto = modelMapper.map(mine, MineLightDTO.class);
		List<VisiteMineDTO> visitesDto = new ArrayList<>();
		List<VisiteMine> visites = mine.getVisitesMines();
		if (visites != null) {
			if (visites.size() == 1) {
				visitesDto.add(modelMapper.map(visites.get(0), VisiteMineDTO.class));
			} else if (visites.size() >= 2) {
				visitesDto.add(modelMapper.map(visites.get(0), VisiteMineDTO.class));
				visitesDto.add(modelMapper.map(visites.get(1), VisiteMineDTO.class));
			}
		}
		mineDto.setVisitesMines(visitesDto);
		return mineDto;
	}

	@GetMapping("/services/mines-by-name")
	@CrossOrigin
	public Collection<MineLightDTO> findByName(@RequestParam String name) {
		Collection<Mine> mines = mineRepo.findByNomContaining(name);
		List<MineLightDTO> result = mines.stream().map(mine -> convertMineToDTO(mine)).collect(Collectors.toList());
		return result;
	}

	@PostMapping("/services/mine/{mineId}/upload-visite")
	@CrossOrigin
	public void uploadVisite(@PathVariable String mineId, @RequestBody VisiteMineDTO visite) {
		System.out.println("uploadVisite " + mineId + " " + visite.toString());
		VisiteMine vm = convertVisiteToDAO(mineId, visite);
		System.out.println("after convertVisiteToDAO " + vm.toString());
		visiteRepo.save(vm);
	}

	private VisiteMine convertVisiteToDAO(String mineId, VisiteMineDTO visite) {
		//VisiteMine vmDAO = MineMapper.INSTANCE.visiteMineToVisiteMineDto(visite);
		DozerBeanMapper dbm = new DozerBeanMapper();
		VisiteMine vmDAO =  dbm.map(visite, VisiteMine.class);
//		VisiteMine vmDAO = modelMapper.map(visite, VisiteMine.class);
		Mine m = mineRepo.getByNom(mineId);
		vmDAO.setMine(m);
		return vmDAO;
	}
}
