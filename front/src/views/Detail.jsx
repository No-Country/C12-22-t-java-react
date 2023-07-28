import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  console.log(products);

  useEffect(() => {
    axios
      .get('https://appleclon.onrender.com/product/all')
      .then(res => {
        const products = res.data.data.model;
        products?.map(pdetail => {
          pdetail.productos.map(products => {
            if (products.categoriaProductoId == id) {
              setProducts(products);
            }
          });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" bg-gray-800 text-white text-center w-full mx-auto h-full">
      <div className="p-8 md:p-16 flex">
        {products && (
          <section
            key={products.categoriaProductoId}
            className="w-full bg-white text-gray-800 m-auto rounded-xl p-4 md:p-12  "
          >
            <div className='flex justify-center items-center flex-wrap md:gap-8 text-left'>
              <div className=" flex justify-center items-left">
                <img
                  src={products.imagen1}
                  alt={products.nombreProducto}
                  className="w-60"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-xl mb-4">
                  {products.nombreProducto}
                </h3>
                <p className="font-bold text-xl mt-2">${products.precio}</p>
                <div className="py-4 ">
                  <Link
                    className="py-2 border-solid border-2 hover:border-green-500 bg-green-500 hover:bg-white text-white hover:text-green-500
                      shadow  px-4 rounded-md text-lg
                      transition ease-in duration-out m-auto text-center"
                  >
                    <i className=" fa-solid fa-cart-shopping"></i>
                  </Link>
                </div>
              </div>
              <div className="text-left">
                <div className="pb-4 ">
                  <b>Pantalla:</b>{' '}
                  {products.tamanoPantalla?.split('*').map(line => (
                    <p key={line} className="text-base">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="pb-4">
                  <b>Chip:</b>
                  {products.modeloChip?.split('*').map(line => (
                    <p key={line} className="text-base">
                      {line}
                    </p>
                  ))}
                </div>
                <div className='pb-4'>
                  <b>Sistema Operativo:</b>
                  <p>{products.sistemaOperativo}</p>
                </div>
              </div>
              <div className="text-left">
                <div className="pb-4 w-">
                  <b>Batería:</b>
                  {products.bateria?.split('*').map(line => (
                    <p key={line} className="text-base">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="pb-4">
                  <b>Cámara:</b>
                  {products.camara?.split('*').map(line => (
                    <p key={line} className="text-base">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="pb-4">
                  <p>
                    <b>Conectividad:</b> {products.conectividad}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Ram:</b> {products.ram}
                  </p>
                </div>
              </div>
            </div>
            <div className='py-12'>
              <p className=" text-md">{products.descripcion}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Detail;
