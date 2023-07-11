package com.apple.store.clon.DTO;

import lombok.Data;

import java.sql.Date;

@Data
public class usuarioRegistroDTO {
    private String email;
    private String password;
    private String nombres;
    private String apellidos;

}
