import React from 'react';

function Deserts() {
  const desserts = [
    {
      title: 'chocolate flavour',
      description: 'I like the chocolate flavour very much',
      calories: 500,
    },
  ];

  const NewDesserts = desserts.map((dessert) => {
    return {
      title: dessert.title.toUpperCase(), 
      ...dessert,
      kcal: dessert.calories / 1000, 
    };
  });

  return (
    <>
      <h2>Deserts</h2>
      {NewDesserts.map((dessert, index) => (
        <div key={index}>
          <p>{`Title: ${dessert.title}`}</p>
          <p>{`Description: ${dessert.description}`}</p>
          <p>{`Calories: ${dessert.kcal} kcal`}</p>
        </div>
      ))}
    </>
  );
}

export default Deserts;
