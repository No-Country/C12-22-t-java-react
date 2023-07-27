import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import { Link } from 'react-router-dom';
import LinkOptions from '../components/LinkOptions';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  console.log(allProducts)
  useEffect(() => {
    axios
      .get('https://appleclon.onrender.com/product/all')
      .then(res => {
        console.log(res);
        const products = res.data.data.model;
        setAllProducts(products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-800 text-white px-8 md:px-16">
      <section className="bg-white flex flex-col md:flex-row items-center justify-center rounded-2xl p-8 text-gray-700 h-11/12  gap-[5rem]">
        <div className="w-full text-center md:text-start">
          <h1 className="text-[2rem] leading-none md:text-6xl font-bold  ">
            Alto rendimiento a un precio sorprendente.
          </h1>
          <p className="py-6 text-sm md:text-2xl md:text-start">
            El iPhone 13 ya está aquí. Haz fotos increíbles, disfruta de las
            funciones de seguridad mejor valoradas y aprovecha toda la potencia
            de Apple.{' '}
          </p>
          <Link
            to={`/detail/3`}
            className="py-2 bg-white  border-solid border-2 border-gray-700 hover:bg-gray-700 hover:text-white
                      shadow  w-full sm:w-auto px-4 rounded-md text-lg
                      transition ease-in duration-out m-auto text-center"
          >
            Ver Mas
          </Link>
        </div>
        <div className="">
          <div>
            {allProducts.map(category => (
              <React.Fragment key={category.nombreCategoria}>
                {category.productos.map(
                  (product, index) =>
                    index === 2 && (
                      <div key={product.nombreProducto}>
                        <img
                          className="w-3/5 mx-auto"
                          src={product.imagen1}
                          alt={product.nombreProducto}
                        />
                        <h3 className="text-center text-2xl font-bold">
                          {product.nombreProducto}
                        </h3>
                      </div>
                    )
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 flex items-center justify-center flex-col">
        <div className="order-1">
          <h1 className="text-lg md:text-5xl text-center pb-12">
            POPULARES EN APPLE STORE
          </h1>
        </div>
        <div className="flex items-center justify-center flex-wrap w-full max-w-screen-xl gap-12 order-2">
          {allProducts.map(category => (
            <React.Fragment key={category.nombreCategoria}>
              {category.productos.map(product => (
                <div
                  key={product.nombreProducto}
                  className="bg-white items-center justify-center border rounded-lg p-4 flex flex-col"
                >
                  
                  <img
                    className="h-40 w-40"
                    src={product.imagen1}
                    alt={product.nombreProducto}
                  />
                  <h3 className="text-center text-gray-700 text-xl font-bold self-center mt-2">
                    {product.nombreProducto}
                  </h3>
                  <p className="text-center text-gray-700 font-extrabold self-center mt-2 pb-2">
                    $ {product.precio}
                  </p>
                  <Link
                    to={`/detail/${product.categoriaProductoId}`}
                    className="py-1 border-solid border-2 border-green-600 bg-white hover:bg-green-600 text-green-600 hover:text-white
                      shadow  px-2 rounded-md text-lg
                      transition ease-in duration-out m-auto text-center"
                  >
                    Ver Mas
                  </Link>
                </div>
                
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
      <section>
        <LinkOptions></LinkOptions>
      </section>
    </div>
  );
};

export default Home;