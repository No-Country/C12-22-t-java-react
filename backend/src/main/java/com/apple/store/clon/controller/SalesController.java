package com.apple.store.clon.controller;

import com.apple.store.clon.DTO.CompraDTO;
import com.apple.store.clon.DTO.ReporteCompraDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
public class SalesController {

    @PostMapping("")
    public ReporteCompraDTO Compra(@RequestBody CompraDTO dto){
        ReporteCompraDTO compra = new ReporteCompraDTO();
        compra.setDescripcion(dto);
        compra.CalcularTotal();
        return compra;
    }
}
