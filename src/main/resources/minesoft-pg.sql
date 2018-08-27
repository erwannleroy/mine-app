
DROP TABLE IF EXISTS bassin_verse;
DROP TABLE IF EXISTS evenement;
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


CREATE TABLE evenement (
   id SERIAL,
   type TEXT,
   date_evt TIMESTAMP,
   description TEXT,
   fk_bassin VARCHAR(10),
   PRIMARY KEY (id),
   FOREIGN KEY (fk_bassin) REFERENCES bassin(id)
);



CREATE TABLE bassin_verse (
   fk_bassin_PARENT VARCHAR(10),
   fk_bassin_ENFANT VARCHAR(10),
   FOREIGN KEY (fk_bassin_PARENT) REFERENCES bassin(id),
   FOREIGN KEY (fk_bassin_ENFANT) REFERENCES bassin(id)
);




INSERT INTO mine (id, nom, gps) VALUES ('M_1','POYA', '21°20''38.1"S+165°08''56.2"E');
INSERT INTO mine (id, nom, gps) VALUES ('M_2','KONE', '22°20''38.1"S+165°08''56.2"E');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('B_1','bassin P1','21°20''38.1"S+165°08''56.2"E', 100, 80, 'M_1');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('B_2','bassin P2','22°20''38.1"S+165°08''56.2"E', 200, 150, 'M_1');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('B_3','bassin P3','22°20''38.1"S+165°08''56.2"E', 400, 250, 'M_1');

INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('B_4','bassin K1','23°26''38.1"S+165°08''56.2"E', 50, 30, 'M_2');
INSERT INTO bassin (id, nom, gps, volume_objectif, volume_reel, fk_mine) VALUES ('B_5','bassin K2','23°26''38.1"S+165°08''56.2"E', 40, 30, 'M_2');

INSERT INTO bassin_verse  VALUES ('B_1','B_3');
INSERT INTO bassin_verse VALUES ('B_2','B_3');
INSERT INTO bassin_verse VALUES ('B_4','B_5');

INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('ENTRETIEN', {ts '2012-09-17 18:47:52.69'}, 'Recurrage', 'B_1');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('ENTRETIEN', {ts '2012-10-17 18:47:52.69'}, 'Vidage', 'B_2');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('ENTRETIEN', {ts '2016-12-17 18:47:52.69'}, 'Recurrage', 'B_4');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('ENTRETIEN', {ts '2012-11-17 18:47:52.69'}, 'Renflouage', 'B_3');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('ENTRETIEN', {ts '2012-12-17 18:47:52.69'}, 'Recurrage', 'B_4');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('ENTRETIEN', {ts '2015-12-17 18:47:52.69'}, 'Recurrage', 'B_4');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('INCidENT', {ts '2015-03-17 18:47:52.69'}, 'Effondrement paroi nord', 'B_4');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('INCidENT', {ts '2013-12-17 18:47:52.69'}, 'Bouchage rigole est', 'B_4');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('INCidENT', {ts '2013-07-17 18:47:52.69'}, 'Bouchage rigole est', 'B_1');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('INCidENT', {ts '2014-12-17 18:47:52.69'}, 'Bouchage rigole nord', 'B_2');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('INCidENT', {ts '2013-12-17 18:47:52.69'}, 'Bouchage rigole sud', 'B_3');
INSERT INTO evenement (TYPE, date_evt, description, fk_bassin) VALUES ('INCidENT', {ts '2018-12-17 18:47:52.69'}, 'Débordement', 'B_3');




SELECT * FROM bassin;