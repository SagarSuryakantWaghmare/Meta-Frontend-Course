import React, { useEffect, useState } from 'react'

function FetchData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData.bpi.USD))
            .catch((error) => console.log(error));
            console.log(data)
    }, [])

    return (
        <>
        <div>FetchData</div>
        <h1>Bitcoin Price Index</h1>
        <p>{data.code}</p>
        <p>{data.symbol}</p>
        <p>{data.rate}</p>
        <p>{data.description}</p>
        <p>{data.rate_float}</p>
        </>
    )

}
export default FetchData