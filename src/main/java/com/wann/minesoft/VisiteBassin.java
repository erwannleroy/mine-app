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
@Table(name="evenement")
@Data
public class VisiteBassin {

	   
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="en-eau")
    private String enEau;
    
    @Column(name="couleur_eau_bassin")
    private String couleurEauBassin;
    
    @Column(name="ecoulement_eau_entree")
    private String ecoulementEauEntree;
    
    @Column(name="couleur_eau_entree")
    private String couleurEauEntree;
    
    @Column(name="ecoulement_eau_sortie")
    private String ecoulementEauSortie;
    
    @Column(name="couleur_eau_sortie")
    private String couleurEauSortie;
    
    @Column(name="etat_parois")
    private String etatParois;
    
    @Column(name="presence_renards")
    private Boolean presenceRenards;
    
    @Column(name="type_intervention")
    private String typeIntervention;
    

    public VisiteBassin() {
    }



}