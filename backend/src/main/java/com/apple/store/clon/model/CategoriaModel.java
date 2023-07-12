package com.apple.store.clon.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity(name = "Categoria")
@Data
public class CategoriaModel {
    @Id
    @Column(name = "categoria_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long categoriaId;
    @Column(name = "nombre_categoria")
    private String nombreCategoria;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categoria_producto")
    private CategoriaProductoModel categoriaProductoModel;

}
