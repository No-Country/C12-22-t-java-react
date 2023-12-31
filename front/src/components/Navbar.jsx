
import { Link, NavLink } from 'react-router-dom';
import SideBar from './SideBar';
import SearchBar from './SearchBar';

const Navbar = () => {
  

  return (
    <header className="bg-gray-800  w-full">
      <nav className='h-24 flex  justify-between m-auto w-4/5'>
        <SideBar />
        <div className="md:flex hidden md:justify-center md:items-center ">
          <NavLink to="/" as={Link}>
            <i className="fa-brands fa-apple text-gray-300 hover:text-white text-4xl mt-2 ml-3 mr-5 mb-2"></i>
          </NavLink>

          <NavLink  to="/" as={Link}>
            <span className="text-gray-300 hover:text-white text-xl mr-5">
              Home
            </span>
          </NavLink>

          <NavLink to="/mac" as={Link}>
            <span className="text-gray-300 hover:text-white text-xl mr-5">
              Mac
            </span>
          </NavLink>

          <NavLink to="/ipad" as={Link} className="text-white">
            <span className="text-gray-300 hover:text-white text-xl mr-5">
              iPad
            </span>
          </NavLink>

          <Link to="/iphone" className="text-white ">
            <span className="text-gray-300 hover:text-white text-xl ">
              iPhone
            </span>
          </Link>
        </div>

        <SearchBar/>

        <div className=" flex justify-center items-center">
          <NavLink
            to="/myprofile"
            as={Link}
            className="text-white "
          >
            <i className="fa-regular fa-user text-gray-300 hover:text-white text-2xl mr-12 ml-6"></i>
          </NavLink>

          <NavLink
            to="/cart"
            as={Link}
            className="text-white text-2xl "
          >
            <i className="text-gray-300 hover:text-white fa-solid fa-cart-shopping"></i>
            <br />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
