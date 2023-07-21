import { useState, useEffect } from 'react';
import axios from 'axios';

function Ipad() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://appleclon.onrender.com/product/category/ipad')
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
    <div className="bg-gray-800 text-white px-14">
      <section className="max-w-[60rem] mx-auto">
        <h1 className="decoration-white text-center text-[3rem] p-12 font-bold">
          Explora el mundo de iPad, la tablet que te ofrece lo mejor de Apple.
        </h1>
      </section>
      <section className="grid place-items-center p-10">
        <ul className="grid grid-cols-6 gap-8">
          {products.map(producto => (
            <li key={producto.nombreProducto} className="p-6">
              <div className="bg-white flex items-center justify-center rounded-lg">
                <img
                  className="w-32 p-4 cursor-pointer hover:scale-125 transition-transform duration-500 ease-in-out"
                  src={producto.imagen1}
                  alt={producto.nombreProducto}
                />
              </div>
              <h3 className="text-center">{producto.nombreProducto}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section>
        {products.length > 0 && (
          <div className="bg-white flex items-center justify-center rounded-2xl p-8 text-black h-screen">
            <div className="h-screen grid grid-cols-2 py-16 flex items-center justify-center">
              <img
                className="h-2/3"
                src={products[0].imagen1}
                alt={products[0].nombreProducto}
              />
              <div className="flex items-center p-8">
                <div>
                  <h2 className="text-5xl font-bold py-8">
                    {products[0].nombreProducto}
                  </h2>
                  <p className="pb-4 text-base">{products[0].descripcion}</p>
                  <h3 className='font-bold pb-4'>$ {products[0].precio}</h3>
                  <button
                    type="submit"
                    className="py-2 bg-white border border-solid border-2 border-gray-800 hover:bg-gray-800 hover:text-white
                              shadow border w-full sm:w-auto px-4 rounded-md text-lg
                              transition ease-in duration-out"
                  >
                    Más Información
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section>
        <div className='text-black h-screen pt-8'>
          <div className='h-screen grid grid-cols-2 gap-8'>
            <div className='bg-white rounded-2xl'>dfgfdghsfdhfdh</div>
            <div className='bg-white rounded-2xl text-[3rem]'>dfgdgrfdgfdf</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ipad;