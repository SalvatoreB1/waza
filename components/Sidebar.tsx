
import React, { useState } from 'react';
import { Page } from '../types';
import DashboardIcon from './icons/DashboardIcon';
import ProcesosIcon from './icons/ProcesosIcon';
import ReportesIcon from './icons/ReportesIcon';
import MantenimientoIcon from './icons/MantenimientoIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import CloseIcon from './icons/CloseIcon';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

type NavMenu = 'procesos' | 'reportes' | 'mantenimiento' | null;

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) => {
    const [openMenu, setOpenMenu] = useState<NavMenu>(null);

    const handleMenuClick = (menu: NavMenu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const handlePageChange = (page: Page) => {
      setCurrentPage(page);
      if (window.innerWidth < 1024) { // lg breakpoint
        setSidebarOpen(false);
      }
    }
    
    const NavLink: React.FC<{ page: Page; children: React.ReactNode; icon: React.ReactNode }> = ({ page, children, icon }) => (
        <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                currentPage === page 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'text-slate-200 hover:bg-slate-700 hover:text-white'
            }`}
        >
            {icon}
            <span className="ml-4">{children}</span>
        </a>
    );

    const SubNavLink: React.FC<{ page: Page; children: React.ReactNode; }> = ({ page, children }) => (
        <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
            className={`block px-4 py-2 text-sm rounded-md ${
                currentPage === page 
                ? 'text-white font-semibold' 
                : 'text-slate-300 hover:text-white'
            }`}
        >
            {children}
        </a>
    );

    const Menu: React.FC<{menu: NavMenu; title: string; icon: React.ReactNode; children: React.ReactNode}> = ({menu, title, icon, children}) => (
        <div>
            <button
                onClick={() => handleMenuClick(menu)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-left text-slate-200 rounded-lg hover:bg-slate-700 hover:text-white focus:outline-none transition-colors duration-200"
            >
                <span className="flex items-center">
                    {icon}
                    <span className="ml-4">{title}</span>
                </span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${openMenu === menu ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openMenu === menu ? 'max-h-40' : 'max-h-0'}`}>
                <div className="pl-12">
                    {children}
                </div>
            </div>
        </div>
    );
    
    const sidebarContent = (
      <>
        <div className="flex items-center justify-between px-4 py-5">
            <a href="#" className="text-white text-2xl font-bold flex items-center">
                <img src="https://picsum.photos/seed/logo/40/40" alt="Logo" className="rounded-full mr-3"/>
                <span className="whitespace-nowrap">Lya I. de Coronil</span>
            </a>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-300 hover:text-white">
                <CloseIcon />
            </button>
        </div>
        <nav className="mt-6 px-2 space-y-2">
            <NavLink page="dashboard" icon={<DashboardIcon className="w-5 h-5"/>}>Dashboard</NavLink>

            <Menu menu="procesos" title="Procesos" icon={<ProcesosIcon className="w-5 h-5"/>}>
                <SubNavLink page="enrollment">Inscripción</SubNavLink>
                <SubNavLink page="grade_upload">Carga de Notas</SubNavLink>
            </Menu>

            <Menu menu="reportes" title="Reportes" icon={<ReportesIcon className="w-5 h-5"/>}>
                <SubNavLink page="report_cards">Boletines</SubNavLink>
                <SubNavLink page="rosters">Listados</SubNavLink>
            </Menu>

            <Menu menu="mantenimiento" title="Mantenimiento" icon={<MantenimientoIcon className="w-5 h-5"/>}>
                <SubNavLink page="backups">Respaldos</SubNavLink>
                <SubNavLink page="users">Usuarios</SubNavLink>
            </Menu>
        </nav>
      </>
    );

    return (
        <>
            {/* Overlay for mobile */}
            <div 
              className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={() => setSidebarOpen(false)}
            ></div>

            {/* Sidebar */}
            <aside className={`fixed lg:relative inset-y-0 left-0 flex-shrink-0 w-64 bg-slate-800 overflow-y-auto z-30 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                {sidebarContent}
            </aside>
        </>
    );
};

export default Sidebar;
