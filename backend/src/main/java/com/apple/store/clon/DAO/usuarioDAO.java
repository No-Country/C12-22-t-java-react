package com.apple.store.clon.DAO;

import com.apple.store.clon.model.usuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface usuarioDAO extends JpaRepository<usuarioModel, Long> {
     usuarioModel findByEmail(String email);
    Optional<usuarioModel> findOneByEmail(String email);

}
