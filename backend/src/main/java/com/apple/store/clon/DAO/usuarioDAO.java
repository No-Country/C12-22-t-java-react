package com.apple.store.clon.DAO;

import com.apple.store.clon.model.usuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface usuarioDAO extends JpaRepository<usuarioModel, Long> {
    public usuarioModel findByEmail(String email);
}
