package com.wann.minesoft;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wann.minesoft.dao.Mine;
import com.wann.minesoft.dao.VisiteMine;

@Repository
interface VisiteRepository extends JpaRepository<VisiteMine, Long> {
	
}		