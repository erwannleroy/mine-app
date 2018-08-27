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
public class Evenement {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="type")
    private String type;
    
    @Column(name="date_evt")
    private Calendar dateEvt;
    
    @Column(name="description") 
    private String description;

    public Evenement() {
    }



}