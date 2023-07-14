package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.CategoriaProductoDTO;
import com.apple.store.clon.model.CategoriaProductoModel;
import com.apple.store.clon.response.CategoriaProductoResponseRest;
import com.apple.store.clon.service.CategoriaProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/new")
public class CategoriaProductoController {
    @Autowired
    private CategoriaProductService service;

    @PostMapping("/product")
    public ResponseEntity<CategoriaProductoResponseRest> save(@RequestBody CategoriaProductoDTO model){
        return service.save(model);
    }

    @GetMapping("/producto")
    public  ResponseEntity<CategoriaProductoResponseRest> getAll(){
        return service.getAll();
    }
}
