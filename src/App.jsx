import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Habitcard from './components/Habitscard'
import { initialHabits } from './data/habits'
import Habitlist from './components/HabitList'

export default function App() {
  const completedCount = initialHabits.filter(
    (habit) => habit.completed,
  ). length;
  
  return(
    <main className='App'>
        <header className='hero'>
          <p className='eyebrow'>My Daily Habits </p>
          <h2>Pequenos Hábitos</h2>
          <p>Hoje começamos com um tela simples e funcional</p>
          <p>
            {completedCount} de {initialHabits.length} hábitos concluuídos.
          </p>
        </header>
<Habitlist habits={initialHabits}/>
    </main>
  )
}
