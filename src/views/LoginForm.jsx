import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    //validar y enviar los datos al servidor
    console.log(email, password);
  };

  return (
    <div className="login bg-gray-400 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-4 w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Iniciar sesión
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black-500 focus:ring focus:ring-black-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black-500 focus:ring focus:ring-black-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md px-3 py-2 hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
          >
            Entrar
          </button>
          <div className="mt-4">
            <NavLink
              href="#createuser"
              to="/createuser"
              as={Link}
              className="text-center text-sm text-gray-600 underline hover:text-gray-900"
            >
              ¿No tienes cuenta? Regístrate aquí
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
