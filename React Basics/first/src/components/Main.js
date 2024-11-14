import React from 'react'

function Main() {
  const mainStyle={
    backgroundColor: 'orange',
    fontWeight: 'bold',
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'center',
    padding: '1.5rem 0'
  }
  return (
    <div className='bg-orange-400 font-bold text-2xl flex justify-center py-6 '>
      <h1 style={mainStyle}>This is the main bar</h1>
    </div>
  )
}

export default Main
