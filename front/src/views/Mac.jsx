import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Mac = () => {
  const [macbook, setMacbook] = useState([]);

  useEffect(() => {
    const urlMacbook = 'https://appleclon.onrender.com/product/mac';
    axios
      .get(urlMacbook)
      .then(res => {
        console.log(res.data);
        const macbook = res.data.data.model[0].productos;
        setMacbook(macbook);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  console.log(macbook);

  const addProduct = () => {
    alert('Macbook añadida al carrito');
  };
  return (
    <div className=" text-center w-full mx-auto h-full">
      <section className="flex flex-col justify-center align-self ">
        <h1 className="font-semibold mt-6 text-4xl">Macbook</h1>
        <p className="mt-6">{macbook[0]?.descripcion}</p>
      </section>
      <h2 className='text-gray-800 text-2xl mt-4'>Macbok Pro</h2>
      <section className="flex justify-center">
        <ul>
          {macbook.map(mac => (
            <li
              className="border-solid  border border-gray-600 p-8 rounded-xl mt-6 mb-10"
              key={mac.imagen1}
            >
              <img src={mac.imagen1} />
              <div className="flex justify-center align-self mt-5 ">
                <p>
                  USD <b>{mac.precio}</b>
                </p>
                <i
                  className="fa-solid fa-cart-plus ml-3 mt-1 hover:text-sky-400 "
                  onClick={() => addProduct()}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Mac;
