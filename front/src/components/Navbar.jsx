import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideBar from './SideBar';

const Navbar = () => {
  const [product, setProduct] = useState('');

  const searhbar = () => [console.log(product)];

  return (
    <nav className="bg-gray-800 h-24 flex justify-beetwen items-center w-screen">
      <SideBar className="min-[320px]:visible  md:invisible lg:invisible xl:invisible 2xl:invisible " />
      <div className="flex  justify-center items-center ml-6 min-[320px]:invisible sm:invisible md:visible lg:visible xl:visible 2xl:visible">
        <NavLink href="#home" to="/" as={Link}>
          <i className="fa-brands fa-apple text-gray-300 hover:text-white text-4xl mt-2 ml-3 mr-5 mb-2"></i>
        </NavLink>

        <NavLink href="#home" to="/" as={Link}>
          <span className="text-gray-300 hover:text-white text-xl mr-5">
            Home
          </span>
        </NavLink>

        <NavLink href="#mac" to="/mac" as={Link}>
          <span className="text-gray-300 hover:text-white text-xl mr-5">
            Mac
          </span>
        </NavLink>

        <NavLink href="#iPad" to="/ipad" as={Link} className="text-white">
          <span className="text-gray-300 hover:text-white text-xl mr-5">
            iPad
          </span>
        </NavLink>

        <NavLink to="/iphone" as={Link} className="text-white ">
          <span className="text-gray-300 hover:text-white text-xl ">
            iPhone
          </span>
        </NavLink>
      </div>

      <div className="flex justify-start items-center gap-1.5 ml-40 ">
        <input
          placeholder="Buscar..."
          className="rounded-md p-3 outline-red-900 w-80"
          value={product}
          onChange={e => setProduct(e.target.value)}
        ></input>
        <button
          className="text-white bg-gray-500 rounded-md p-3 ml-2 hover:bg-gray-300 hover:text-gray-800 "
          onClick={searhbar}
        >
          <i className="fa-solid fa-magnifying-glass p-0.5"></i>
        </button>
      </div>

      <div className=" flex justify-center items-center ml-72">
        <NavLink
          href="#myprofile"
          to="/myprofile"
          as={Link}
          className="text-white "
        >
          <i className="fa-regular fa-user text-gray-300 hover:text-white text-2xl mr-12 ml-6"></i>
        </NavLink>

        <NavLink
          href="#cart"
          to="/cart"
          as={Link}
          className="text-white text-2xl "
        >
          <i className="text-gray-300 hover:text-white fa-solid fa-cart-shopping"></i>
          <br />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
