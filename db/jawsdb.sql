use tn60pxzk5x5r24pp;

CREATE TABLE burgers (
id INT(15) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255),
devoured BOOLEAN DEFAULT 0 NOT NULL,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

drop table burgers;

INSERT INTO burgers (burger_name)
VALUES ("Grand Slam Burger"),
       ("Da BIG Burger"),
       ("Cheeseburger with Extra Cheese"),
       ("Tiny Burger");