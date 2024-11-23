import React, { useState } from 'react'

function GoalForm(props) {
    const [formData, setFormData] = useState({ goal: "", by: "" });
    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({ goal: "", by: "" });
    };
    return (
        <>
            <h1>Sagar Ulitma Goals:</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
                <input type="text" name='by' placeholder='By ... ' value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </>
    )
}

function ListGoals(props) {
    return (
        <ul>
            {props.allGoals.map((g, index) => (
                <li key={index}>{g.goal} by {g.by}</li>
            ))}
        </ul>
    );
}

function Goals() {
    const [allGoals, setAllGoals] = useState([]);

    function addGoal(goal) {
        setAllGoals([...allGoals, goal]);
    }

    return (
        <>
            <GoalForm onAdd={addGoal} />
            <ListGoals allGoals={allGoals} />
        </>
    )
}

export default Goals