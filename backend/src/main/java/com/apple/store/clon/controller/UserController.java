package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.UsuarioPerfilDTO;
import com.apple.store.clon.model.usuarioModel;
import com.apple.store.clon.security.TokenUtils;
import com.apple.store.clon.service.usuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    usuarioService service;
    @GetMapping("")
    public UsuarioPerfilDTO authenticate (@RequestHeader("Authorization") String token){
        String email = decodeEmail(token);
        return service.findByEmail(email);
    }

    @PostMapping("/update")
    public UsuarioPerfilDTO updatePerfil(@RequestBody UsuarioPerfilDTO user, @RequestHeader("Authorization") String token){
        String email = decodeEmail(token);
        return service.save(user, email);
    }

    private String decodeEmail(String token){
        TokenUtils tokenUtils= new TokenUtils();
        token = token.replace("Bearer ", "");
        String email = tokenUtils.getEmail(token);
        return email;
    }
}
