package com.apple.store.clon.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;

@Data
@Entity(name = "producto")
public class ProductoModel {
    @Id
    @Column(name = "numero_serie")
    private Long numeroSerie;
    private Date fecha_ingreso;

}
