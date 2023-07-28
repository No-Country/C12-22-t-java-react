package com.apple.store.clon.DTO;

import lombok.Data;

import java.util.List;

@Data
public class ReporteCompraDTO {
    CompraDTO Descripcion;
    private float total;
    private String serieFactura;

    public void CalcularTotal(){
        List<ProductoCompraDTO> productos =this.Descripcion.getCompras();
        for (int i = 0; i < productos.size(); i++) {
            total+= productos.get(i).getPrecio();
        }
        for (int i = 0; i < productos.size(); i++) {
            productos.get(i).setSerie(numerosSerie());
        }
        this.serieFactura= numerosSerieFactura();
    }

    public String numerosSerie(){
        String baseSerie = "F4412SA";
        int agregar = (int) (Math.random()*10000);
        String Final = baseSerie + agregar;
        return Final;
    }
    public String numerosSerieFactura(){
        String baseSerie = "A-";
        int agregar = (int) (Math.random()*10000);
        String Final = baseSerie + agregar;
        return Final;
    }

}
