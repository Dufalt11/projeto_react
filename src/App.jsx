import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

export default function App() {
  return(
    <main className='App'>
        <header className='hero'>
          <p className='eyebrow'>My Daily Habits </p>
          <h1>Pequenos Hábitos</h1>
          <p>Hoje começamos com um tela simples e funcional</p>
        </header>

        <section className='habit-list' aria-label='hábitos de hoje'>
          <article className='habit-card'>
            <h2>Beber Água</h2>
            <p>Meta: 30 minutos</p>
          </article>

          <article className='habit-card'>
            <h2>Estudar React</h2>
            <p>Meta: 30 minutos</p>
          </article>

          <article className='habit-card'>
            <h2>Caminhar</h2>
            <p>Meta: 20  minutos </p>
          </article>
        </section>
    </main>
  )
}
