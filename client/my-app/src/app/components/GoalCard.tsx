
import React from 'react';

// prioridades que o componente vai receber
interface GoalCardProps {
  progress: number;
  total: number;
}

const GoalCard: React.FC<GoalCardProps> = ({ progress, total }) => {
  // Calcula a porcentagem do progresso. Evita divisão por zero.
  const percentage = total > 0 ? (progress / total) * 100 : 0;

  return (
    <div className="bg-gray-800 rounded-lg p-4 w-full shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-300">Progresso da meta</p>
        <p className="font-bold text-white">
          {progress}/{total}
        </p>
      </div>
      {/* Barra de progresso */}
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-right text-sm text-gray-400 mt-1">{Math.round(percentage)}%</p>
    </div>
  );
};

export default GoalCard;