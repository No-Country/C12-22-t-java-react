package com.apple.store.clon.model;

import lombok.Data;

import javax.persistence.*;

@Entity(name = "categoria_producto")
@Data
public class CategoriaProductoModel {
    @Id
    @Column(name = "categoria_producto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoriaProductoId;
    @Column (name = "nombre_producto")
    private String nombreProducto;
    private float precio;
    @Column(name = "imagen_1")
    private String imagen1;
    @Column(name = "imagen_2")
    private String imagen2;
    @Column(name = "imagen_3")
    private String imagen3;
    @Column(name = "imagen_4")
    private String imagen4;
    private String descripcion;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "producto")
    private ProductoModel ProductoModel;
}
