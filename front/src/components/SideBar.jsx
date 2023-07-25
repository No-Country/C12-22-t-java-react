import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden  z-0">
          <button className="" onClick={() => setOpen(!open)}>
            <i className={`fa-solid  text-white ${!open ? "fa-bars" : "fa-x"}`} ></i>
          </button>
      {
        open == false ? (
        <>
        </>
      ) : (
        <>
        <div className="flex bg-gray-800 w-60  h-96">
            
            <div className="flex flex-col justify-center self-end  transition-all duration-600">

                <NavLink  to="/" as={Link} className="ml-5 mb-12">
                    <span className="text-gray-300 hover:text-white text-xl">
                        Home
                    </span>
                </NavLink>

                <NavLink  to="/mac" as={Link} className=" ml-5 mb-12">
                    <span className="text-gray-300 hover:text-white text-xl ">
                        Mac
                    </span>
                </NavLink>

                <NavLink to="/ipad" as={Link} className="text-white mb-14 ml-5">
                    <span className="text-gray-300 hover:text-white text-xl ">
                        iPad
                    </span>
                </NavLink>

                <NavLink  to="/iphone" as={Link} className="text-white ml-5 mb-14">
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
