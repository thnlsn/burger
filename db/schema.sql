CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(55) NOT NULL,
    devoured BIT NOT NULL,

    PRIMARY KEY (id)
);