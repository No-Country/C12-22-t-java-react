CREATE TABLE Categoria(
    nombre_categoria VARCHAR(50) NOT NULL,
        CONSTRAINT PK_CATEGORIA PRIMARY KEY(nombre_categoria)
);

CREATE TABLE categoria_producto(
    categoria_producto LONG AUTO_INCREMENT,
    nombre_producto VARCHAR(50) NOT NULL,
    descripcion TEXT,
        CONSTRAINT PK_CATEGORIA_PRODUCTO PRIMARY KEY(categoria_producto)
);