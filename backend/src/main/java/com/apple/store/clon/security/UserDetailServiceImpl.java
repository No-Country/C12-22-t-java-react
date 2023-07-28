package com.apple.store.clon.security;

import com.apple.store.clon.DAO.usuarioDAO;
import com.apple.store.clon.model.usuarioModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl  implements UserDetailsService {
    @Autowired
    private usuarioDAO userDao;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        usuarioModel user= userDao.findOneByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException("usuario no encontrado"));
        return new UserDetailsImpl(user);
    }
}
