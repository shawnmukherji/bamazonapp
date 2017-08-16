-- Database Creation
CREATE DATABASE Bamazon;

USE Bamazon;


-- first table -- 

CREATE TABLE Products(
ItemID INTEGER AUTO_INCREMENT PRIMARY KEY,
ProductName VARCHAR(30),
DepartmentName VARCHAR(30),
Price DOUBLE(10,2),
StockQuantity INTEGER);

-- Seed Items into Database
INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
VALUES ("bread", "grocery", 1.99, 12),
  ("Juice", "grocery", 2.99, 24),
  ("Playstation 4 ", "electronics", 399.99, 5),
 

-- View Database Entries
-- SELECT * FROM Products;


-- second table -- 

CREATE TABLE Departments(
DepartmentID INTEGER AUTO_INCREMENT PRIMARY KEY,
DepartmentName VARCHAR(30),
OverHeadCosts DOUBLE(10,2),
TotalSales DOUBLE(10,2));

-- Seed Departments into Database
INSERT INTO Departments(DepartmentName, OverHeadCosts, TotalSales)
VALUES ("grocery", 10500.00, -10000.00),
  ("electronics", 25000.00, 0.00),
  ("sporting goods", 15000.00, 0.00),
  ("books", 5000.00, 0.00),
  ("dvds", 20000.00, 0.00),
  ("music", 7500.00, 0.00);

-- View Database Entries
-- SELECT * FROM Departments;