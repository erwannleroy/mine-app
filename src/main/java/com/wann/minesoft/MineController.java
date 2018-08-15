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
	
	@GetMapping("/minesAll")
	@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8081","http://127.0.0.1:8081"})
	public List<Mine> retrieveAll() {
		List<Mine> result = repo.findAll();
		return result;
	}
	
	@GetMapping("/mines")
	@CrossOrigin(origins = {"http://localhost:4200","http://localhost:8081","http://127.0.0.1:8081"})
	public Collection<Mine> findByName(@RequestParam String name) {
		return repo.findByNomContaining(name);
	}
	
	@PostMapping(path="/mines")
	public Mine addMine(@RequestBody Mine m) {
		Mine save = repo.save(m);
		return save;
	}
}
