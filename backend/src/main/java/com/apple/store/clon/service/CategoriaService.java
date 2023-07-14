package com.apple.store.clon.service;

import com.apple.store.clon.DAO.CategoriaDAO;
import com.apple.store.clon.DTO.CategoriaDTO;
import com.apple.store.clon.model.CategoriaModel;
import com.apple.store.clon.response.CategoriaResponse;
import com.apple.store.clon.response.CategoriaResponseRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaDAO dao;
    public ResponseEntity<CategoriaResponseRest> getAll(){
        CategoriaResponseRest response = new CategoriaResponseRest();
        List<CategoriaModel> model = dao.findAll();
        if (!model.isEmpty()) {
            response.setData(new CategoriaResponse(model));
            response.setMetadata("OK", "200", "Todos los Productos");
        }else{
            response.setMetadata("error", "404", "base de Datos vacilla");
        }
        return new ResponseEntity<CategoriaResponseRest>(response, HttpStatus.OK);
    }

    public ResponseEntity<CategoriaModel> save(CategoriaDTO model){
        CategoriaModel nuevaCategoria= new CategoriaModel();
        nuevaCategoria.setNombreCategoria(model.getNombreCategoria());
        return new ResponseEntity<CategoriaModel>(dao.save(nuevaCategoria), HttpStatus.OK);
    }

    public ResponseEntity<CategoriaResponseRest> findByCategory(String category){
        CategoriaResponseRest response = new CategoriaResponseRest();
        CategoriaModel categoriaBuscar = dao.findByNombreCategoria(category);
        if (categoriaBuscar!=null){
            List<CategoriaModel> lista= new ArrayList<>();
            lista.add(categoriaBuscar);
            response.setData(new CategoriaResponse(lista));
            response.setMetadata("Categoria Encontrada", "200", category);
        }else{
            response.setMetadata("error", "401", "categoria no encontrada");
            return new ResponseEntity<CategoriaResponseRest>(response, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<CategoriaResponseRest>(response, HttpStatus.OK);
    }

}
