package com.wann.minesoft;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.wann.minesoft.dao.Bassin;
import com.wann.minesoft.dao.Mine;
import com.wann.minesoft.dao.VisiteBassin;
import com.wann.minesoft.dao.VisiteMine;
import com.wann.minesoft.dto.BassinLightDTO;
import com.wann.minesoft.dto.MineLightDTO;
import com.wann.minesoft.dto.VisiteBassinDTO;
import com.wann.minesoft.dto.VisiteMineDTO;

@Mapper(componentModel="spring")
public interface MineMapper {


 
	public static MineMapper INSTANCE = Mappers.getMapper( MineMapper.class );
 
   
    VisiteMine visiteMineToVisiteMineDto(VisiteMineDTO vm);
    Mine mineToMineDto(MineLightDTO m);
    Bassin bassinToBassinDto(BassinLightDTO b);
    VisiteBassin visiteBassinToVisiteBassinDto(VisiteBassinDTO m);
    VisiteMineDTO visiteMineDtoToVisiteMine(VisiteMine vm);
    MineLightDTO mineLightDtoToMine(Mine m);
    BassinLightDTO bassinLightDtoToBassin(Bassin b);
    VisiteBassinDTO visiteBassinDtoToVisiteBassin(VisiteBassin vb);
}