package com.apple.store.clon.service;

import com.apple.store.clon.DAO.CategoriaProductoDAO;
import com.apple.store.clon.DTO.CategoriaProductSendDTO;
import com.apple.store.clon.DTO.CategoriaProductoDTO;
import com.apple.store.clon.model.CategoriaModel;
import com.apple.store.clon.model.CategoriaProductoModel;
import com.apple.store.clon.response.CategoriaProductoResponse;
import com.apple.store.clon.response.CategoriaProductoResponseRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoriaProductService {
    @Autowired
    private CategoriaProductoDAO dao;

    public ResponseEntity<CategoriaProductoResponseRest> save(CategoriaProductoDTO model){
        CategoriaProductoResponseRest response = new CategoriaProductoResponseRest();
        List<CategoriaProductSendDTO> insert = new ArrayList<>();
        CategoriaModel categoria= new CategoriaModel();
        categoria.setNombreCategoria(model.getCategoria().getNombreCategoria());
        CategoriaProductoModel nuevoProducto = new CategoriaProductoModel(null, model.getNombreProducto(), model.getPrecio(), model.getImagen1(),
                                                  model.getImagen2(), model.getImagen3(), model.getImagen4(), model.getDescripcion(), model.getTamañoPantalla(), model.getModeloChip(),
                                                    model.getCamara(), model.getSistemaOperativo(), model.getBateria(), model.getConectividad(), model.getRam(), categoria, null) ;
        insert.add(new CategoriaProductSendDTO(model.getNombreProducto(), model.getPrecio(), model.getImagen1(), model.getImagen2(), model.getImagen3(), model.getImagen4(), model.getDescripcion(),
                model.getTamañoPantalla(), model.getModeloChip(), nuevoProducto.getCategoriaModel(), model.getCamara(), model.getSistemaOperativo(), model.getBateria(),
                model.getConectividad(), model.getRam(), nuevoProducto.getInventario(), null));
        response.setData(new CategoriaProductoResponse(insert));
        return new ResponseEntity<CategoriaProductoResponseRest>(response, HttpStatus.OK);
    }

    public ResponseEntity<CategoriaProductoResponseRest> getAll(){
        CategoriaProductoResponseRest response = new CategoriaProductoResponseRest();
        List<CategoriaProductSendDTO> products= new ArrayList<>();
        List<CategoriaProductoModel> allproducts= dao.findAll();
        for (CategoriaProductoModel find: allproducts) {
            products.add(new CategoriaProductSendDTO(find.getNombreProducto(), find.getPrecio(), find.getImagen1(),
                    find.getImagen2(), find.getImagen3(), find.getImagen4(), find.getDescripcion(), find.getTamanoPantalla(),
                    find.getModeloChip(), find.getCategoriaModel(), find.getCamara(), find.getSistemaOperativo(),
                    find.getBateria(), find.getConectividad(), find.getRam(), find.getInventario(), find.getCategoriaProductoId()));
        }
        response.setData(new CategoriaProductoResponse(products));
        return new ResponseEntity<CategoriaProductoResponseRest>(response,HttpStatus.OK);
    }

    public ResponseEntity<CategoriaProductoResponseRest>search(String search, String maxPrice, String minPrice){
        CategoriaProductoResponseRest response = new CategoriaProductoResponseRest();
        List<CategoriaProductoModel> productos = dao.findAll();
        List<CategoriaProductoModel> productosFiltrados=productos;
        List<CategoriaProductSendDTO> productsFinales= new ArrayList<>();
        if (search!=null)
            productosFiltrados=productosFiltrados.stream().
                    filter(c -> c.getNombreProducto().toLowerCase().contains(search)).
                    collect(Collectors.toList());

        if (maxPrice!=null){
            float max= Float.parseFloat(maxPrice);
            productosFiltrados=productosFiltrados.stream().filter(c -> c.getPrecio()< max).collect(Collectors.toList());
        }
        if (minPrice!=null){
            float min = Float.parseFloat(minPrice);
            productosFiltrados=productosFiltrados.stream().filter(c-> c.getPrecio()>min ).collect(Collectors.toList());        }

        for (CategoriaProductoModel find:productosFiltrados) {
            productsFinales.add(new CategoriaProductSendDTO(find.getNombreProducto(), find.getPrecio(), find.getImagen1(),
                    find.getImagen2(), find.getImagen3(), find.getImagen4(), find.getDescripcion(), find.getTamanoPantalla(),
                    find.getModeloChip(), find.getCategoriaModel(), find.getCamara(), find.getSistemaOperativo(),
                    find.getBateria(), find.getConectividad(), find.getRam(), find.getInventario(), find.getCategoriaProductoId()));
        }
        response.setData(new CategoriaProductoResponse(productsFinales));
        response.setMetadata("ok", "200","Busqueda Exitosa");
        if (productosFiltrados.size()==productos.size()){
            response.setMetadata("error", "401", "Busqueda no Encontrada");
            return new ResponseEntity<CategoriaProductoResponseRest>(response, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<CategoriaProductoResponseRest>(response, HttpStatus.OK);
    }

    public ResponseEntity<CategoriaProductoResponseRest>findById(Long id){
        CategoriaProductoResponseRest response = new CategoriaProductoResponseRest();
        List<CategoriaProductSendDTO> respuesta= new ArrayList<CategoriaProductSendDTO>();
        Optional<CategoriaProductoModel> find = dao.findById(id);
        if (find.isPresent()){
            respuesta.add(new CategoriaProductSendDTO(find.get().getNombreProducto(), find.get().getPrecio(), find.get().getImagen1(),
                    find.get().getImagen2(), find.get().getImagen3(), find.get().getImagen4(), find.get().getDescripcion(), find.get().getTamanoPantalla(),
                    find.get().getModeloChip(), find.get().getCategoriaModel(), find.get().getCamara(), find.get().getSistemaOperativo(),
                    find.get().getBateria(), find.get().getConectividad(), find.get().getRam(), find.get().getInventario(), find.get().getCategoriaProductoId()));
            response.setData(new CategoriaProductoResponse(respuesta));
            response.setMetadata("Ok", "200", "id encontrado");
        }else{
            response.setMetadata("Error", "400", "id no encontrado");
            return new ResponseEntity<CategoriaProductoResponseRest>(response, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<CategoriaProductoResponseRest>(response, HttpStatus.OK);
    }
}
