package com.apple.store.clon.response;

import java.util.ArrayList;
import java.util.HashMap;

public class ResponseRest {

    private HashMap<String, String> metadata = new HashMap<>();

    public HashMap<String, String> getMetadata() {
        return metadata;
    }

    public void setMetadata(String Respuesta, String codigo, String dato) {
        HashMap<String, String> mapa = new HashMap<String,String>();
        mapa.put("Respuesta", Respuesta);
        mapa.put("codigo", codigo);
        mapa.put("dato", dato);
        metadata=mapa;
    }
}