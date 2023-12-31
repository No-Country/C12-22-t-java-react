package com.apple.store.clon.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity(name = "usuario")
public class usuarioModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, length = 100)
    private String email;
    private String password;
    @Column(length = 100)
    private String direccion;
    @Column(length = 25)
    private String telefono;
    @Column(length = 100)
    private String nombres;
    @Column(length = 100)
    private String apellidos;
    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;
    @Column(length = 100)
    private String pais;
    @Column(length = 100)
    private String ciudad;
    @Column(length = 100)
    private String sexo;


    public usuarioModel() {
    }

    public usuarioModel(String email, String password, String nombres, String apellidos) {
        this.email = email;
        this.password = password;
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
}
