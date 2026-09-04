const habit = {
    title: "Beber Agua",
    goal: "8 copos",
}

export default function Habitcard({title, goal, completed}) {
    return (
        <article className={'habit-card ${completed ? "is-complete" : ""}'}>
            <div>
                <h2>{title}</h2>
                <p>Meta: {goal}</p>
            </div>

            <span className="habit-status">
                {completed ? "Concluído" : "pendente"}
            </span>
        </article>

    )
}