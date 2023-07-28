package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.usuarioRegistroDTO;
import com.apple.store.clon.model.usuarioModel;
import com.apple.store.clon.response.RegistroResponseRest;
import com.apple.store.clon.service.usuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registro")
public class registroController {
    @Autowired
    usuarioService service;
    @PostMapping("")
    public ResponseEntity<RegistroResponseRest> RegistrarUsuario(@RequestBody usuarioRegistroDTO user){
        return service.RegistrarUsuario(user);
    }

    @GetMapping("/users")
    public List<usuarioModel> getall(){
        return service.getAll();
    }
}
