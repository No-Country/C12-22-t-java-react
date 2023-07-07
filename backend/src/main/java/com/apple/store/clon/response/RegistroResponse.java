package com.apple.store.clon.response;

import com.apple.store.clon.model.usuarioModel;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegistroResponse {
    private usuarioModel usuario;
}
