import React from 'react';

const MetricCard = ({ title, value, sub, icon, color, pecusColor }) => {
  // Determine background and text color based on pecusColor prop for light/dark modes
  const bgColor = color.includes('bg-') ? color.split(' ')[1] : `bg-[${pecusColor}]/10`;
  const textColor = color.includes('text-') ? color.split(' ')[0] : `text-[${pecusColor}]`;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        {/* Lado Esquerdo: Textos */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1 tracking-wide">{title}</p>
          <h4 className="text-3xl font-bold text-gray-800 dark:text-white">{value}</h4>
          {sub && <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">{sub}</p>}
        </div>

        {/* Lado Direito: Ícone */}
        <div className={`p-4 rounded-xl flex items-center justify-center bg-opacity-20 ${bgColor}`} style={{ backgroundColor: pecusColor + '33' }}>
          {React.cloneElement(icon, { style: { color: pecusColor } })}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;