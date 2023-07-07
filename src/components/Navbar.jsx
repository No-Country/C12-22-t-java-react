import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [product, setProduct] = useState('');

  const searhbar = () => [console.log(product)];
  return (
    <nav className="bg-gray-800 h-36 flex justify-beetwen items-center">
      
      {/* first container */}
      <div className="flex flex-col justify-center items-center ml-14">
        <NavLink href="#home" to="/" as={Link}>
          <i className="fa-brands fa-apple text-gray-300 hover:text-white text-5xl mt-2"></i>
        </NavLink>

        <NavLink href="#home" to="/" as={Link} className="mt-6">
          <span className="text-gray-300 hover:text-white text-xl">Home</span>
        </NavLink>
      </div>
     
     {/* second container */}
      <div className="flex gap-4 mt-20 ml-12">
        <NavLink href="#mac" to="/mac" as={Link} >
        <span className="text-gray-300 hover:text-white text-xl">Mac</span>  
        </NavLink>

        <NavLink href="#iPad" to="/ipad" as={Link} className="text-white">
        <span className="text-gray-300 hover:text-white text-xl ml-6">iPad</span> 
        </NavLink>

        <NavLink href="#iPhone" to="/iphone" as={Link} className="text-white ">
        <span className="text-gray-300 hover:text-white text-xl ml-6">iPhone</span> 
        </NavLink>
      </div>
      
      {/* input container */}
      <div className="flex justify-start items-center gap-1.5 ml-52">
        <input
          placeholder="buscar producto"
          className="rounded-md p-3 outline-red-900 w-80"
          value={product}
          onChange={e => setProduct(e.target.value)}
        ></input>
        <button
          className="text-white bg-gray-500 rounded-md p-3 ml-2 hover:bg-green-700"
          onClick={searhbar}
        >
          <i className="fa-solid fa-magnifying-glass p-0.5"></i>
        </button>
      </div>
      
      {/* third container */}
      <div className=" flex justify-center items-center ml-72">
        <NavLink
          href="#myprofile"
          to="/myprofile"
          as={Link}
          className="text-white "
        >
          <i className="fa-regular fa-user text-gray-300 hover:text-white text-2xl mr-12 ml-6"></i>
          
        </NavLink>

        <NavLink href="#cart" to="/cart" as={Link} className="text-white text-2xl ">
          <i className="text-gray-300 hover:text-white fa-solid fa-cart-shopping"></i>
          <br/>
      
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
