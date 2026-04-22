CREATE TABLE IF NOT EXISTS Usuario (
  ID               INT          AUTO_INCREMENT PRIMARY KEY,
  Nombre           VARCHAR(150) NOT NULL,
  Rol              VARCHAR(50)  NOT NULL DEFAULT 'usuario',
  Fecha_registro   DATE         NOT NULL
);

CREATE TABLE IF NOT EXISTS Categoria (
  ID          INT          AUTO_INCREMENT PRIMARY KEY,
  Nombre      VARCHAR(100) NOT NULL,
  Descripcion TEXT
);

CREATE TABLE IF NOT EXISTS Ubicacion (
  ID           INT          AUTO_INCREMENT PRIMARY KEY,
  Nombre_lugar VARCHAR(150) NOT NULL,
  Direccion    VARCHAR(255),
  Ciudad       VARCHAR(100) NOT NULL,
  Descripcion  TEXT
);

CREATE TABLE IF NOT EXISTS Actividad (
  ID                  INT           AUTO_INCREMENT PRIMARY KEY,
  Titulo              VARCHAR(255)  NOT NULL,
  Descripcion         TEXT,
  Precio              DECIMAL(8,2)  NOT NULL,
  Duracion            VARCHAR(100),
  Plazas_disponibles  INT           NOT NULL DEFAULT 0,
  ID_Categoria        INT,
  ID_Ubicacion        INT,
  FOREIGN KEY (ID_Categoria) REFERENCES Categoria(ID),
  FOREIGN KEY (ID_Ubicacion) REFERENCES Ubicacion(ID)
);

CREATE TABLE IF NOT EXISTS Reserva (
  ID             INT          AUTO_INCREMENT PRIMARY KEY,
  Fecha_reserva  DATE         NOT NULL,
  Cantidad       INT          NOT NULL DEFAULT 1,
  Estado         VARCHAR(50)  NOT NULL DEFAULT 'pendiente',
  Email          VARCHAR(255) NOT NULL,
  ID_Usuario     INT,
  ID_Actividad   INT,
  FOREIGN KEY (ID_Usuario)   REFERENCES Usuario(ID),
  FOREIGN KEY (ID_Actividad) REFERENCES Actividad(ID)
);

CREATE TABLE IF NOT EXISTS Entrada (
  ID            INT           AUTO_INCREMENT PRIMARY KEY,
  Codigo        VARCHAR(50)   NOT NULL UNIQUE,
  Fecha_compra  DATE          NOT NULL,
  Precio_total  DECIMAL(8,2)  NOT NULL,
  ID_Reserva    INT           NOT NULL UNIQUE,
  FOREIGN KEY (ID_Reserva) REFERENCES Reserva(ID)
);

CREATE TABLE IF NOT EXISTS Pago (
  ID           INT           AUTO_INCREMENT PRIMARY KEY,
  Estado_pago  VARCHAR(50)   NOT NULL DEFAULT 'pendiente',
  Fecha_pago   DATE,
  Importe      DECIMAL(8,2)  NOT NULL,
  ID_Reserva   INT           NOT NULL UNIQUE,
  FOREIGN KEY (ID_Reserva) REFERENCES Reserva(ID)
);

CREATE TABLE IF NOT EXISTS Actividad_Reserva (
  ID_Actividad  INT NOT NULL,
  ID_Reserva    INT NOT NULL,
  PRIMARY KEY (ID_Actividad, ID_Reserva),
  FOREIGN KEY (ID_Actividad) REFERENCES Actividad(ID),
  FOREIGN KEY (ID_Reserva)   REFERENCES Reserva(ID)
);

CREATE TABLE IF NOT EXISTS Categoria_Actividad (
  ID_Categoria  INT NOT NULL,
  ID_Actividad  INT NOT NULL,
  PRIMARY KEY (ID_Categoria, ID_Actividad),
  FOREIGN KEY (ID_Categoria) REFERENCES Categoria(ID),
  FOREIGN KEY (ID_Actividad) REFERENCES Actividad(ID)
);

CREATE TABLE IF NOT EXISTS Ubicacion_Actividad (
  ID_Ubicacion  INT NOT NULL,
  ID_Actividad  INT NOT NULL,
  PRIMARY KEY (ID_Ubicacion, ID_Actividad),
  FOREIGN KEY (ID_Ubicacion) REFERENCES Ubicacion(ID),
  FOREIGN KEY (ID_Actividad) REFERENCES Actividad(ID)
);

