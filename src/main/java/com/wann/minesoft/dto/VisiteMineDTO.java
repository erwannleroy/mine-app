package com.wann.minesoft.dto;

import java.util.Calendar;
import java.util.Collection;
import java.util.HashSet;
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

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class VisiteMineDTO {

    private Long id;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Calendar dateVisite;
    private String operateur;
    private String contexte;
    private String meteo;
    private Double pluviometrie;
    private Collection<VisiteBassinDTO> visitesBassins;
    




}