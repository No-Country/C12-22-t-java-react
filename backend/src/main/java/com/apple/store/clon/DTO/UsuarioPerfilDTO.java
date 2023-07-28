package com.apple.store.clon.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.sql.Date;
@Data
@AllArgsConstructor
public class UsuarioPerfilDTO {
    private String email;
    private String direccion;
    private String telefono;
    private String nombres;
    private String apellidos;
    private Date fechaNacimiento;
    private String pais;
    private String ciudad;
    private String sexo;
}
