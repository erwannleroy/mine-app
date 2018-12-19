package com.wann.minesoft.dao;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import org.hibernate.annotations.BatchSize;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name="mine")
@Data
@EqualsAndHashCode(exclude="visites")
public class Mine {

    @Id
    @Column(name="id")
    private String id;
    @Column(name="nom")
    private String nom;
    
    @Column(name="gps") 
    private String gps;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="fk_mine")
    private Set<Bassin> bassins;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="fk_mine")
    @OrderBy("dateVisite DESC")
    private List<VisiteMine> visitesMines;

    
    public Mine() {
    }

    public Mine(String name) {
        this.nom = name;
    }

  
}