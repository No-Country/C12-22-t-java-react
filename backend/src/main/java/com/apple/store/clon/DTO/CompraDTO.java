package com.apple.store.clon.DTO;

import lombok.Data;

import java.util.List;
@Data
public class CompraDTO {

    private String nombreFactura;
    private String direccionEntrega;

    private List<ProductoCompraDTO> compras;
}
