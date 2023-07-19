package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.CategoriaDTO;
import com.apple.store.clon.model.CategoriaModel;
import com.apple.store.clon.response.CategoriaResponseRest;
import com.apple.store.clon.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class CategoriaController {
    @Autowired
    private CategoriaService service;
    @GetMapping("/all")
    public ResponseEntity<CategoriaResponseRest> getAll(){
        return service.getAll();
    }

    @PostMapping("/new/category")
    public ResponseEntity<CategoriaModel> save (@RequestBody CategoriaDTO model){
        return service.save(model);
    }

    @GetMapping("/{categoria}")
    public  ResponseEntity<CategoriaResponseRest>findByCategory(@PathVariable String categoria){
        return service.findByCategory(categoria);
    }
}
