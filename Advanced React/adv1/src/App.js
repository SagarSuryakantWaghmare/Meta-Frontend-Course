import React from 'react'
// import ListRendering from './components/ListRendering'
// import FilterComponent from './components/Filter'
// import Todo from './components/Todo'
// import Deserts from './components/Deserts'
// import Controlled from './components/Controlled'
// import Form from './components/Form'
// import form from './components/FeedBackForm'
// import FeedBackForm from './components/FeedBackForm'
// import RegistationForm from './components/RegistationForm'
import Blog from './components/Blog'
import { UserProvider } from './components/UserContext'
function App() {
  return (
    <>
      <UserProvider>
        <h1>App</h1>
        {/* <ListRendering/> */}
        {/* <FilterComponent/> */}
        {/* <Todo/> */}
        {/* <Deserts/> */}
        {/* <Controlled/> */}
        {/* <Form/> */}
        {/* <FeedBackForm/> */}
        {/* <RegistationForm/>
       */}
        <Blog />
      </UserProvider>
    </>
  )
}

export default App