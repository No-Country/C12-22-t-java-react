package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.usuarioRegistroDTO;
import com.apple.store.clon.response.RegistroResponseRest;
import com.apple.store.clon.service.usuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registro")
public class registroController {
    @Autowired
    usuarioService service;
    @PostMapping("")
    public ResponseEntity<RegistroResponseRest> RegistrarUsuario(@RequestBody usuarioRegistroDTO user){
        return service.RegistrarUsuario(user);
    }

    @GetMapping("")
    public String getall(){
        return "holaMundo";
    }
}
