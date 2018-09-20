package com.wann.minesoft;

import java.util.Calendar;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="visite_mine")
@Data
public class VisiteMine {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="date_visite")
    private Calendar dateVisite;
    
    @Column(name="operateur") 
    private String operateur;
    
    @Column(name="contexte") 
    private String contexte;

    @Column(name="meteo") 
    private String meteo;
    
    @Column(name="pluviometrie") 
    private Double pluviometrie;

    @OneToMany(fetch=FetchType.EAGER)
    @JoinColumn(name="fk_mine")
    private Set<VisiteBassin> visitesBassins;
    

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="fk_bassin")
    private Bassin bassin;
    
    public VisiteMine() {
    }



}