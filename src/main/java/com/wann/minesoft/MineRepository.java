package com.wann.minesoft;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface MineRepository extends JpaRepository<Mine, Long> {
	
	Collection<Mine> findByNomContaining(String nom);
}		