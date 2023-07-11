package com.apple.store.clon.DAO;

import com.apple.store.clon.model.CategoriaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaDAO extends JpaRepository<CategoriaModel, Long> {
}
