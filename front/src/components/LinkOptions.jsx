import { Link, NavLink } from 'react-router-dom';

function LinkOptions() {
  return (
    <section>
      <div className="p-2 md:p-4 flex items-center justify-center gap-12 md:gap-8 ">
        <NavLink
          href="#mac"
          to="/mac"
          as={Link}
          className=" underline border rounded-lg p-1 md:p-2"
        >
          <img
            className="w-36 md:w-48 hover:scale-125 transition-transform duration-500 ease-in-out border rounded-lg"
            src="https://th.bing.com/th/id/OIG.0oBWHag_Mt5YsKFygAUi?pid=ImgGn"
            alt="mac"
          />
        </NavLink>
        <NavLink
          href="#ipad"
          to="/ipad"
          as={Link}
          className="underline border rounded-lg p-1 md:p-2"
        >
          <img
            className="w-36 md:w-48 hover:scale-125 transition-transform duration-500 ease-in-out border rounded-lg"
            src="https://www.shopdutyfree.es/25334-medium_default/ipad-pro-129-wifi-2tb-plata.jpg"
            alt="ipad"
          />
        </NavLink>
        <NavLink
          href="#iphone"
          to="/iphone"
          as={Link}
          className="underline border rounded-lg p-1 md:p-2"
        >
          <img
            className="w-36 md:w-48 hover:scale-125 transition-transform duration-500 ease-in-out border rounded-lg"
            src="https://th.bing.com/th/id/OIP.YfnLRVia6vNIMmvyjKcnCAHaHa?pid=ImgDet&rs=1"
            alt="iphone"
          />
        </NavLink>
      </div>
    </section>
  );
}

export default LinkOptions;
