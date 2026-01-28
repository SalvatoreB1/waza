
import React, { useState } from 'react';
import LoginPage from './pages/Login';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Enrollment from './pages/Enrollment';
import GradeUpload from './pages/GradeUpload';
import ReportCards from './pages/ReportCards';
import Rosters from './pages/Rosters';
import Backups from './pages/Backups';
import Users from './pages/Users';
import { Page } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'enrollment':
        return <Enrollment />;
      case 'grade_upload':
        return <GradeUpload />;
      case 'report_cards':
        return <ReportCards />;
      case 'rosters':
        return <Rosters />;
      case 'backups':
        return <Backups />;
      case 'users':
        return <Users />;
      default:
        return <Dashboard />;
    }
  };
  
  const pageTitles: { [key in Page]: string } = {
    dashboard: 'Dashboard',
    enrollment: 'Inscripción',
    grade_upload: 'Carga de Notas',
    report_cards: 'Boletines',
    rosters: 'Listados',
    backups: 'Respaldos',
    users: 'Usuarios',
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <MainLayout
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      onLogout={handleLogout}
      pageTitle={pageTitles[currentPage]}
    >
      {renderPage()}
    </MainLayout>
  );
};

export default App;
