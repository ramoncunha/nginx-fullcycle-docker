DROP DATABASE IF EXISTS nodedb;

CREATE DATABASE nodedb;

USE nodedb;

DROP TABLE IF EXISTS people;

CREATE TABLE people (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  PRIMARY KEY (id)
);

INSERT INTO people VALUES(1, 'Ramon');