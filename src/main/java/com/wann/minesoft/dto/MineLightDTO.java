package com.wann.minesoft.dto;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
public class MineLightDTO {
	
	private String id;
    private String nom;
    private String gps;

    private List<BassinLightDTO> bassins;
    private List<VisiteMineDTO> visitesMines;


}
