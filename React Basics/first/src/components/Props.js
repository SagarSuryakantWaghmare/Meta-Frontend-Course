import React from 'react'

function Props(props) {
return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
            <p className="text-lg font-semibold">{props.name} domain is a {props.aim}</p>
            <p className="text-sm text-gray-700">and thought is {props.thought} and mindset is {props.mindset}</p>
    </div>
)
}

export default Props
