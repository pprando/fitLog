import { FC } from "react";

interface GoalCardProps {
  total: number;
  completed: number;
}

const GoalCard: FC<GoalCardProps> = ({ total, completed }) => {
  const progress = (completed / total) * 100;

  return (
    <div className="bg-zinc-900 rounded-xl p-4 shadow-md">
      <h2 className="text-lg font-semibold text-white">Meta Semanal</h2>
      <p className="text-sm text-gray-400">{total} treinos</p>
      <div className="mt-2 w-full bg-gray-800 h-2 rounded">
        <div
          className="h-2 bg-green-600 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-1 text-sm text-gray-300">
        {completed} de {total} treinos completos
      </p>
    </div>
  );
};

export default GoalCard;
