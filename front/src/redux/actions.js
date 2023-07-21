
import Swal from "sweetalert2";
import axios from "axios"

// const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const postCreateUser = (form) =>{
  return async function (){
    
    try {
      const ress = await fetch(`https://appleclon.onrender.com/registro`,{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body:JSON.stringify(form)
      }).then((response) => response.json())
      .then((data) => data)
      return ress;
    } catch {
      Swal.fire({
        title: "error",
        icon: "error",
        confirmButtonText: "Ok",
    })
    }

  }
}

export function searchProducts(search){
  return async function (dispatch)
{
  try{
    var json = await axios.get("https://appleclon.onrender.com/product/search?name=" + search);
    
    return dispatch({
      type: SEARCH_PRODUCTS,
      payload: json.data.data.model
    })
  } catch (error){
    alert("Producto no encontrado");
  }
}}
