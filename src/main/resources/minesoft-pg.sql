
DROP TABLE IF EXISTS visite_bassin;
DROP TABLE IF EXISTS visite_mine;
DROP TABLE IF EXISTS bassin;
DROP TABLE IF EXISTS mine;


CREATE TABLE mine (
   id VARCHAR(10),
   nom TEXT,
   gps TEXT,
   PRIMARY KEY(id)
);


CREATE TABLE bassin (
   id VARCHAR(10),
   nom TEXT,
   gps TEXT,
   volume_objectif INTEGER,
   volume_reel INTEGER,
   fk_mine VARCHAR(10) NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (fk_mine) REFERENCES mine(id)
);


CREATE TABLE visite_mine (
   id SERIAL,
   date_visite TIMESTAMP,
   fk_mine VARCHAR(10),
   operateur TEXT,
   contexte TEXT,
   meteo TEXT,
   pluviometrie real,
   PRIMARY KEY (id),
   FOREIGN KEY (fk_mine) REFERENCES mine(id)
);

CREATE TABLE visite_bassin(
   id SERIAL,
   en_eau BOOLEAN,
   couleur_eau_bassin VARCHAR(10),
   ecoulement_entree BOOLEAN,
   couleur_eau_entree VARCHAR(10),
   ecoulement_sortie BOOLEAN,
   couleur_eau_sortie VARCHAR(10),
   etat_parois VARCHAR(10),
   presence_renard BOOLEAN,
   type_intervention TEXT,
   fk_visite_mine INTEGER,
   fk_bassin VARCHAR(10),
   PRIMARY KEY (id),
   FOREIGN KEY (fk_visite_mine) REFERENCES visite_mine(id),
   FOREIGN KEY (fk_bassin) REFERENCES bassin(id)
);







INSERT INTO mine (id, nom, gps) VALUES ('M_POYA','POYA', '21°20''38.1"S+165°08''56.2"E');
INSERT INTO mine (id, nom, gps) VALUES ('M_KONE','KONE', '22°20''38.1"S+165°08''56.2"E');
INSERT INTO mine (id, nom, gps) VALUES ('M_KOUAOUA','KOUAOUA', '22°20''38.1"S+165°08''56.2"E');
INSERT INTO mine (id, nom, gps) VALUES ('M_CANALA','CANALA', '22°20''38.1"S+165°08''56.2"E');
INSERT INTO mine (id, nom, gps) VALUES ('M_THIO','THIO', '22°20''38.1"S+165°08''56.2"E');
INSERT INTO mine (id, nom, gps) VALUES ('M_VOH','VOH', '22°20''38.1"S+165°08''56.2"E');

INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_1','bassin P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_2','bassin P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_3','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_4','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_5','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_6','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_7','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_8','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_9','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_10','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_11','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_12','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_13','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_14','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('P_B_15','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_POYA');

INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_1','bassin P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_2','bassin P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_3','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_4','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_5','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_6','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_7','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_8','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_9','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_10','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_11','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_12','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_13','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_14','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('K_B_15','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KONE');

INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_1','bassin P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_2','bassin P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_3','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_4','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_5','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_6','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_7','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_8','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_9','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_10','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_11','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_12','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_13','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_14','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('KO_B_15','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_KOUAOUA');

INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_1','bassin P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_2','bassin P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_3','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_4','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_5','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_6','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_7','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_8','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_9','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_10','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_11','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_12','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_13','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_14','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('C_B_15','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_CANALA');

INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_1','bassin P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_2','bassin P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_3','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_4','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_5','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_6','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_7','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_8','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_9','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_10','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_11','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_12','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_13','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_14','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('T_B_15','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_THIO');

INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_1','bassin P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_2','bassin P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_3','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_4','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_5','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_6','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_7','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_8','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_9','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_10','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_11','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_12','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_13','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_14','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('V_B_15','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_VOH');



INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-05-16 15:36:38', 'M_POYA','Gérard Darmon', 'Visite suivi de travaux', 'nuageux, pas de pluie, 23°', 10);
INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-07-16 15:36:38', 'M_KOUAOUA','Christian Clavier', 'Visite fermeture de mine', 'nuageux, pluie, 23°', 10);
INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-08-16 15:36:38', 'M_VOH','Jean paul Rouve', 'Visite à 6 mois', 'ensoleillé, pas de pluie, 31°', 1);
INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-05-23 15:36:38', 'M_CANALA','Anémone', 'Visite à 2 ans', 'nuageux, pas de pluie, 23°', 10);
INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-05-06 15:36:38', 'M_THIO','Josiane Balasko', 'Visite de réhabilitation', 'vent 20 nds, pas de pluie, 23°', 10);
INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-06-16 15:36:38', 'M_KONE','Thierry Lhermitte', 'Visite suite innodation', 'nuageux, pas de pluie, 23°', 10);
INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-03-06 15:36:38', 'M_THIO','Thierry Lhermitte', 'Visite de suivi de travaux', 'vent 30 nds, pas de pluie, 23°', 10);
INSERT INTO minesoft.visite_mine (date_visite, fk_mine, operateur, contexte, meteo, pluviometrie) VALUES(TIMESTAMP '2011-01-06 15:36:38', 'M_THIO','Josiane Balasko', 'Visite de réhabilitation', 'vent 20 nds, pas de pluie, 23°', 10);

INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_1');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_2');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_3');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_4');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_5');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_6');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_7');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EBOULEMENT', false, 'VISITE', 6, 'K_B_8');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_9');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'CLAIRE', false, 'CHARGEE', 'RAS', false, 'VISITE', 6, 'K_B_10');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EROSION', false, 'VISITE', 6, 'K_B_11');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_12');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_13');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_14');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 6, 'K_B_15');


INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_1');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_2');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_3');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_4');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_5');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_6');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_7');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EBOULEMENT', false, 'VISITE', 5, 'T_B_8');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_9');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'CLAIRE', false, 'CHARGEE', 'RAS', false, 'VISITE', 5, 'T_B_10');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EROSION', false, 'VISITE', 5, 'T_B_11');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_12');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_13');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_14');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 5, 'T_B_15');

INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_1');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_2');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_3');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_4');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_5');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_6');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_7');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EBOULEMENT', false, 'VISITE', 7, 'T_B_8');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_9');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'CLAIRE', false, 'CHARGEE', 'RAS', false, 'VISITE', 7, 'T_B_10');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EROSION', false, 'VISITE', 7, 'T_B_11');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_12');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_13');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_14');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 7, 'T_B_15');

INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_1');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_2');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_3');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_4');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_5');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_6');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_7');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EBOULEMENT', false, 'VISITE', 8, 'T_B_8');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_9');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'CLAIRE', false, 'CHARGEE', 'RAS', false, 'VISITE', 8, 'T_B_10');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EROSION', false, 'VISITE', 8, 'T_B_11');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_12');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_13');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_14');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 8, 'T_B_15');


INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_1');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_2');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_3');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_4');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_5');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_6');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_7');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EBOULEMENT', false, 'VISITE', 4, 'C_B_8');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_9');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'CLAIRE', false, 'CHARGEE', 'RAS', false, 'VISITE', 4, 'C_B_10');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EROSION', false, 'VISITE', 4, 'C_B_11');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_12');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_13');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_14');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 4, 'C_B_15');

INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_1');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_2');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_3');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_4');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_5');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_6');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_7');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EBOULEMENT', false, 'VISITE', 3, 'V_B_8');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_9');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'CLAIRE', false, 'CHARGEE', 'RAS', false, 'VISITE', 3, 'V_B_10');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'EROSION', false, 'VISITE', 3, 'V_B_11');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_12');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_13');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_14');
INSERT INTO minesoft.visite_bassin
(en_eau, couleur_eau_bassin, ecoulement_entree, couleur_eau_entree, ecoulement_sortie, couleur_eau_sortie, etat_parois, presence_renard, type_intervention, fk_visite_mine, fk_bassin)
VALUES(false, 'CHARGEE', false, 'ROUGE', false, 'CLAIRE', 'RAS', false, 'VISITE', 3, 'V_B_15');
