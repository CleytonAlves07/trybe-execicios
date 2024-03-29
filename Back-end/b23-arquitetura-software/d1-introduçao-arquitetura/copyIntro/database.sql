CREATE DATABASE IF NOT EXISTS teste_B_23_1;

USE teste_B_23_1;

DROP TABLE characters;

CREATE TABLE
    characters (
        id INT unsigned NOT NULL auto_increment,
        name VARCHAR(20) NOT NULL,
        cartoon VARCHAR(40) NOT NULL,
        CONSTRAINT pk_characters PRIMARY KEY (id)
    );

INSERT INTO
    `teste_B_23_1`.`characters` (`name`, `cartoon`)
VALUES (
        'Abigail',
        'KND - A Turma do Bairro'
    ), ('Corvo', 'Solar Opposites'), (
        'Dexter',
        'Labotatório de Dexter'
    );