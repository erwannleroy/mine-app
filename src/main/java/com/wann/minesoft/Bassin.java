package com.wann.minesoft;

import java.util.List;
import java.util.Set;

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
@Table(name = "bassin")
@Data
public class Bassin {

	@Id
	@Column(name = "id")
	private String id;

	@Column(name = "nom")
	private String nom;

	@Column(name = "volume_objectif")
	private Integer volumeObjectif;

	@Column(name = "volume_reel")
	private Integer volumeReel;

	@Column(name = "gps")
	private String gps;

	@OneToMany
	@JoinColumn(name = "fk_bassin")
	private Set<VisiteBassin> visiteBassins;

	public Bassin() {
	}

	public Bassin(String name) {
		this.nom = name;
	}

}