import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Habitcard from './components/Habitscard'
import { initialHabits } from './data/habits'
import Habitlist from './components/HabitList'
import Panel from './components/panel'

export default function App(){
  const CompletedCount = initialHabits.filter(
    (habit) => habit.completed,
  ).length
function handlesShowDetails(habitId) {
  const habit = initialHabits.find((item) => item.id === habitId)

  if (habit) {
    window.alert(`${habit.title} - Meta: ${habit.h}`)
  }
}
return (
  <main>
    <header className='app'>
      <p className='hero'> MY DAILY HABITS</p>
      <h1>Pequenos hábitos, progresso visivel</h1>
      <p>
        {CompletedCount} de {initialHabits} hábitos concluidos
      </p>
    </header>
    <Panel title="Habitos de hoje">
      <Habitlist
        habits={initialHabits}
        onShowDetails={handlesShowDetails}
      />
    </Panel>
  </main>
 );
}
