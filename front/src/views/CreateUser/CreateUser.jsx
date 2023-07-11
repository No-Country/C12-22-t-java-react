import  { useState } from "react";
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
    <div className="w-screen  h-screen flex flex-col justify-center items-center bg-gray-400">

      <div className="w-96 bg-white rounded-lg p-5 gap-7">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Crear Usuario</h1>
        <form className="flex flex-col gap-5 w-full ">
          <div className="flex flex-col items-start w-full">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="">
              Nombres
            </label>
            <input
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black-500 focus:ring focus:ring-black-200"
              type="text"
              name="name"
              placeholder="Ej: Juan Carlos"
            />
            {errors.name && errors.name !== "" && (
              <span className=" text-rose-600">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="">
              Apellidos
            </label>
            <input
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black-500 focus:ring focus:ring-black-200"
              type="text"
              name="lastname"
              placeholder="Ej: Castillo Torres"
            />
            {errors.lastName && errors.lastName !== "" && (
              <span className=" text-rose-600">{errors.lastName}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="">
              Email
            </label>
            <input
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black-500 focus:ring focus:ring-black-200"
              type="text"
              name="email"
              placeholder="Ej: JuanTo@gmail.com"
            />
            {errors.email && errors.email !== "" && (
              <span className=" text-rose-600">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="font-boblock text-gray-600 text-sm font-medium mb-2" htmlFor="">
              Contraseña
            </label>
            <input
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black-500 focus:ring focus:ring-black-200"
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
              className="w-full bg-black text-white rounded-md px-3 py-2 hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
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
