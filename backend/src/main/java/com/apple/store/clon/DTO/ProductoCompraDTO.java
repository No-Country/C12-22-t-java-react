package com.apple.store.clon.DTO;

import lombok.Data;

@Data
public class ProductoCompraDTO {

    private String producto;
    private String modelo;
    private String color;
    private String capacidad;
    private float precio;
    private String serie;
}
