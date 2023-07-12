package com.apple.store.clon.response;

import com.apple.store.clon.model.CategoriaModel;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class CategoriaResponse {
    private List<CategoriaModel> model;
}
