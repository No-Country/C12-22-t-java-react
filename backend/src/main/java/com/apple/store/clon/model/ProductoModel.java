package com.apple.store.clon.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity(name = "producto")
public class ProductoModel {
    @Id
    @Column(name = "producto_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long productoId;
    @Column(name = "numero_serie", unique = true)
    private String numeroSerie;
    private Date fecha_ingreso;
    private String color;
    @Column(name = "cantidad_memoria")
    private String cantidadMemoria;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categoria_producto")
    private CategoriaProductoModel categoriaProducto;

}
