package com.wann.minesoft.dao;

import java.util.Calendar;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "visite_bassin")
@Data
@EqualsAndHashCode(exclude="bassin")
public class VisiteBassin {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "en_eau")
	private String enEau;

	@Column(name = "couleur_eau_bassin")
	private String couleurEauBassin;

	@Column(name = "ecoulement_entree")
	private String ecoulementEntree;

	@Column(name = "couleur_eau_entree")
	private String couleurEauEntree;

	@Column(name = "ecoulement_sortie")
	private String ecoulementSortie;

	@Column(name = "couleur_eau_sortie")
	private String couleurEauSortie;

	@Column(name = "etat_parois")
	private String etatParois;

	@Column(name = "presence_renard")
	private Boolean presenceRenard;

	@Column(name = "type_intervention")
	private String typeIntervention;

	@ManyToOne
	@JoinColumn(name = "fk_bassin")
	private Bassin bassin;

}