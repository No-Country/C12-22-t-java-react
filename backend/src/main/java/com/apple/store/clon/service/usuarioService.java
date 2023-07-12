package com.apple.store.clon.service;

import com.apple.store.clon.DAO.usuarioDAO;
import com.apple.store.clon.DTO.usuarioRegistroDTO;
import com.apple.store.clon.model.usuarioModel;
import com.apple.store.clon.response.RegistroResponse;
import com.apple.store.clon.response.RegistroResponseRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class usuarioService {
    @Autowired
    usuarioDAO dao;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public ResponseEntity<RegistroResponseRest> RegistrarUsuario(usuarioRegistroDTO user){
        RegistroResponseRest response = new RegistroResponseRest();
        usuarioModel finduser = dao.findByEmail(user.getEmail());
        if (finduser!=null && finduser.getEmail().equalsIgnoreCase(user.getEmail())){
            response.setMetadata("El usuario ya Existe en la base de datos", "401", "fail");
            return new ResponseEntity<RegistroResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }else {
            usuarioModel usersave= new usuarioModel(user.getEmail(), user.getPassword(), user.getNombres(), user.getApellidos());

            usersave.setPassword(passwordEncoder.encode(usersave.getPassword()));
            dao.save(usersave);
            response.setData(new RegistroResponse(usersave));
            response.setMetadata("Registro Exitoso", "200", "OK");
        }
        return new ResponseEntity<RegistroResponseRest>(response, HttpStatus.OK);
    }
}
