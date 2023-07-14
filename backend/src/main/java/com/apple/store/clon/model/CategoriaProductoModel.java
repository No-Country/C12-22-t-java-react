package com.apple.store.clon.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity(name = "categoria_producto")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class CategoriaProductoModel {
    @Id
    @Column(name = "categoria_producto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
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
    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "Categoria")
    private CategoriaModel categoriaModel;
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "categoriaProducto")
    private List<ProductoModel> inventario;
}