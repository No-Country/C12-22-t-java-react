package com.apple.store.clon.controller;

import com.apple.store.clon.model.CategoriaModel;
import com.apple.store.clon.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/all")
public class CategoriaController {
    @Autowired
    private CategoriaService service;
    @GetMapping("/todo")
    public List<CategoriaModel> getAll(){
        return service.getAll();
    }

    @PostMapping("/todo")
    public CategoriaModel save(@RequestBody CategoriaModel model){
        return service.save(model);
    }
}
