import React from 'react'

const topDeserts = [
    {
      id: 1,
      title: "Gulab Jamun",
      description: "The best sweet dish in the world",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/gulab-jamun-recipe.jpg",
      price: "100",
    },
    {
      id: 2,
      title: "Rasgulla",
      description: "The best sweet dish in the world",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/gulab-jamun-recipe.jpg",
      price: "80",
    },
    {
      id: 3,
      title: "Kaju Katli",
      description: "The best sweet dish in the world",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/gulab-jamun-recipe.jpg",
      price: "120",
    },
    {
      id: 4,
      title: "Jalebi",
      description: "The best sweet dish in the world",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/gulab-jamun-recipe.jpg",
      price: "70",
    }
  
  ]
  function Filter() {
    const PriceMoreThan80=()=>{
        const listItems=topDeserts.filter(item=>item.price>80).map(item=>{
            const itemText=`${item.title}-${item.price}`
            return <li>{itemText}</li>
        })
        return(
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
   
  
    return (
      <>
      <h1>Filter form the top Deserts</h1>
        <PriceMoreThan80/>
      </>
    );
  }

export default Filter