INSERT INTO Usuario (Nombre, Rol, Fecha_registro) VALUES
('Carlos Garcia',    'usuario',        '2024-01-15'),
('Maria Lopez',      'usuario',        '2024-02-20'),
('Pedro Martinez',   'usuario',        '2024-03-05'),
('Ana Fernandez',    'administrador',  '2023-11-01'),
('Laura Sanchez',    'usuario',        '2024-04-10'),
('Roberto Torres',   'usuario',        '2024-05-18'),
('Elena Ruiz',       'usuario',        '2024-06-22'),
('Miguel Herrera',   'administrador',  '2023-10-15');

INSERT INTO Categoria (Nombre, Descripcion) VALUES
('Gastronomia',   'Actividades relacionadas con la cocina y la cultura culinaria valenciana.'),
('Tour Cultural', 'Visitas guiadas a monumentos, museos y lugares de interes historico.'),
('Naturaleza',    'Excursiones y actividades al aire libre en entornos naturales.'),
('Deportes',      'Actividades deportivas y de aventura en el entorno de Valencia.'),
('Ocio Nocturno', 'Experiencias de entretenimiento y cultura nocturna en Valencia.'),
('Festivos',      'Actividades relacionadas con las fiestas tradicionales valencianas.');

INSERT INTO Ubicacion (Nombre_lugar, Direccion, Ciudad, Descripcion) VALUES
('Mercado Central',                    'Pl. de la Ciudad de Brujas, s/n',   'Valencia', 'Mercado modernista con mas de 1.200 puestos. Ideal para tours gastronomicos.'),
('Catedral de Valencia',               'Pl. de la Reina, s/n',              'Valencia', 'Catedral gotica del siglo XIII, custodia del Santo Caliz. Visita el Micalet.'),
('Lonja de la Seda',                   'Pl. del Mercado, s/n',              'Valencia', 'Obra maestra del gotico civil valenciano. Patrimonio UNESCO desde 1996.'),
('Ciudad de las Artes y las Ciencias', 'Av. del Professor Lopez Pinero, 7', 'Valencia', 'Complejo de Calatrava con Oceanografic, Museu de les Ciencies y Hemisferic.'),
('Parque Natural de La Albufera',      'Carretera de El Saler, km 7',       'Valencia', 'Parque natural con lago, arrozales y aves migratorias. Cuna de la paella.'),
('Barrio del Carmen',                  'C/ del Carmen, s/n',                'Valencia', 'Barrio bohemio con arte urbano, bares y edificios medievales.'),
('Bioparc Valencia',                   'Av. Pio Baroja, 3',                 'Valencia', 'Zoo de inmersion que recrea el ecosistema africano sin barreras visibles.'),
('Jardin del Turia',                   'Cauce del Rio Turia',               'Valencia', '9 km de parque en el antiguo cauce del rio, con zonas deportivas y culturales.'),
('Playa de Las Arenas',                'Paseo de Neptuno, s/n',             'Valencia', 'Playa urbana con aguas mediterraneas, paseo maritimo y restaurantes.'),
('Barrio de Ruzafa',                   'C/ Cadiz, s/n',                     'Valencia', 'Barrio multicultural moderno, epicentro de la gastronomia y el arte.');

INSERT INTO Actividad (Titulo, Descripcion, Precio, Duracion, Plazas_disponibles, ID_Categoria, ID_Ubicacion) VALUES
('Clase de Paella Valenciana',          'Aprende a cocinar la autentica paella valenciana con un chef local. Incluye ingredientes y degustacion.',              65.00, '3 horas',    12, 1, 1),
('Tour Gastronomico por el Mercado',    'Recorre el Mercado Central con guia experto y degusta horchata, queso, embutidos y productos locales.',               40.00, '2,5 horas',  15, 1, 1),
('Visita Guiada a la Catedral',         'Descubre los secretos de la Catedral: el Santo Caliz, la capilla gotica y las vistas desde el Micalet.',              18.00, '1,5 horas',  20, 2, 2),
('Tour Lonja de la Seda y Catedral',    'Visita combinada a los dos grandes monumentos del centro historico con guia bilingue.',                               25.00, '2 horas',    18, 2, 3),
('Valencia a Pie: Centro Historico',    'Paseo guiado por el Carmen, la Lonja, el Mercado Central y la Plaza del Ayuntamiento.',                               15.00, '2 horas',    25, 2, 6),
('Tour Ciudad de las Artes y Ciencias', 'Visita guiada al complejo de Calatrava con entrada al Museu de les Ciencies y Hemisferic incluidos.',                 35.00, '2,5 horas',  20, 2, 4),
('Kayak por La Albufera',               'Ruta en kayak por los canales del Parque Natural al amanecer. Incluye guia, kayak y chaleco.',                        35.00, '2 horas',    10, 3, 5),
('Excursion a La Albufera con Paella',  'Visita al Parque Natural con paseo en barca y almuerzo de paella tradicional incluido.',                              55.00, '5 horas',    20, 3, 5),
('Ruta en Bicicleta por Valencia',      'Pedalea por el Jardin del Turia, las playas y la Ciudad de las Artes. Bicicleta incluida.',                           25.00, '2 horas',    16, 4, 8),
('Paddle Surf en Las Arenas',           'Clase de paddle surf para principiantes en el Mediterraneo con monitor titulado. Material incluido.',                  30.00, '1,5 horas',   8, 4, 9),
('Tour Nocturno por el Carmen',         'Paseo nocturno por el barrio mas bohemio de Valencia: arte urbano, bares historicos y leyendas medievales.',           20.00, '2 horas',    20, 5, 6),
('Guia de Las Fallas',                  'Vive Las Fallas como valenciano: Mascleta, Ofrenda, monumentos y la Crema con guia local experto.',                   30.00, '4 horas',    30, 6, 2),
('Visita Guiada al Bioparc',            'Recorre el zoo de inmersion africano con guia especializado que explica ecosistemas y especies.',                      40.00, '3 horas',    15, 3, 7),
('Taller de Horchata y Fartons',        'Aprende a preparar horchata de chufa artesanal y fartons en este taller unico en Valencia.',                          30.00, '2 horas',    12, 1, 1),
('Tour Ruzafa: Arte y Gastronomia',     'Descubre el barrio mas trendy de Valencia con degustaciones en sus mejores bares y visita a galerias de arte.',       45.00, '3 horas',    15, 1, 10);

