CREATE TABLE user(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE supplier(
    sid int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (sid)
);


CREATE TABLE medicine(
    mid int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    qty int(10) NOT NULL,
    price decimal(10) NOT NULL,
    sid int(10) NOT NULL,
    img VARCHAR(255) NOT NULL,
    PRIMARY KEY (mid),
    FOREIGN KEY (sid) REFERENCES supplier(sid)
);

SHOW TABLES;

DESC USER;

SELECT * FROM USER;


-- Field      | Type          | Null | Key | Default | Extra |
-- +------------+---------------+------+-----+---------+-------+
-- | mid        | varchar(20)   | NO   | PRI | NULL    |       |
-- | name       | varchar(200)  | YES  |     | NULL    |       |
-- | qty        | int           | YES  |     | NULL    |       |
-- | price      | decimal(10,2) | YES  |     | NULL    |       |
-- | sid        | varchar(20)   | YES  | MUL | NULL    |       |
-- | ima


UPDATE company SET name='eee', c_img='aaaaa', location='null', contact_no='055522271', address='kandy' WHERE company_id='3';
