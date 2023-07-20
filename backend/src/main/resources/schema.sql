CREATE TABLE Categoria(
    nombre_categoria VARCHAR(50) NOT NULL,
        CONSTRAINT PK_CATEGORIA PRIMARY KEY(nombre_categoria)
);

CREATE TABLE categoria_producto(
    categoria_producto_id LONG AUTO_INCREMENT,
    nombre_producto VARCHAR(50) NOT NULL,
    imagen_1 VARCHAR(255),
    imagen_2 VARCHAR(255),
    imagen_3 VARCHAR(255),
    imagen_4 VARCHAR(255),
    precio DECIMAL(12,2),
    Categoria VARCHAR(50),
    descripcion TEXT,
    CONSTRAINT PK_CATEGORIA_PRODUCTO PRIMARY KEY(categoria_producto_id),
    FOREIGN KEY (Categoria) REFERENCES Categoria(nombre_categoria)
);