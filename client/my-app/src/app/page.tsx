import GoalCard from "./components/GoalCard";
import WeeklyActivityChart from "./components/WeeklyActivityChart";

export default function HomePage() {
  return (
    <main className="p-4 space-y-4 bg-black min-h-screen">
      <h1 className="text-xl font-bold text-white mb-4">
        Acompanhe seu progresso e performance
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <GoalCard total={5} completed={3} />
        {/* Adicione outros cards: Desempenho, Calorias, Sequência */}
      </div>

      <WeeklyActivityChart />
      {/* Coloque os outros gráficos aqui */}
    </main>
  );
}
