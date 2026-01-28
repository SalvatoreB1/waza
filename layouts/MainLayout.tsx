
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Page } from '../types';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onLogout: () => void;
  pageTitle: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentPage, setCurrentPage, onLogout, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onLogout={onLogout} 
          pageTitle={pageTitle}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
