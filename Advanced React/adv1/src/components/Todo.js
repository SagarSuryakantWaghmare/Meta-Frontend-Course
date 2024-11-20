import React, { useState } from 'react';

// const ToDo = (props) => (
//   <tr>
//     <td>
//       <label>{props.id}</label>
//     </td>
//     <td>
//       <input type="text" />
//     </td>
//     <td>
//       <label>{props.createdAt}</label>
//     </td>
//   </tr>
// );

function Todo() {
  // const [todos, setTodo] = useState([
  //   {
  //     id: 'todo1',
  //     createdAt: '18:80',
  //   },
  //   {
  //     id: 'todo2',
  //     createdAt: '20:00', // Fixed the key spelling here
  //   },
  // ]);

  // const reverseOrder = () => {
  //   setTodo([...todos].reverse());
  // };
  const desserts=[
    {
      title:'chocalte favour',
      description:'I like the chocalte favour very much',
      calories:500
    }
  ];

  const NewDesserts=desserts.map((desserts)=>{
    return {
      title:desserts.title.toUpperCase,
      ...desserts,
      kcal:desserts.calories/1000,
    }
  })

  return (
    <>
      <div>
        {/* <button onClick={reverseOrder}>Reverse</button>
        <table>
          <tbody>
            {todos.map((todo) => (
              <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
            ))}
          </tbody>
        </table> */}
      </div>
      <div>New Deserts</div>
      <NewDesserts/>
    </>
  );
}

export default Todo;
