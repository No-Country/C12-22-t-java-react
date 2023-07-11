package com.apple.store.clon.service;

import com.apple.store.clon.DAO.CategoriaDAO;
import com.apple.store.clon.model.CategoriaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaDAO dao;
    public List<CategoriaModel> getAll(){
        return dao.findAll();
    }

    public CategoriaModel save(CategoriaModel model){
        return dao.save(model);
    }
}
