import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = () => {
  const [productDetail, setProductDetail] = useState();

  let query = new URLSearchParams(window.location.search);
  let productID = query.get('productID');
  console.log(productID);

  useEffect(() => {
    const endpoint = `https://appleclon.onrender.com/product/find/1`;

    console.log(endpoint);

    axios.get(endpoint).then(res => {
      const data = res.data.data.model;
      const apiData = data[0];
      console.log(apiData);
      setProductDetail(apiData);
    });
  }, []);

  return (
    <div className=" bg-slate-700 text-white text-center w-full mx-auto h-full">
      <div className=''>
        <h2 className="font-bold text-4xl mb-4">Detalle</h2>
        {productDetail && (
          <section
            key={productDetail.categoriaProductoId}
            className="w-4/5 bg-slate-600 m-auto rounded-xl my-16 p-6 flex justify-evenly items-center gap-4"
          >
            <img
              src={productDetail.imagen2}
              alt={productDetail.nombreProducto}
              className="w-80 h-fit"
            />
            <div>
              <h3 className="font-bold text-5xl mb-4">
                {productDetail.nombreProducto}
              </h3>
              <p className=' text-lg font-semibold'>Capacidad: 128GB / 256GB / 512GB</p>
              <p className=" text-md">{productDetail.descripcion}</p>
              <p className=" text-lg text-red-300">
                {productDetail.tamañoPantalla}
              </p>
              <p className=" text-lg text-red-300">
                {productDetail.modeloChip}
              </p>
              <p className="font-bold text-4xl mt-2">${productDetail.precio}</p>
              <button className='border rounded-md mt-2 p-2 px-3 bg-slate-700 text-gray-300 hover:text-white'>Añadir al carrito <i className=" fa-solid fa-cart-shopping"></i></button>
            </div>
          </section>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Detail;
