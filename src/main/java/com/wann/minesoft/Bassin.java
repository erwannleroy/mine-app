package com.wann.minesoft;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "BASSIN")
@Data
public class Bassin {

	@Id
	@Column(name = "ID")
	private String id;

	@Column(name = "NOM")
	private String nom;

	@Column(name = "VOLUME_OBJECTIF")
	private Integer volumeObjectif;

	@Column(name = "VOLUME_REEL")
	private Integer volumeReel;

	@Column(name = "GPS")
	private String gps;

	@OneToMany
	@JoinColumn(name = "FK_BASSIN")
	private List<Evenement> evenements;

//	@OneToMany
//	@JoinColumn(name = "FK_BASSIN")
//	private List<Incident> incidents;

//	@OneToMany
//	@JoinTable(name = "BASSIN_VERSE", joinColumns = {
//			@JoinColumn(foreignKey = @ForeignKey(name = "FK_BASSIN_PARENT")) })
//	private List<Bassin> bassinsParent;
//
//	@OneToMany
//	@JoinTable(name = "BASSIN_VERSE", joinColumns = { 
//			@JoinColumn(foreignKey = @ForeignKey(name = "FK_BASSIN_ENFANT")) })
//	private List<Bassin> bassinsEnfant;

	public Bassin() {
	}

	public Bassin(String name) {
		this.nom = name;
	}

}