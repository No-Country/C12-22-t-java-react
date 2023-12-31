import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Ipad() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://appleclon.onrender.com/product/category/iphone')
      .then(res => {
        console.log(res.data);
        const products = res.data.data.model[0].productos;
        setProducts(products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-800 text-white px-8 md:px-16">
      <section className="max-w-[60rem] mx-auto ">
        <h1 className="decoration-white text-center text-sm md:text-5xl p-4 md:p-12 font-bold">
          Si quieres un smartphone que lo tenga todo, necesitas un iPhone.
        </h1>
      </section>
      <section className="bg-white flex flex-col md:flex-row items-center justify-center rounded-md md:rounded-2xl p-4 md:p-8 text-gray-700  gap-[5rem]">
        {products.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-start">
            <img
              className="w-1/3 mx-auto"
              src={products[1].imagen1}
              alt={products[1].nombreProducto}
            />
            <div className="flex items-center md:p-8">
              <div>
                <h2 className="text-base md:text-5xl font-bold py-2 md:py-8">
                  {products[1].nombreProducto}
                </h2>
                <p className="pb-4 text-base md:text-xl">
                  {products[1].descripcion}
                </p>
                <h3 className="font-bold pb-4">$ {products[1].precio}</h3>
                <Link
                  to={`/detail/${products[1].categoriaProductoId}`}
                  type="submit"
                  className="py-2 bg-white  border-solid border-2 border-gray-700 hover:bg-gray-700 hover:text-white
                    shadow sm:w-auto px-2 md:px-4 rounded-md text-lg
                    transition ease-in duration-out m-auto text-center"
                >
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="mt-12">
        <ul className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-12 md:pt-32">
          {products.map(producto => (
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
    </div>
  );
}

export default Ipad;
