import React from 'react';

const Contact = () => {
  return (
    <div className="mx-auto flex flex-col align-center min-h-screen  bg-gray-100 ">
      <h1 className="text-5xl font-bold text-gray-800 text-center pt-6">
        Contacto
      </h1>
      <form className="flex flex-col gap-1 border p-7 m-auto rounded bg-gray-800 text-white">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-sm text-black p-0.5 outline-0"
          placeholder="Escriba su email"
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          className="rounded-sm text-black p-0.5 outline-0"
          placeholder="Escriba su consulta..."
        ></textarea>
        <button className="border rounded-md py-1 duration-500 hover:bg-slate-500 hover:text-slate-50">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
