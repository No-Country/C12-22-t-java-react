package com.apple.store.clon.DTO;

import lombok.Data;

@Data
public class CategoriaProductoDTO {

    private String nombreProducto;
    private float precio;
    private String imagen1;
    private String imagen2;
    private String imagen3;
    private String imagen4;
    private String descripcion;
    private CategoriaDTO categoria;

}
