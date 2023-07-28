import React from 'react';
import {useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Products = () => {
  
  const products = useSelector((state) => state.products);


  return (
    <section className='bg-gray-800 text-white px-8 md:px-16'>
        <div className="order-1">
          <h1 className="text-lg md:text-5xl text-center p-12">
            PRODUCTOS QUE QUIZAS ESTABAS BUSCANDO
          </h1>
        </div>
        <section className="mt-12">
        <ul className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-12 p-16">
          { products?.map(producto => (
            <li
              key={producto.nombreProducto}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5"
            >
              <div className="flex items-center justify-center flex-wrap bg-white rounded-md md:rounded-lg pb-8 text-gray-700 flex-col">
                <img
                  className="w-44 h-36 p-4"
                  src={producto.imagen1}
                  alt={producto.nombreProducto}
                />
                <h3 className="text-center text-gray-700 text-xl font-bold self-center mt-2">
                  {producto.nombreProducto}
                </h3>
                <p className="text-center text-gray-700 font-extrabold self-center mt-2 pb-2">
                  $ {producto.precio}
                </p>
                <Link
                  to={`/detail/${producto.categoriaProductoId}`}
                  className="py-1 border-solid border-2 border-gray-700 bg-white hover:bg-gray-700 text-gray-700 hover:text-white
                      shadow  px-2 rounded-md text-lg
                      transition ease-in duration-out m-auto text-center"
                >
                  Ver Mas
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Products