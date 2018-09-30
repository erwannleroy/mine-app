package com.wann.minesoft;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wann.minesoft.dao.Mine;
import com.wann.minesoft.dao.VisiteMine;
import com.wann.minesoft.dto.MineLightDTO;
import com.wann.minesoft.dto.VisiteMineDTO;

@RestController
public class MineController {

	@Autowired
	private MineRepository repo;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping("/services/mines-all")
	@CrossOrigin
	public List<MineLightDTO> retrieveAll() {
		List<Mine> result = repo.findAll();
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
		Collection<Mine> mines = repo.findByNomContaining(name);
		List<MineLightDTO> result = mines.stream().map(mine -> convertMineToDTO(mine)).collect(Collectors.toList());
		return result;
	}

	
}
