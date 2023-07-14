package com.apple.store.clon.service;

import com.apple.store.clon.DAO.CategoriaProductoDAO;
import com.apple.store.clon.DTO.CategoriaProductoDTO;
import com.apple.store.clon.model.CategoriaModel;
import com.apple.store.clon.model.CategoriaProductoModel;
import com.apple.store.clon.response.CategoriaProductoResponse;
import com.apple.store.clon.response.CategoriaProductoResponseRest;
import com.apple.store.clon.response.CategoriaResponse;
import com.apple.store.clon.response.CategoriaResponseRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaProductService {
    @Autowired
    private CategoriaProductoDAO dao;

    public ResponseEntity<CategoriaProductoResponseRest> save(CategoriaProductoDTO model){
        CategoriaProductoResponseRest response = new CategoriaProductoResponseRest();
        List<CategoriaProductoModel> insert = new ArrayList<>();
        CategoriaModel categoria= new CategoriaModel();
        categoria.setNombreCategoria(model.getCategoria().getNombreCategoria());
        CategoriaProductoModel nuevoProducto = new CategoriaProductoModel(null,model.getNombreProducto(), model.getPrecio(), model.getImagen1(), model.getImagen2(), model.getImagen3(), model.getImagen4(), model.getDescripcion(), categoria, null);
        insert.add(dao.save(nuevoProducto));
        response.setData(new CategoriaProductoResponse(insert));
        return new ResponseEntity<CategoriaProductoResponseRest>(response, HttpStatus.OK);
    }

    public ResponseEntity<CategoriaProductoResponseRest> getAll(){
        CategoriaProductoResponseRest response = new CategoriaProductoResponseRest();
        response.setData(new CategoriaProductoResponse(dao.findAll()));
        return new ResponseEntity<CategoriaProductoResponseRest>(response,HttpStatus.OK);
    }
}
