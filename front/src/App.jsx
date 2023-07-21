import react from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/views/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Ipad from './views/Ipad';
import Iphone from './views/Iphone';
import MyProfile from './views/MyProfile';
import Mac from './views/Mac';
import Cart from './views/Cart';
import Footer from './components/Footer';
import LoginForm from './views/LoginForm';
import CreateUser from './views/CreateUser/CreateUser';
import Contact from './views/Contact';
import Detail from './views/Detail';

function App() {
  return (
    <HashRouter>
    <div className='w-full min-h-screen flex flex-col'>
    <div className='flex-1'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
      </div>
      <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
