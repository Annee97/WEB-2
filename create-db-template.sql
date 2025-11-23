CREATE DATABASE 
    DEFAULT CHARACTER SET = 'utf8mb4';
   
CREATE DATABASE IF NOT EXISTS crud_db;

USE crud_db;
CREATE TABLE IF NOT EXISTS users (
    
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    
    name VARCHAR(100) NOT NULL,
    
        email VARCHAR(100) NOT NULL 
);


INSERT INTO users (name, email) VALUES
('Juan Perez', 'juan.perez@ejemplo.com'),
('Maria Lopez', 'maria.lopez@ejemplo.com');