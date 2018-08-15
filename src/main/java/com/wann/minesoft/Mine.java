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
@Table(name="MINE")
@Data
public class Mine {

    @Id
    @Column(name="ID")
    private String id;
    @Column(name="NOM")
    private String nom;
    
    @Column(name="GPS") 
    private String gps;

    @OneToMany(fetch=FetchType.EAGER)
    @JoinColumn(name="FK_MINE")
    private List<Bassin> bassins;

    
    public Mine() {
    }

    public Mine(String name) {
        this.nom = name;
    }

  
}