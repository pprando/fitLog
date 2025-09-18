
import GoalCard from './components/GoalCard';
import WeeklyActivityChart from './components/WeeklyActivityChart';
import PerformanceCard from './components/PerformanceCard';

export default function HomePage() {
  // Dados de exemplo que vao vim da logica de negocio da api
  const weeklyGoal = {
    completed: 2,
    total: 5,
  };

  const weeklyActivityData = [
    { day: 'S', value: 80 },
    { day: 'T', value: 0 },
    { day: 'Q', value: 100 },
    { day: 'Q', value: 20 },
    { day: 'S', value: 0 },
    { day: 'S', value: 0 },
    { day: 'D', value: 50 },
  ];

  return (
    <main className="flex justify-center min-h-screen p-4 sm:p-6">
      <div className="w-full max-w-md flex flex-col gap-8">
        {/* Cabeçalho */}
        <div>
          <h1 className="text-3xl font-bold text-white">Tela Principal</h1>
          <p className="text-md text-gray-400 mt-1">
            Acompanhe seu progresso e performance
          </p>
        </div>

        {/* Seção: Meta Semanal */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-200">Meta Semanal</h2>
          <GoalCard progress={weeklyGoal.completed} total={weeklyGoal.total} />
        </section>

        {/* Seção: Sequência */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-200">Sequência de Treinos</h2>
          <WeeklyActivityChart data={weeklyActivityData} />
        </section>

        {/* Seção: Atividade Semanal */}
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-200">Atividade Semanal</h2>
          <PerformanceCard />
        </section>
      </div>
    </main>
  );
}