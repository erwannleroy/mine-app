SET SCHEMA MINESOFT;
DROP TABLE IF EXISTS BASSIN_VERSE;
DROP TABLE IF EXISTS EVENEMENT;
DROP TABLE IF EXISTS BASSIN;
DROP TABLE IF EXISTS MINE;


CREATE TABLE MINE (
   ID VARCHAR(10),
   NOM TEXT,
   GPS TEXT,
   PRIMARY KEY(ID)
);


CREATE TABLE BASSIN (
   ID VARCHAR(10),
   NOM TEXT,
   GPS TEXT,
   VOLUME_OBJECTIF INTEGER,
   VOLUME_REEL INTEGER,
   FK_MINE VARCHAR(10) NOT NULL,
   PRIMARY KEY (ID),
   FOREIGN KEY (FK_MINE) REFERENCES MINE(ID)
);


CREATE TABLE EVENEMENT (
   ID INTEGER AUTO_INCREMENT,
   TYPE TEXT,
   DATE TIMESTAMP,
   DESCRIPTION TEXT,
   FK_BASSIN VARCHAR(10),
   PRIMARY KEY (ID),
   FOREIGN KEY (FK_BASSIN) REFERENCES BASSIN(ID)
);



CREATE TABLE BASSIN_VERSE (
   FK_BASSIN_PARENT VARCHAR(10),
   FK_BASSIN_ENFANT VARCHAR(10),
   FOREIGN KEY (FK_BASSIN_PARENT) REFERENCES BASSIN(ID),
   FOREIGN KEY (FK_BASSIN_ENFANT) REFERENCES BASSIN(ID)
);




INSERT INTO minesoft.MINE (ID, NOM, GPS) VALUES ('M_1','POYA', '21°20''38.1"S+165°08''56.2"E');
INSERT INTO minesoft.MINE (ID, NOM, GPS) VALUES ('M_2','KONE', '22°20''38.1"S+165°08''56.2"E');
INSERT INTO minesoft.BASSIN (ID, NOM, GPS, VOLUME_OBJECTIF, VOLUME_REEL, FK_MINE) VALUES ('B_1','BASSIN P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_1');
INSERT INTO minesoft.BASSIN (ID, NOM, GPS, VOLUME_OBJECTIF, VOLUME_REEL, FK_MINE) VALUES ('B_2','BASSIN P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_1');
INSERT INTO minesoft.BASSIN (ID, NOM, GPS, VOLUME_OBJECTIF, VOLUME_REEL, FK_MINE) VALUES ('B_3','BASSIN P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_1');

INSERT INTO minesoft.BASSIN (ID, NOM, GPS, VOLUME_OBJECTIF, VOLUME_REEL, FK_MINE) VALUES ('B_4','BASSIN K1','23°26''38.1"S+165°08''56.2"E', 50, 30, 'M_2');
INSERT INTO minesoft.BASSIN (ID, NOM, GPS, VOLUME_OBJECTIF, VOLUME_REEL, FK_MINE) VALUES ('B_5','BASSIN K2','23°26''38.1"S+165°08''56.2"E', 40, 30, 'M_2');

INSERT INTO MINESOFT.BASSIN_VERSE  VALUES ('B_1','B_3');
INSERT INTO MINESOFT.BASSIN_VERSE VALUES ('B_2','B_3');
INSERT INTO MINESOFT.BASSIN_VERSE VALUES ('B_4','B_5');

INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('ENTRETIEN', {ts '2012-09-17 18:47:52.69'}, 'Recurrage', 'B_1');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('ENTRETIEN', {ts '2012-10-17 18:47:52.69'}, 'Vidage', 'B_2');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('ENTRETIEN', {ts '2016-12-17 18:47:52.69'}, 'Recurrage', 'B_4');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('ENTRETIEN', {ts '2012-11-17 18:47:52.69'}, 'Renflouage', 'B_3');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('ENTRETIEN', {ts '2012-12-17 18:47:52.69'}, 'Recurrage', 'B_4');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('ENTRETIEN', {ts '2015-12-17 18:47:52.69'}, 'Recurrage', 'B_4');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('INCIDENT', {ts '2015-03-17 18:47:52.69'}, 'Effondrement paroi nord', 'B_4');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('INCIDENT', {ts '2013-12-17 18:47:52.69'}, 'Bouchage rigole est', 'B_4');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('INCIDENT', {ts '2013-07-17 18:47:52.69'}, 'Bouchage rigole est', 'B_1');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('INCIDENT', {ts '2014-12-17 18:47:52.69'}, 'Bouchage rigole nord', 'B_2');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('INCIDENT', {ts '2013-12-17 18:47:52.69'}, 'Bouchage rigole sud', 'B_3');
INSERT INTO minesoft.EVENEMENT (TYPE, "DATE", DESCRIPTION, FK_BASSIN) VALUES ('INCIDENT', {ts '2018-12-17 18:47:52.69'}, 'Débordement', 'B_3');




SELECT * FROM MINESOFT.BASSIN;