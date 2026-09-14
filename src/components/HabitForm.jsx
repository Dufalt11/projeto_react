import { useState } from "react";
import { HabitsContext } from "../context/HabitsContext";

export default function HabitForm({ addHabit }) {
    const [form, setForm] = useState({ title: "", goal: ""});
    const [error, setError] = useState ("");


    if (!HabitsContext) {
        throw new Error("HabitForm precisa estar dentro de HabitsProvider. ")
    }

    const { addHabit } = HabitsContext
    
    function handleChange(event) {
        const { name, value } = event.target;
        setForm ((currentForm) => ({
            ...currentForm,
            [name]: value,
        })); 
    }

    function handleSubmit(event) {
        event.preventDefault();

        const title = form.title.trim();
        const goal = form.goal.trim();

        if (!title || !goal) {
            setError("preencha o hábito e a meta")
            return;
        }
        
        addHabit({
            id: crypto.randomUUID(),
            title,
            goal,
            completed: false,
        });

        setForm({ title: "", goal: ""})
        setError("")
    }

      return (
        <form className="habit-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Hábito</label>
                <input
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Ex.: LER"
                />
            </div>
            <div className="field">
                <label htmlFor="goal">Meta</label>
                <input
                id="goal"
                name="goal"
                value={form.goal}
                onChange={handleChange}
                placeholder="Ex.: 20 MINUTOS"
                />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit">Adicionar hábito</button>
            </form>
    );
}

