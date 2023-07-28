//import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Este es un hook personalizado que puedes crear

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpia el mensaje de error antes de hacer la solicitud

    try {
      const response = await axios.post('https://appleclon.onrender.com/login', {
        email,
        password,
      });

      // Aquí deberías manejar la respuesta del servidor después del inicio de sesión exitoso.
      console.log('Respuesta del servidor:', response.data);

      // Redirige al usuario a la página de inicio después de iniciar sesión exitosamente.
      // Puedes usar react-router-dom para hacer esto.
      // history.push('/home');
    } catch (error) {
      setError('Error de inicio de sesión'); // Maneja errores de la API
    }
  };


  return (
    <div className="login bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="w-96 bg-gray-800 rounded-lg p-5 gap-7">
        <h1 className="text-3xl text-white font-bold mb-4">Iniciar sesión</h1>
        <form className='flex flex-col gap-5 w-full' onSubmit={handleSubmit}>
          <div className="flex flex-col items-start w-full">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            ></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-gray-800 w-full text-white border border-b border-white border-solid border-t-0 border-l-0 border-r-0 focus:outline-none mt-8"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            ></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="bg-gray-800 w-full text-white border border-b border-white border-solid border-t-0 border-l-0 border-r-0 focus:outline-none mt-8"
              placeholder="Contraseña"
            />
          </div>
          <NavLink
            type="submit"
            className="w-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border border-white rounded-md px-3 py-2 mt-8"
            onClick={handleSubmit}
          >
            Entrar
          </NavLink>
          <div className="mt-8">
            <NavLink
              href="#createuser"
              to=""
              as={Link}
              className="flex items-center justify-center text-center text-sm text-white underline hover:text-base transition-transform duration-500 ease-in-out"
            >
              ¿No tienes cuenta? Regístrate aquí
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;