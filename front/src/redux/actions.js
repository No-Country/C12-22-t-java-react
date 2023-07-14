
import Swal from "sweetalert2";


// const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';


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


