import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "focus":
            return { energy: state.energy + 100 };
        case "ultima":
            return { energy: state.energy + 400 };
        case "rage":
            return { energy: state.energy + 1000 };
        case "unstoppable":
            return { energy: state.energy + 50 };
        default:
            return state;
    }
};

function DisReducer() {
    const initialState = { energy: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Reduce the distraction and become the unknown ultima</h1>
            <h2>Energy: {state.energy}</h2>
            <button onClick={() => dispatch({ type: "focus" })}>Focus on your career first</button>
            <button onClick={() => dispatch({ type: "ultima" })}>Become ultima</button>
            <button onClick={() => dispatch({ type: "rage" })}>Rage</button>
            <button onClick={() => dispatch({ type: "unstoppable" })}>Unstoppable</button>
        </>
    );
}

export default DisReducer;