package com.apple.store.clon.DAO;

import com.apple.store.clon.model.CategoriaProductoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaProductoDAO extends JpaRepository<CategoriaProductoModel, Long> {
}
