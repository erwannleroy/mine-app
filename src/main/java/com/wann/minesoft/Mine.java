package com.wann.minesoft;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="mine")
@Data
public class Mine {

    @Id
    @Column(name="id")
    private String id;
    @Column(name="nom")
    private String nom;
    
    @Column(name="gps") 
    private String gps;

    @OneToMany(fetch=FetchType.EAGER)
    @JoinColumn(name="fk_mine")
    private List<Bassin> bassins;

//    @OneToMany(fetch=FetchType.EAGER)
//    @JoinColumn(name="fk_mine")
//    private List<VisiteMine> visites;

    
    public Mine() {
    }

    public Mine(String name) {
        this.nom = name;
    }

  
}