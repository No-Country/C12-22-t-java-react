import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Detail = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();


  console.log(products)

  useEffect(() => {
    axios
      .get('https://appleclon.onrender.com/product/all')
      .then(res => {
        const products = res.data.data.model;
        products?.map((pdetail) =>{
          pdetail.productos.map((products)=>{
            if(products.categoriaProductoId == id){
              setProducts(products);
            }
          })
        })

      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div className=" bg-slate-700 text-white text-center w-full mx-auto h-full">
      <div className=' py-12 flex'>
        
        {products && (
          <section
            key={products.categoriaProductoId}
            className="w-3/5 bg-slate-600 m-auto rounded-xl  p-6 flex-col  justify-center items-center gap-4"
          >
              <h3 className="font-bold text-5xl mb-4">
                {products.nombreProducto}
              </h3>
            <img
              src={products.imagen2}
              alt={products.nombreProducto}
              className="mx-auto"
            />
            <div className='flex flex-col gap-4'>
              <p className=' text-lg font-semibold'>Capacidad: 128GB / 256GB / 512GB</p>
              <p className=" text-md">{products.descripcion}</p>
              <p className=" text-lg ">
                {products.tamañoPantalla}
              </p>
              <p className=" text-lg ">
                {products.modeloChip}
              </p>
              <p>

              </p>
              <p className="font-bold text-4xl mt-2">${products.precio}</p>
              <button className=' w-40 mx-auto border rounded-md mt-2 p-2 px-3 bg-slate-700 text-gray-300 hover:text-white'>Añadir al carrito <i className=" fa-solid fa-cart-shopping"></i></button>
            </div>
          </section>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Detail;
