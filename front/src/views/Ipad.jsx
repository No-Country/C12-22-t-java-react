import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IPad() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://appleclon.onrender.com/product/ipad#')
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
    <div className="bg-gray-800 text-white">
      <div className="max-w-[45rem] mx-auto">
        <h1 className="decoration-white text-center text-[2.5rem] p-10">
          Explora el mundo de iPad, la tablet que te ofrece lo mejor de Apple.
        </h1>
      </div>
      <div className="grid place-items-center">
        <ul className="grid grid-cols-3 gap-8">
          {products.map(producto => (
            <li key={producto.nombreProducto} className="producto">
              <div className="bg-gray-50 bg-opacity-10 flex items-center justify-center rounded-2xl">
                <img
                  className="w-32 p-4"
                  src={producto.imagen1}
                  alt={producto.nombreProducto}
                />
              </div>
              <h3 className="text-center">{producto.nombreProducto}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div>
      {products.length > 0 && (
          <div className="producto">
            <div className="bg-gray-50 bg-opacity-10 flex items-center justify-center rounded-2xl">
              <img
                className="w-1/2 p-4"
                src={products[0].imagen1}
                alt={products[0].nombreProducto}
              />
              <h3 className="text-center">{products[0].nombreProducto}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IPad;
