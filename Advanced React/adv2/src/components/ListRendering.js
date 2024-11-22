import React from 'react'

function ListRendering() {
    const legend = [
        {
            id:1,
            name: "Sagar",
            heroName: "unknowUltima",
            Moto: "Never Give up on Your dreams",
        },
        {
            id:2,
            name:"Shraddha",
            heroName:"sagar can do it",
            Moto:"Never Leave Sagar"
        }

    ]
    return (
        <>
            <h1>List Rendering</h1>
            {
            legend.map((item)=>(
                <>
                <div>
                <h1>{item.id}</h1>
                <h2>{item.name}</h2>
                <p>{item.heroName}-{item.Moto}</p>
                </div>
                </>
            ))
            }

        </>
    )
}

export default ListRendering