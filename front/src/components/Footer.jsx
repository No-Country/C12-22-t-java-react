import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (

    <footer className="bg-gray-800 w-full px-12 md:px-16 text-white pt-4 md:pt-32 text-center md:text-left " >
      <hr />
      <div className="flex item-center justify-center flex-wrap gap-8 md:gap-8 lg:gap-x-36 lg:gap-y-8 text-xl p-4">
        <div>
          <i className="fa-brands fa-apple text-gray-200 hover:text-white text-3xl pr-4"></i>
          <p>
            Tus productos Apple <br /> a un click de distancia.
          </p>
        </div>
        <div className="px-10">
          <h3 className="text-xl font-semibold pb-2">Servicios</h3>
          <div className="text-base">
            <NavLink href="#mac" to="/mac" as={Link}>
              Mac
            </NavLink>
          </div>
          <div className="text-base">
            <NavLink href="#ipad" to="/ipad" as={Link}>
              iPad
            </NavLink>
          </div>
          <div className="text-base">
            <NavLink href="#iphone" to="/iphone" as={Link} className=" ">
              iPhone
            </NavLink>
          </div>
        </div>
        <div className="px-10">
          <h3 className="text-xl font-semibold pb-2">Síguenos</h3>
          <div className="text-base">
            <NavLink href="" to="" as={Link}>
              Facebook
            </NavLink>
          </div>
          <div className="text-base">
            <NavLink href="" to="" as={Link}>
              Instagram
            </NavLink>
          </div>
          <div className="text-base">
            <NavLink href="" to="" as={Link}>
              Twitter
            </NavLink>
          </div>
        </div>
        <div className="px-10 ">
          <h3 className="text-xl font-semibold align-top pb-2">Contáctanos</h3>
          <div className="text-base">
            <NavLink className="text-base">email@email.com</NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-xs pb-1">
          Copyright &#169; Grupo 22 - Cohorte 12 NoCountry
        </span>
      </div>
    </footer>
  );
};

export default Footer;
