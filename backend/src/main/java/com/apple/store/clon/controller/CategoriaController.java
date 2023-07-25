package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.CategoriaDTO;
import com.apple.store.clon.DTO.CategoriaProductoDTO;
import com.apple.store.clon.model.CategoriaModel;
import com.apple.store.clon.response.CategoriaProductoResponseRest;
import com.apple.store.clon.response.CategoriaResponseRest;
import com.apple.store.clon.service.CategoriaProductService;
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
    @Autowired
    private CategoriaProductService serviceproduct;
    @GetMapping("/all")
    public ResponseEntity<CategoriaResponseRest> getAll(){
        return service.getAll();
    }

    @PostMapping("/new/category")
    public ResponseEntity<CategoriaModel> save (@RequestBody CategoriaDTO model){
        return service.save(model);
    }

    @GetMapping("/category/{categoria}")
    public  ResponseEntity<CategoriaResponseRest>findByCategory(@PathVariable String categoria){
        return service.findByCategory(categoria);
    }
    @PostMapping("/new")
    public ResponseEntity<CategoriaProductoResponseRest> save(@RequestBody CategoriaProductoDTO model){
        return serviceproduct.save(model);
    }
    @GetMapping("/search")
    public ResponseEntity<CategoriaProductoResponseRest>search(
            @RequestParam (required = false) String name,
            @RequestParam (required = false) String maxprice,
            @RequestParam (required = false) String minprice

    ){
        return serviceproduct.search(name, maxprice, minprice);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<CategoriaProductoResponseRest> findById(@PathVariable Long id){
        return serviceproduct.findById(id);
    }
}
