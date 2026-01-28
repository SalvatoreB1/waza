
import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease' | 'neutral';
}

const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const NeutralIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
    </svg>
);

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType }) => {
    const changeColor = {
        increase: 'text-emerald-500 bg-emerald-100',
        decrease: 'text-red-500 bg-red-100',
        neutral: 'text-slate-500 bg-slate-100'
    };

    const icon = {
        increase: <ArrowUpIcon />,
        decrease: <ArrowDownIcon />,
        neutral: <NeutralIcon />
    }
    
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-sm font-medium text-slate-500">{title}</h4>
            <div className="flex items-baseline justify-between mt-2">
                <p className="text-3xl font-bold text-slate-800">{value}</p>
                <div className={`flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${changeColor[changeType]}`}>
                    {icon[changeType]}
                    <span className="ml-1">{change}</span>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
