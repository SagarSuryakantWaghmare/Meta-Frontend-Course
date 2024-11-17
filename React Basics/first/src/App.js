import React from 'react'
// import Props from './components/Props'
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import TernaryOperator from './components/TernaryOperator';
// import GuessTheNumber from './components/GuessTheNumber';
// import ExpressionsAsProps from './components/ExpressionsAsProps';
// import EmbeddingExpressions from './components/Embedding.js';
import EventHandler from './components/EventHandler'
import ToggleMode from './components/ToggleMode'
import Ultima from './components/Ultima'
import Hooks from './Pages/Hooks';
import Form from './Pages/Form';
import Context from './Pages/Context';
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
     {/* <ExpressionsAsProps/>
      */}
      {/* <EmbeddingExpressions/> */}
      {/* <EventHandler/> */}
      {/* <ToggleMode/> */}
      {/* <Ultima/> */}
      {/* <Hooks/> */}
      {/* <Form/>
       */}
       <Context/>
    </>
  )
}

export default App
