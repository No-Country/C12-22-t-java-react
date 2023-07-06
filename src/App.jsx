



import react from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/views/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Ipad from "./views/Ipad";
import Iphone from "./views/Iphone";
import MyProfile from "./views/MyProfile";
import Mac from "./views/Mac";
import Cart from "./views/Cart";


function App() {
  return (


    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/miperfil" element={<MyProfile />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </HashRouter>
  );

}

export default App;
