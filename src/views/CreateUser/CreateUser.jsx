import React, { useState } from "react";
import validation from "./Validation";

const CreateUser = () => {

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

  return (
    <div className="w-screen  h-screen flex flex-col justify-between items-center bg-gray-300">
      <div>navbar</div>
      <div className=" w-96 flex items-center flex-col bg-white rounded-lg p-5 gap-7">
        <h1 className="text-4xl font-bold">Crear Usuario</h1>
        <form className="flex flex-col gap-7 w-full ">
          <div className="flex flex-col items-start w-full">
            <label className="font-bold" htmlFor="">
              ¿Cuáles son tus nombres?
            </label>
            <input
              onChange={handleChange}
              className="w-full h-8 border-b  border-gray-700 "
              type="text"
              name="name"
              placeholder="Ej: Juan Carlos"
            />
            {errors.name && errors.name !== "" && (
              <span className=" text-rose-600">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="font-bold" htmlFor="">
              ¿Cuáles son tus apellidos?
            </label>
            <input
              onChange={handleChange}
              className="w-full h-8 border-b border-gray-700 "
              type="text"
              name="lastname"
              placeholder="Ej: Castillo Torres"
            />
            {errors.lastName && errors.lastName !== "" && (
              <span className=" text-rose-600">{errors.lastName}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="font-bold" htmlFor="">
              ¿Cuál es tu correo electrónico?
            </label>
            <input
              onChange={handleChange}
              className="w-full h-8 border-b border-gray-700"
              type="text"
              name="email"
              placeholder="Ej: JuanTo@gmail.com"
            />
            {errors.email && errors.email !== "" && (
              <span className=" text-rose-600">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="font-bold" htmlFor="">
              Crea una contraseña
            </label>
            <input
              onChange={handleChange}
              className="w-full h-8 border-b border-gray-700"
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
              className=" font-bold  w-full h-8 border border-black rounded-md hover:bg-black hover:text-white duration-300"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div>footer</div>
    </div>
  );
};

export default CreateUser;
