import React from 'react'
// import Props from './components/Props'
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import TernaryOperator from './components/TernaryOperator';
import GuessTheNumber from './components/GuessTheNumber';
import ExpressionsAsProps from './components/ExpressionsAsProps';
function App() {
  let name = 'React';
  return (
    <>
    <span className='text-2xl flex font-semibold  justify-center'>{name}</span>
    {/* <Props name="Sagar" aim="Full Stack Developer" thought="Never give up" mindset="Hardwork is the key to success"/> */}
    {/* <Header name="Sagar" domain="Full Stack Developer"/> */}
    {/* <TernaryOperator/>
    <Main/>
    <Sidebar/> */}
    {/* <GuessTheNumber/>
     */}
     <ExpressionsAsProps/>
    </>
  )
}

export default App
