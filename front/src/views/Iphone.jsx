import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Iphone = () => {
    const [iphone, setIphone] = useState([]);

    useEffect(() => {
            const URL_IPHONE ='https://appleclon.onrender.com/product/category/iphone';
            axios.get(URL_IPHONE)
            .then((res) => {
                const data = res.data.data.model;
                const iphone = data[0].productos;
                setIphone(iphone);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

  return (
    <div className=" bg-slate-700 text-white text-center w-full mx-auto h-   ">
      <h4 className="text-4xl w-1/2 mx-auto py-6">
        Explora la gama de Iphone y elige el que mas se adapte a ti.
      </h4>
      <section className="flex justify-center gap-8 mt-6">
        <div className="text-center cursor-pointer">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Apple-iPhone-12.png"
            alt=""
            className="w-14"
          />
          <span className="text-center">Iphone 8</span>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Apple-iPhone-12.png"
            alt=""
            className="w-14"
          />
          <span className="text-center">Iphone 11</span>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Apple-iPhone-12.png"
            alt=""
            className="w-14"
          />
          <span className="text-center">Iphone 12</span>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Apple-iPhone-12.png"
            alt=""
            className="w-14"
          />
          <span className="text-center">Iphone 13</span>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Apple-iPhone-12.png"
            alt=""
            className="w-14"
          />
          <span className="text-center">Iphone 14</span>
        </div>
      </section>
      <section className="w-3/5 bg-slate-600 m-auto rounded-xl my-10 p-2 flex justify-evenly items-center cursor-pointer">
        <img
          src="https://www.pngall.com/wp-content/uploads/13/iPhone-14-PNG.png"
          alt=""
          className="w-60"
        />
        <div>

          <h3 className='font-bold text-4xl mb-4'>Iphone 14 PRO</h3>
          <p className=' text-lg'>Alto rendimiento a un precio sorprendente.</p>
          <p className=' text-lg text-red-300'>¡ Solo por esta semana !</p>
          <p className='font-bold text-2xl mt-2'>$899</p>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2'>
        {iphone.map((iphone) => (
            <div key={iphone.categoriaProductoId} className="w-3/5 bg-slate-600 m-auto rounded-xl my-10 p-2 flex flex-col justify-evenly items-center cursor-pointer">
                <img
                src={iphone.imagen1}
                alt=""
                className="w-48 rounded-xl"
                />
                <div>
                <h3 className='font-bold text-4xl mb-4'>{iphone.nombreProducto}</h3>
                <p className=' text-lg font-semibold'>Capacidad: 128GB / 256GB / 512GB</p>
                <p>Podes abonar en efectivo o transferencia</p>
                <p>12 cuotas sin interes !</p>
                <p className='font-bold text-2xl mt-2'>${iphone.precio}</p>
                </div>
                <Link to={`/detail?productID=${iphone.categoriaProductoId}`} className='border rounded-md p-2 px-3 bg-slate-700 text-gray-300 hover:text-white my-3'>Ver detalle</Link>
                <button className='border rounded-md p-2 px-3 bg-slate-700 text-gray-300 hover:text-white'>Añadir al carrito <i className=" fa-solid fa-cart-shopping"></i></button>

            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Iphone;
