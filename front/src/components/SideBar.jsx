import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const openMenuHamburguer = () => {
    setOpen(true)
  };
  const closeMenuHamburguer = () => {
    setOpen(false)
  };

  return (
    <div className="flex flex-row z-0">
      {
        open == false ? (
        <>
          <button className="ml-4 sm:visible md:invisible lg:invisible xl:invisible 2xl:invisible" onClick={() => openMenuHamburguer()}>
            <i className="fa-solid fa-bars text-white"></i>
          </button>
        </>
      ) : (
        <>
        <div className="flex justify-start items-center bg-gray-800 w-60 h-screen ">
          
            <button className="ml-4" onClick={() => closeMenuHamburguer()}>
              <i className="fa-solid fa-x text-white"></i>
              
            </button>
            
            <div className="flex  flex-col justify-center self-end ml-9 transition-all duration-600">

                <NavLink href="#home" to="/" as={Link} className="ml-5 mb-12">
                    <span className="text-gray-300 hover:text-white text-xl">
                        Home
                    </span>
                </NavLink>

                <NavLink href="#mac" to="/mac" as={Link} className=" ml-5 mb-12">
                    <span className="text-gray-300 hover:text-white text-xl ">
                        Mac
                    </span>
                </NavLink>

                <NavLink href="#iPad" to="/ipad" as={Link} className="text-white mb-14 ml-5">
                    <span className="text-gray-300 hover:text-white text-xl ">
                        iPad
                    </span>
                </NavLink>

                <NavLink href="#iPhone" to="/iphone" as={Link} className="text-white ml-5 mb-14">
                    <span className="text-gray-300 hover:text-white text-xl ">
                        iPhone
                    </span>
                </NavLink>
            </div>
        </div>
        </>
        ) }
    </div>  
  )
}

export default SideBar;
