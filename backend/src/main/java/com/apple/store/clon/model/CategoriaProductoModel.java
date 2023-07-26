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
    @Column(name = "categoria_producto_id")
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
    @Column(name = "tamano_pantalla")
    private String tamanoPantalla;
    @Column(name = "modelo_chip")
    private String modeloChip;
    private String camara;
    @Column(name = "sistema_operativo")
    private String sistemaOperativo;
    private String bateria;
    private String conectividad;
    private String ram;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "categoria")
    private CategoriaModel categoriaModel;
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "categoriaProducto")
    private List<ProductoModel> inventario;
}
