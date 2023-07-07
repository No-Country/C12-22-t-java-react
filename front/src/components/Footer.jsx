import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex align-center flex-col md:justify-around md:flex-row">
        <div className="flex flex-col md:w-72 ">
          <h3 className="text-3xl font-bold mb-3">Apple Store</h3>
          <p className="mb-1 italic">
            Somos una pequeña empresa que vendemos productos de Apple.
          </p>
          <a href="#" className="hover:text-slate-800">
            Sobre nosotros
          </a>
          <a href="#" className="hover:text-slate-800">
            Términos y condiciones
          </a>
          <Link to='/Contact' className="hover:text-slate-800">
            Trabajá con nosotros
          </Link>
          <Link to='/Contact' className="hover:text-slate-800">
            Contacto
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold mb-3">Medios de pago</h3>
          <div className="flex justify-center flex-row gap-2">
            <div>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png"
                alt="Visa"
                className="w-14 h-fit m-auto"
              />
              <span className="text-xs">Mercado Pago</span>
            </div>
            <div>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png"
                alt="Mastercard"
                className="w-14 h-fit m-auto"
              />
              <span className="text-xs">Efectivo</span>
            </div>
            <div>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png"
                alt="American Express"
                className="w-14 h-fit m-auto"
              />
              <span className="text-xs">Transferencia</span>
            </div>
            <div>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png"
                alt="Mercado Pago"
                className="w-14 h-fit m-auto"
              />
              <span className="text-xs">Tarjeta de credito</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="font-bold">
          Copyright &#169; Grupo 22 - Cohorte 12 NoCountry
        </span>
      </div>
    </footer>
  );
};

export default Footer;
