
import React from 'react';

const Enrollment: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Formulario de Inscripción</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="student-name" className="block text-sm font-medium text-slate-700">Nombres del Estudiante</label>
            <input type="text" id="student-name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="student-lastname" className="block text-sm font-medium text-slate-700">Apellidos del Estudiante</label>
            <input type="text" id="student-lastname" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-slate-700">Fecha de Nacimiento</label>
            <input type="date" id="birthdate" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-slate-700">Grado a Cursar</label>
            <select id="grade" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>1er Grado</option>
              <option>2do Grado</option>
              <option>3er Grado</option>
            </select>
          </div>
          <div>
            <label htmlFor="parent-name" className="block text-sm font-medium text-slate-700">Nombre del Representante</label>
            <input type="text" id="parent-name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="parent-phone" className="block text-sm font-medium text-slate-700">Teléfono de Contacto</label>
            <input type="tel" id="parent-phone" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="button" className="bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-lg mr-2 hover:bg-slate-300">Cancelar</button>
          <button type="submit" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700">Inscribir Estudiante</button>
        </div>
      </form>
    </div>
  );
};

export default Enrollment;
