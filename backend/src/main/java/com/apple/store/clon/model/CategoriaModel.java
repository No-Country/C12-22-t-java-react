package com.apple.store.clon.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity(name = "Categoria")
@Data
public class CategoriaModel {
    @Id
    @Column(name = "nombre_categoria")
    private String nombreCategoria;

   @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "categoriaModel")
    private List<CategoriaProductoModel> productos;

}