INSERT INTO Reserva (Fecha_reserva, Cantidad, Estado, Email, ID_Usuario, ID_Actividad) VALUES
('2024-07-10', 2, 'confirmada', 'carlos.garcia@email.com',  1,  1),
('2024-07-11', 1, 'confirmada', 'maria.lopez@email.com',    2,  3),
('2024-07-12', 3, 'confirmada', 'pedro.martinez@email.com', 3,  9),
('2024-07-15', 2, 'pendiente',  'laura.sanchez@email.com',  5,  7),
('2024-07-16', 4, 'confirmada', 'carlos.garcia@email.com',  1, 12),
('2024-07-18', 1, 'confirmada', 'roberto.torres@email.com', 6,  5),
('2024-07-20', 2, 'cancelada',  'elena.ruiz@email.com',     7,  2),
('2024-07-22', 2, 'confirmada', 'maria.lopez@email.com',    2,  8),
('2024-07-25', 1, 'confirmada', 'pedro.martinez@email.com', 3, 11),
('2024-07-28', 3, 'pendiente',  'laura.sanchez@email.com',  5,  6);

INSERT INTO Entrada (Codigo, Fecha_compra, Precio_total, ID_Reserva) VALUES
('VLC-2024-001', '2024-07-10', 130.00, 1),
('VLC-2024-002', '2024-07-11',  18.00, 2),
('VLC-2024-003', '2024-07-12',  75.00, 3),
('VLC-2024-005', '2024-07-16', 120.00, 5),
('VLC-2024-006', '2024-07-18',  15.00, 6),
('VLC-2024-008', '2024-07-22', 110.00, 8),
('VLC-2024-009', '2024-07-25',  20.00, 9);

INSERT INTO Pago (Estado_pago, Fecha_pago, Importe, ID_Reserva) VALUES
('completado',  '2024-07-10', 130.00,  1),
('completado',  '2024-07-11',  18.00,  2),
('completado',  '2024-07-12',  75.00,  3),
('pendiente',    NULL,          70.00,  4),
('completado',  '2024-07-16', 120.00,  5),
('completado',  '2024-07-18',  15.00,  6),
('reembolsado', '2024-07-20',  80.00,  7),
('completado',  '2024-07-22', 110.00,  8),
('completado',  '2024-07-25',  20.00,  9),
('pendiente',    NULL,         105.00, 10);

INSERT INTO Actividad_Reserva (ID_Actividad, ID_Reserva) VALUES
(1,1),(3,2),(9,3),(7,4),(12,5),(5,6),(2,7),(8,8),(11,9),(6,10);

INSERT INTO Categoria_Actividad (ID_Categoria, ID_Actividad) VALUES
(1,1),(1,2),(2,3),(2,4),(2,5),(2,6),(3,7),(3,8),(4,9),(4,10),
(5,11),(6,12),(3,13),(1,14),(1,15);

INSERT INTO Ubicacion_Actividad (ID_Ubicacion, ID_Actividad) VALUES
(1,1),(1,2),(2,3),(3,4),(6,5),(4,6),(5,7),(5,8),(8,9),(9,10),
(6,11),(2,12),(7,13),(1,14),(10,15);
