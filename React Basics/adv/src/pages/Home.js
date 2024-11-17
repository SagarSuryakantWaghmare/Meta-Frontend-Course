import React from 'react'
import Workdays from '../components/Workdays';
import Weekdays from '../components/Weekdays';
function Home() {
    const day = new Date().getDay();
    return (
        <>
            {(day > 1 && day <= 5) ?
                <Workdays /> :
                <Weekdays />
            }
        </>
    )
}

export default Home