package com.apple.store.clon.DTO;

import com.apple.store.clon.model.CategoriaModel;
import com.apple.store.clon.model.ProductoModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CategoriaProductSendDTO {
    private Long categoriaProductoId;
    private String nombreProducto;
    private float precio;
    private String imagen1;
    private String imagen2;
    private String imagen3;
    private String imagen4;
    private String descripcion;
    private String tamañoPantalla;
    private String modeloChip;
    @JsonIgnore
    private CategoriaModel categoria;
    private String camara;
    private String sistemaOperativo;
    private String bateria;
    private String conectividad;
    private String ram;
    private String capacidadMemoria;
    private String colores;

    public CategoriaProductSendDTO(String nombreProducto, float precio, String imagen1, String imagen2, String imagen3, String imagen4,
                                   String descripcion, String tamañoPantalla, String modeloChip, CategoriaModel categoria, String camara,
                                   String sistemaOperativo, String bateria, String conectividad, String ram, List<ProductoModel> productos,
                                   Long categoriaProductoId) {
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
        this.imagen4 = imagen4;
        this.descripcion = descripcion;
        this.tamañoPantalla = tamañoPantalla;
        this.modeloChip = modeloChip;
        this.categoria = categoria;
        this.camara = camara;
        this.sistemaOperativo = sistemaOperativo;
        this.bateria = bateria;
        this.conectividad = conectividad;
        this.ram = ram;
        this.capacidadMemoria="";
        this.colores="";
        this.categoriaProductoId=categoriaProductoId;
        List<String> cap=new ArrayList<>();

        if (productos!=null) {
            for (int i = 0; i < productos.size(); i++) {
                cap.add(productos.get(i).getCantidadMemoria());
            }
            for (int i = 0; i < productos.size(); i++) {
                if (i < (productos.size() - 1)) {
                    for (int j = i + 1; j < productos.size(); j++) {
                        if (productos.get(i).getColor().equals(productos.get(j).getColor())) productos.remove(j);
                    }
                }
            }


            for (int i = 0; i < cap.size(); i++) {
                if (i < (cap.size() - 1)) {
                    for (int j = i + 1; j < cap.size(); j++) {
                        if (cap.get(i).equals(cap.get(j))) cap.remove(j);
                    }
                }
            }

            for (int i = 0; i < productos.size(); i++) {
                colores += productos.get(i).getColor() + " ";
            }
            for (int i = 0; i < cap.size(); i++) {
                capacidadMemoria += cap.get(i) + " ";
            }
        }
    }
}
