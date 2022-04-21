CREATE DATABASE IF NOT EXISTS gisbertBanyo_DB;

USE gisbertBanyo_DB;

CREATE TABLE IF NOT EXISTS customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR (9),
    name VARCHAR (30),
    email VARCHAR (30),
    address VARCHAR (50),
    city VARCHAR (30),
    province VARCHAR (30),
    cp INT (5),
    phone VARCHAR (9),
    state BIT DEFAULT 1
);

INSERT INTO customers (dni, name, email, address, city, province, cp, phone)
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

CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (20),
    email VARCHAR (30),
    password VARCHAR (512),
    role VARCHAR (20),
    state BIT DEFAULT 1
);

INSERT INTO users (name, email, password, role)
VALUES
('PedroCalvo', 'pedrojcalvo@gmail.com', '1234567890', 'Administrador')

-- CREATE TABLE IF NOT EXISTS materiales(
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     referencia VARCHAR (50),
--     marca VARCHAR (50),
--     descripcion VARCHAR (50),
--     pvp DECIMAL (6,2),
--     ecotasa VARCHAR (10),
--     cantidad INT (6)
-- );

-- INSERT INTO materiales (referencia, marca, descripcion, pvp, ecotasa, cantidad)
-- VALUES
-- ('10950 ABR', 'EFAPEL', 'ADAPT MODULAR Q45 P/CANALES C/TAPA L75 BLANCO', '1,45', 'Si', '124'),
-- ('90608 TIS', 'EFAPEL', 'TECLA INT. BIPOLAR GRIS', '3,35', 'No', '200'),
-- ('10295 RBR', 'EFAPEL', 'TOPE P/CANAL 180X50 BLANCO', '2,28', 'No', '34'),
-- ('90605 TAL', 'EFAPEL', 'TECLA SIMPLE CON SIMBOLO DE CAMPANA ALUMINIO', '3,35', 'Si', '90');

-- SOURCE C:/Users/34744/Desktop/TFCManager/backend/BD/gisbertBanyo_DB.sql;
