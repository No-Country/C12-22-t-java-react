import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Mac = () => {
  const [macbook, setMacbook] = useState([]);

  useEffect(() => {
    const urlMacbook = 'https://appleclon.onrender.com/product/category/mac';
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

  return (
    <div className=" bg-slate-700 text-white text-center w-full mx-auto">
      <section className="flex flex-col justify-center align-self ">
        <h1 className="font-semibold mt-6 text-4xl">Macbook</h1>
        <p className="mt-6">{macbook[0]?.descripcion}</p>
      </section>
      <h2 className='text-white text-5xl mt-4'>Macbok Pro</h2>
      <section className="w-3/5 bg-slate-700 m-auto rounded-xl  p-2 flex justify-evenly items-center cursor-pointer">
        {
          macbook.map((mac,index)=>(
            <div className='p-4' key={index}>
              <img src={macbook[0]?.imagen1} alt="" />
              <div>
                <h3 className='font-bold text-4xl mb-4'>{macbook[0]?.nombrePruducto}</h3>
                <p className=" text-lg">{macbook[0]?.modeloChip}</p>
                <p className=" text-lg text-red-300">{macbook[0]?.sistemaOperativo}</p>
                <p className="font-bold text-2xl ">{macbook[0]?.precio}</p>
              </div>
            </div>
          ))
        }
      </section>
      
    </div>
  );
};

export default Mac;
