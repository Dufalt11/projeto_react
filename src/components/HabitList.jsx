import Habitcard from './Habitscard'

export default function Habitlist({ habits, onShowDetails }) {
  if (habits.length === 0) {
    return <p>Nenhum hábito cadastrado</p>
  }

  return (
    <section className="habit-list" aria-label="Hábitos de hoje">
      {habits.map((habit) => (
        <Habitcard
          key={habit.id}
          {...habit}
          onShowDetails={onShowDetails}
        />
      ))}
    </section>
  )
}
