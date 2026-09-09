import './App.css'
import { initialHabits } from './data/habits'
import Habitlist from './components/HabitList'
import Panel from './components/panel'
import { useState } from 'react'
import(useState)


export default function App() {
  const [habits, setHabits] = useState(initialHabits)

  const CompletedCount = initialHabits.filter(
    (habit) => habit.completed
  ).length

  function handleToggleHabit(habitId) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === habitId ? { ...habit, completed: !habit.completed }
          : habit,
      ),
    );
  }


  return (
    <main className='app'>
      <header className="hero">
        <p className="eyebrow">MY DAILY HABITS</p>

        <h1>Pequenos hábitos, progresso visível</h1>

        <p>
          {CompletedCount} de {initialHabits.length} hábitos concluídos
        </p>
      </header>

      <Panel title="Hábitos de hoje">
        <Habitlist
          habits={habits}
          onToggle={handleToggleHabit}
        />
      </Panel>
    </main>
  );
}

