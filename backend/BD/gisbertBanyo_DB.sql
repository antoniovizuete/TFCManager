CREATE DATABASE IF NOT EXISTS gisbertBanyo_DB;

USE gisbertBanyo_DB;

CREATE TABLE IF NOT EXISTS roles(
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR (30)
);

INSERT INTO roles (role_name)
VALUES
('Administrador'),
('Empleado');



CREATE TABLE IF NOT EXISTS users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR (20) NOT NULL,
    user_email VARCHAR (30) NOT NULL,
    user_password VARCHAR (512) NOT NULL,
    user_role INT(5) NOT NULL,
    user_state BIT DEFAULT 1,
    FOREIGN KEY (user_role) REFERENCES roles(role_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO users (user_name, user_email, user_password, user_role)
VALUES
('PedroCalvo', 'pedrojcalvo@gmail.com', '$2a$10$1ISZ7Mr2C4dr03mXI/ImLuEZjwlWJc/8LjDM83s35fccZ1xTR/c1q', 1 );



CREATE TABLE IF NOT EXISTS customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_dni VARCHAR (9),
    customer_name VARCHAR (30),
    customer_email VARCHAR (30),
    customer_address VARCHAR (50),
    customer_city VARCHAR (30),
    customer_province VARCHAR (30),
    customer_cp INT (5),
    customer_phone VARCHAR (9),
    customer_state BIT DEFAULT 1
);

INSERT INTO customers (customer_dni, customer_name, customer_email, customer_address, customer_city, customer_province, customer_cp, customer_phone)
VALUES
('31559875H', 'Arturo Perez-Reverte',      'arturoperezreverte@gmail.com',   'Avenida Constitucion 17 3B', 'Elda',              'Alicante',    '03600',  '975765456'),
('79157842G', 'Miguel de Unamuno',         'migueldeunamuno@gmail.com',      'Plaza de las Malvas 27 4C',  'Albacete',          'Albacete',    '02006',  '691254781'),
('47569575B', 'Isabel Allende',            'isabelallende@gmail.com',        'Los Olivos 34 1J',           'Sevilla',           'Sevilla',     '41017',  '693459782'),
('25843691B', 'Francisco Baldomero',       'franciscobladomero@gmail.com',   'Altiplano 25 2C',            'Lepe',              'Huelva',      '21004',  '689421689'),
('36572158V', 'Margarita Fernandez',       'margaritafernandez@gmail.com',   'Las casitas 45',             'Cuntis',            'Pontevedra',  '36670',  '758693217'),
('65879635S', 'Eustaquio Canto Cano',      'eustaquiocantocano@gmail.com',   'Benito Perez Galdos 34 3D',  'Villena',           'Alicante',    '03400',  '635872541'),
('75869324L', 'Patrick Rotfus',            'patrickrotfus@gmail.com',        'Cañada 34',                  'Villena',           'Alicante',    '03400',  '755215215'),
('58637931W', 'John Ronald Reuel Tolkien', 'jrrt@gmail.com',                 'La Comarca 32 1C',           'Bolson Cerrado',    'La Comarca',  '00010',  '658412589'),
('75983214T', 'Robert E Howart',           'conan@gmail.com',                'Casicas del señor 12',       'Alicante',          'Alicante',    '03001',  '635213121'),
('19657394W', 'Andrzej Sapkowski',         'thewitcher@gmail.com',           'Temeria 34',                 'Vengerberg',        'Aedirn',      '99999',  '733898741'),
('58234498G', 'Michael Moorcock',          'campeoneterno@gmail.com',        'Grandes escritores 45',      'Madrid',            'Madrid',      '28082',  '695369963'),
('72396542Q', 'William Faulkner',          'williamfaulkner@gmail.com',      'Estafeta 87 1D',             'Pamplona',          'Pamplona',    '31001',  '753159854'),
('72589654H', 'Oscar Wilde',               'oscarwilde@gmail.com',           'Gran Vía 134 2D',            'Alicante',          'Alicante',    '03001',  '619736542'),
('25731458L', 'Franz Kafka',               'franzkafka@gmail.com',           'Paseo de los Tristes 94',    'Granada',           'Granada',     '18001',  '638554221'),
('12358641E', 'William Shakespeare',       'williamshakespeare@gmail.com',   'Marques de Larios 21',       'Málaga',            'Málaga',      '29001',  '733447147'),
('26439874K', 'James Joyce',               'jamesjoyce@gmail.com',           'Laurel 36 2C',               'Logroño',           'Logroño',     '26001',  '722998877'),
('68542142H', 'Philip K. Dick',            'philipkdick@gmail.com',          'Paseo de Gracia 41 5D',      'Barcelona',         'Barcelona',   '08001',  '658965874'),
('32154785G', 'Gabriel García Márquez',    'gabrielgarciamarquez@gmail.com', 'Ruta de los Molinos 49 4A',  'Campo de Criptana', 'Ciudad Real', '13610',  '673198654');




CREATE TABLE IF NOT EXISTS projects(
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    project_name VARCHAR (20) NOT NULL,
    project_author INT(5) NOT NULL,
    project_customer INT(5) NOT NULL,
    project_description VARCHAR(200),
    project_date TIMESTAMP NOT NULL DEFAULT CURRENT_DATE(),
    project_state BIT DEFAULT 1,
    FOREIGN KEY (project_author) REFERENCES users(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (project_customer) REFERENCES customers(customer_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO projects(project_name, project_author, project_customer, project_description)
VALUES
('Reforma Heladería Sirvent', 1, 1, 'Reforma eléctrica integral del local. Iluminación de la fachada.');



CREATE TABLE IF NOT EXISTS materials(
    material_id INT PRIMARY KEY AUTO_INCREMENT,
    material_reference VARCHAR (50),
    material_brand VARCHAR (50),
    material_description VARCHAR (200),
    material_pvp DECIMAL (6,2),
    material_ecotax VARCHAR (10),
    material_state BIT DEFAULT 1
);

INSERT INTO materials (material_reference, material_brand, material_description, material_pvp, material_ecotax)
VALUES
('10950-ABR', 'EFAPEL', 'ADAPT MODULAR Q45 P/CANALES C/TAPA L75 BLANCO', '1.45', 'Si'),
('90608-TIS', 'EFAPEL', 'TECLA INT. BIPOLAR GRIS', '3.35', 'No'),
('10295-RBR', 'EFAPEL', 'TOPE P/CANAL 180X50 BLANCO', '2.28', 'No'),
('90605-TAL', 'EFAPEL', 'TECLA SIMPLE CON SIMBOLO DE CAMPANA ALUMINIO', '3.35', 'Si');



-- SOURCE C:/Users/34744/Desktop/TFCManager/backend/BD/gisbertBanyo_DB.sql;
