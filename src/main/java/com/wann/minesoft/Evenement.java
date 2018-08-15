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
@Table(name="EVENEMENT")
@Data
public class Evenement {

    @Id
    @Column(name="ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="TYPE")
    private String type;
    
    @Column(name="DATE")
    private Calendar date;
    
    @Column(name="DESCRIPTION") 
    private String description;

    public Evenement() {
    }



}