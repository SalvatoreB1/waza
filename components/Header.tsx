
import React from 'react';
import LogoutIcon from './icons/LogoutIcon';
import MenuIcon from './icons/MenuIcon';

interface HeaderProps {
  onLogout: () => void;
  pageTitle: string;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, pageTitle, setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-slate-200">
      <div className="flex items-center">
        <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-semibold text-slate-800 ml-4 lg:ml-0">{pageTitle}</h1>
      </div>
      
      <div className="flex items-center">
        <div className="relative">
          <button className="flex items-center space-x-2 relative focus:outline-none">
            <div className="hidden md:block">
              <div className="leading-5 text-right">
                <div className="font-semibold text-slate-700">Admin</div>
                <div className="text-sm text-slate-500">Administrador</div>
              </div>
            </div>
            <img src="https://picsum.photos/100" alt="avatar" className="w-10 h-10 rounded-full" />
          </button>
        </div>
        <button onClick={onLogout} className="ml-4 text-slate-500 hover:text-indigo-600 focus:outline-none transition-colors duration-200">
          <LogoutIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
