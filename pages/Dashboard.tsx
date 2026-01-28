
import React from 'react';
import StatCard from '../components/StatCard';
import StudentChart from '../components/StudentChart';

const Dashboard: React.FC = () => {
  return (
    <div>
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Estudiantes Activos" value="1,250" change="+5.2%" changeType="increase" />
            <StatCard title="Nuevas Inscripciones" value="82" change="+12%" changeType="increase" />
            <StatCard title="Docentes" value="76" change="-1.5%" changeType="decrease" />
            <StatCard title="Cursos Ofertados" value="45" change="0%" changeType="neutral" />
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Distribución de Estudiantes por Grado</h3>
            <div className="h-96">
                <StudentChart />
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
