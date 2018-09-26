package com.wann.minesoft;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="visite_bassin")
@Data
public class VisiteBassin {

	   
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="en_eau")
    private String enEau;
    
    @Column(name="couleur_eau_bassin")
    private String couleurEauBassin;
    
    @Column(name="ecoulement_entree")
    private String ecoulementEntree;
    
    @Column(name="couleur_eau_entree")
    private String couleurEauEntree;
    
    @Column(name="ecoulement_sortie")
    private String ecoulementSortie;
    
    @Column(name="couleur_eau_sortie")
    private String couleurEauSortie;
    
    @Column(name="etat_parois")
    private String etatParois;
    
    @Column(name="presence_renard")
    private Boolean presenceRenard;
    
    @Column(name="type_intervention")
    private String typeIntervention;
    

    public VisiteBassin() {
    }



}