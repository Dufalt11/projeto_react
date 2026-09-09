import Habitcard from './Habitscard'

export default function Habitlist({ habits, onToggle }) {
  if (habits.length === 0) {
    return <p>Nenhum hábito cadastrado</p>
  }

  return (
    <section className="habit-list" aria-label="Hábitos de hoje">
      {habits.map((habit) => (
        <Habitcard
          key={habit.id}
          {...habit}
          onToggle={onToggle}
        />
      ))}
    </section>
  )
}
