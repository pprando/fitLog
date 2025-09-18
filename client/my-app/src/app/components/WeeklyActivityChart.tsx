
import React from 'react';

// Dados de exemplo para cada dia. `value` de 0 a 100 para a altura.
interface DayData {
  day: string;
  value: number; // Ex: 0 para nenhum treino, 100 para meta do dia batida
}

interface WeeklyActivityChartProps {
  data: DayData[];
}

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({ data }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 w-full shadow-lg">
      <div className="flex justify-around items-end h-32">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Barra do gráfico */}
            <div className="w-6 bg-gray-700 rounded-t-md flex-grow flex items-end">
              <div
                className="w-full bg-cyan-500 rounded-t-md"
                style={{ height: `${item.value}%` }}
              ></div>
            </div>
            {/* Rótulo do dia */}
            <p className="text-xs text-gray-400 mt-1">{item.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyActivityChart;