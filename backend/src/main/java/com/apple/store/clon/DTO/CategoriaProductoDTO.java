package com.apple.store.clon.DTO;

import lombok.Data;

import javax.persistence.Column;

@Data
public class CategoriaProductoDTO {

    private String nombreProducto;
    private float precio;
    private String imagen1;
    private String imagen2;
    private String imagen3;
    private String imagen4;
    private String descripcion;
    private String tamañoPantalla;
    private String modeloChip;
    private CategoriaDTO categoria;
    private String camara;
    private String sistemaOperativo;
    private String bateria;
    private String conectividad;
    private String ram;

}
