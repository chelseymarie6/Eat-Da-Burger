CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id INT(15) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(250) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP,
PRIMARY KEY(id)
);


