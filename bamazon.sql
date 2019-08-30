CREATE DATABASE bamazon; 

USE bamazon; 

CREATE TABLE products(
    item_id INT NOT NULL, 
    product_name VARCHAR(45) NULL, 
    department_name VARCHAR(45) NULL, 
    price INT NOT NULL, 
    stock_quantity INT NOT NULL
); 

SELECT * FROM products; 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("1", "apples", "produce", "1", "5");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2","bread", "bakery", "4", "3");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3", "pepperoni", "deli", "6", "10");