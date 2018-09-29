package com.wann.minesoft.dto;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
public class VisiteBassinDTO {

	private Long id;
	private String enEau;
	private String couleurEauBassin;
	private String ecoulementEntree;
	private String couleurEauEntree;
	private String ecoulementSortie;
	private String couleurEauSortie;
	private String etatParois;
	private Boolean presenceRenard;
	private String typeIntervention;
	private BassinLightDTO bassin;

}