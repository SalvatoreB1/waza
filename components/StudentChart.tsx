
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '1er Grado', 'Estudiantes': 150, },
  { name: '2do Grado', 'Estudiantes': 180, },
  { name: '3er Grado', 'Estudiantes': 170, },
  { name: '4to Grado', 'Estudiantes': 160, },
  { name: '5to Grado', 'Estudiantes': 140, },
  { name: '6to Grado', 'Estudiantes': 130, },
  { name: '7mo Año', 'Estudiantes': 90, },
  { name: '8vo Año', 'Estudiantes': 85, },
  { name: '9no Año', 'Estudiantes': 80, },
  { name: '10mo Año', 'Estudiantes': 65, },
  { name: '11vo Año', 'Estudiantes': 60, },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-lg shadow-lg border border-slate-200">
        <p className="font-bold text-slate-800">{`${label}`}</p>
        <p className="text-indigo-600">{`Estudiantes : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const StudentChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: -10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }}/>
        <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(239, 246, 255, 0.5)'}} />
        <Legend wrapperStyle={{fontSize: "14px"}}/>
        <Bar dataKey="Estudiantes" fill="#4f46e5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StudentChart;
