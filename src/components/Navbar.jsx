import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


  const [product, setProduct] = useState("")
  
  const searhbar = () => [
    console.log(product)
  ]
  return (
    <nav className="bg-gray-800 h-12 flex justify-start items-center gap-4">
      <NavLink href="#home" to="/" as={Link}>
        <i className="fa-brands fa-apple text-white ml-5"></i>
      </NavLink>

      <NavLink href="#mac" to="/mac" as={Link} className="text-white">
        Mac
      </NavLink>

      <NavLink href="#iPad" to="/ipad" as={Link} className="text-white">
        iPad
      </NavLink>

      <NavLink href="#iPhone" to="/iphone" as={Link} className="text-white ">
        iPhone
      </NavLink>

      
      <div className="flex justify-start items-center gap-1.5 mx-auto"
       >
      <input 
        placeholder="Search product" 
        className="rounded-md p-0.5 outline-red-900" 
        value={product}
        onChange={(e) => setProduct(e.target.value)}>
      </input>
      <button  
        className="text-white bg-gray-500 rounded-md p-0.5 hover:bg-green-700" 
        onClick={searhbar}
        >
        <i className="fa-solid fa-magnifying-glass p-0.5"></i>
      </button>
      </div>
      <div>
      <NavLink href="#miperfil" to="/miperfil" as={Link} className="text-white ">
        
        <i className="fa-regular fa-user"></i>
        
      </NavLink>

      <NavLink href="#carrito" to="/carrito" as={Link} className="text-white mr-96">
      <i className="fa-solid fa-cart-shopping"></i>
      </NavLink>
      </div>
    </nav>
  );

};

export default Navbar;
