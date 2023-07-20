
import { Link, NavLink } from 'react-router-dom';
import SideBar from './SideBar';
import SearchBar from './SearchBar';

const Navbar = () => {
  

  return (
    <nav className="bg-gray-800 h-24 flex justify-beetwen items-center w-full">
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

      <SearchBar/>

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
