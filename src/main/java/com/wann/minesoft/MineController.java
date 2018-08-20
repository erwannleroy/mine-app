package com.wann.minesoft;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MineController {

	@Autowired
	private MineRepository repo;
	
	@GetMapping("/services/mines-all")
	@CrossOrigin
	public List<Mine> retrieveAll() {
		List<Mine> result = repo.findAll();
		return result;
	}
	
	@GetMapping("/services/mines-by-name")
	@CrossOrigin
	public Collection<Mine> findByName(@RequestParam String name) {
		return repo.findByNomContaining(name);
	}
	
	@PostMapping(path="/services/mines")
	public Mine addMine(@RequestBody Mine m) {
		Mine save = repo.save(m);
		return save;
	}
}
