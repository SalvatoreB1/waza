
import React from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-8 m-4 space-y-6 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col items-center space-y-4">
            <img src="https://picsum.photos/seed/logo/80/80" alt="Institution Logo" className="rounded-full"/>
            <h1 className="text-3xl font-bold text-slate-800">U.E. Lya Imber de Coronil</h1>
            <p className="text-center text-slate-500">Sistema de Gestión Académica</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-slate-700"
            >
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              defaultValue="admin"
              className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ingrese su usuario"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              defaultValue="password"
              className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900"> Recordarme </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> ¿Olvidó su contraseña? </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
