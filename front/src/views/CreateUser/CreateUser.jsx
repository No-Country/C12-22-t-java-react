import  { useState } from "react";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {postCreateUser} from "../../redux/actions"

const CreateUser = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    lastName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }, errors));
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (
      form.name &&
      !errors.name &&
      form.lastName &&
      !errors.lastName &&
      form.email &&
      !errors.email &&
      form.password &&
      !errors.password
    ) {
      // if(await dispatch(postCreateUser(form))){
      //   Navigate("/myprofile");
      // }
      const response = await dispatch(postCreateUser(form))
      
      if(response.data){
        Swal.fire({
          icon: 'success',
          title: 'Te has registrado con exito',
          showConfirmButton: false,
          timer: 1500
        }).then(res =>Navigate("/myprofile"))
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Este correo ya fue utilizado',
        })
      }
    }
  };

  console.log(form);

  return (
    <div className="login bg-gray-800 min-h-screen flex items-center justify-center">

      <div className="w-96 bg-gray-800 rounded-lg p-5 gap-7">
        <h1 className="text-3xl text-white font-bold mb-4">Crear Usuario</h1>
        <form className="flex flex-col gap-5 w-full " onSubmit={handleSubmit}>
          <div className="flex flex-col items-start w-full">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="">
              
            </label>
            <input
              onChange={handleChange}
              className="bg-gray-800 w-full text-white border border-b border-white border-solid border-t-0 border-l-0 border-r-0 focus:outline-none mt-8"
              type="text"
              name="name"
              placeholder="Nombre"
            />
            {errors.name && errors.name !== "" && (
              <span className=" text-rose-600">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="">
              
            </label>
            <input
              onChange={handleChange}
              className="bg-gray-800 w-full text-white border border-b border-white border-solid border-t-0 border-l-0 border-r-0 focus:outline-none mt-8"
              type="text"
              name="lastName"
              placeholder="Apellidos"
            />
            {errors.lastName && errors.lastName !== "" && (
              <span className=" text-rose-600">{errors.lastName}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="">
              
            </label>
            <input
              onChange={handleChange}
              className="bg-gray-800 w-full text-white border border-b border-white border-solid border-t-0 border-l-0 border-r-0 focus:outline-none mt-8"
              type="text"
              name="email"
              placeholder="Email"
            />
            {errors.email && errors.email !== "" && (
              <span className=" text-rose-600">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="font-boblock text-gray-600 text-sm font-medium mb-2" htmlFor="">
              
            </label>
            <input
              onChange={handleChange}
              className="bg-gray-800 w-full text-white border border-b border-white border-solid border-t-0 border-l-0 border-r-0 focus:outline-none mt-8"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            {errors.password && errors.password !== "" && (
              <span className=" text-rose-600">{errors.password}</span>
            )}
          </div>

          <div>
            <button
              className="w-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border border-white rounded-md px-3 py-2 mt-8"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
