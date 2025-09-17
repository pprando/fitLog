"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Seg", treino: 1 },
  { name: "Ter", treino: 0 },
  { name: "Qua", treino: 1 },
  { name: "Qui", treino: 1 },
  { name: "Sex", treino: 0 },
  { name: "Sab", treino: 1 },
  { name: "Dom", treino: 0 },
];

export default function WeeklyActivityChart() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 shadow-md">
      <h2 className="text-lg font-semibold text-white mb-2">Atividade Semanal</h2>
      <BarChart width={320} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Bar dataKey="treino" fill="#22c55e" radius={[6, 6, 0, 0]} />
      </BarChart>
    </div>
  );
}
