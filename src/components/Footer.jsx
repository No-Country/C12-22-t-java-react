import React from "react";

const Footer = () => {
  return (
      <footer className="bg-slate-400">
            <div className="container mx-auto px-6 py-3 flex align-center flex-col md:justify-between md:flex-row">
               <div className="flex flex-col md:w-72 ">
                  <h3 className="text-3xl font-bold mb-3">Apple Store</h3>
                  <p className="mb-1 italic">Somos una pequeña empresa que vendemos productos de Apple.</p>
                  <a href="#" className="hover:text-slate-800">Sobre nosotros</a>
                  <a href="#" className="hover:text-slate-800">Términos y condiciones</a>
                  <a href="#" className="hover:text-slate-800">Trabajá con nosotros</a>
               </div>
               <div className="flex flex-col">
                  <h3 className="text-3xl font-bold mb-3">Medios de pago</h3>
                  <div className="flex justify-center flex-row gap-2">
                     <img src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png" alt="Visa" className="w-14 h-fit"/>
                     <img src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png" alt="Mastercard" className="w-14 h-fit"/>
                     <img src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png" alt="American Express" className="w-14 h-fit"/>
                     <img src="https://d26lpennugtm8s.cloudfront.net/stores/001/014/432/rte/logo-mercadopago.png" alt="Mercado Pago" className="w-14 h-fit"/>
                  </div>
               </div>
               <form className="flex flex-col gap-1">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" className="rounded-sm p-0.5" placeholder="Escriba su email"/>
                  <label htmlFor="message">Mensaje:</label>
                  <textarea name="message" id="message" cols="30" rows="3" className="rounded-sm p-0.5" placeholder="Escriba su consulta..."></textarea>
                  <button className="border rounded-md py-1 duration-500 hover:bg-slate-500 hover:text-slate-50">Enviar</button>
               </form>
            </div>
      </footer>
  );
};

export default Footer;
