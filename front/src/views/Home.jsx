import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

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
    <div className="bg-gray-800 text-white px-14">
      <section className="bg-white flex items-center justify-center rounded-2xl px-24 py-8 text-gray-700 h-11/12 grid grid-cols-2 gap-[5rem]">
        <div className="">
          <h1 className="w-11/12 text-6xl font-bold">
            Alto rendimiento a un precio sorprendente.
          </h1>
          <p className="py-6 text-2xl">
            El iPhone 13 ya está aquí. Haz fotos increíbles, disfruta de las
            funciones de seguridad mejor valoradas y aprovecha toda la potencia
            de Apple.{' '}
          </p>
          <button
            type="submit"
            className="py-2 bg-white border border-solid border-2 border-gray-700 hover:bg-gray-700 hover:text-white
                      shadow border w-full sm:w-auto px-4 rounded-md text-lg
                      transition ease-in duration-out"
          >
            Ver Mas
          </button>
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
      <section className="py-32 flex items-center justify-center flex-col">
        <div className="order-1">
          <h1 className="text-5xl text-center pb-12">
            POPULARES EN APPLE STORE
          </h1>
        </div>
        <div className="grid grid-cols-4 w-full max-w-screen-xl gap-12 order-2">
          {allProducts.map(category => (
            <React.Fragment key={category.nombreCategoria}>
              {category.productos.map(product => (
                <div
                  key={product.nombreProducto}
                  className="bg-white flex items-center justify-center border rounded-lg p-4 flex flex-col  cursor-pointer"
                >
                  <img
                    className="object-fit w-40"
                    src={product.imagen1}
                    alt={product.nombreProducto}
                  />
                  <h3 className="text-center text-gray-700 text-xl font-bold self-center mt-2">
                    {product.nombreProducto}
                  </h3>
                  <p className="text-center text-red-500 font-bold self-center mt-2">
                    $ {product.precio}
                  </p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
      <section>
        <div className="p-8 flex items-center justify-center gap-12 ">
          <NavLink
            href="#mac"
            to="/mac"
            as={Link}
            className=" underline border rounded-lg p-2"
          >
            <img
              className="w-48 hover:scale-125 transition-transform duration-500 ease-in-out border rounded-lg"
              src="https://th.bing.com/th/id/OIG.0oBWHag_Mt5YsKFygAUi?pid=ImgGn"
              alt="mac"
            />
          </NavLink>
          <NavLink
            href="#ipad"
            to="/ipad"
            as={Link}
            className="underline border rounded-lg p-2"
          >
            <img
              className="w-48 hover:scale-125 transition-transform duration-500 ease-in-out border rounded-lg"
              src="https://www.shopdutyfree.es/25334-medium_default/ipad-pro-129-wifi-2tb-plata.jpg"
              alt="ipad"
            />
          </NavLink>
          <NavLink
            href="#iphone"
            to="/iphone"
            as={Link}
            className="underline border rounded-lg p-2"
          >
            <img
              className="w-48 hover:scale-125 transition-transform duration-500 ease-in-out border rounded-lg"
              src="https://th.bing.com/th/id/OIP.YfnLRVia6vNIMmvyjKcnCAHaHa?pid=ImgDet&rs=1"
              alt="iphone"
            />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
