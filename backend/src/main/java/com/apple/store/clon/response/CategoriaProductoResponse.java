package com.apple.store.clon.response;

import com.apple.store.clon.DTO.CategoriaProductSendDTO;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
@Data
@AllArgsConstructor
public class CategoriaProductoResponse {

    private List<CategoriaProductSendDTO> model;
}
