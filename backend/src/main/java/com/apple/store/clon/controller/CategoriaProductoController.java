package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.CategoriaProductoDTO;
import com.apple.store.clon.model.CategoriaProductoModel;
import com.apple.store.clon.response.CategoriaProductoResponseRest;
import com.apple.store.clon.service.CategoriaProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product/search")
public class CategoriaProductoController {
    @Autowired
    private CategoriaProductService service;

    @PostMapping("/new")
    public ResponseEntity<CategoriaProductoResponseRest> save(@RequestBody CategoriaProductoDTO model){
        return service.save(model);
    }
    @GetMapping("")
    public ResponseEntity<CategoriaProductoResponseRest>search(
            @RequestParam String name,
            @RequestParam String maxPrice,
            @RequestParam String minPrice
    ){

        return service.search(name, maxPrice, minPrice);
    }



}
