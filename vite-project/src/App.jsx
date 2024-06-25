
import React from 'react'
// import UseRef from './assets/UseRef'
// import UseContext from './Usecontext/UseContext'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import Counter from './Components/Counter'

export default function App() {
  return (
    <div>
      <center>
      <AddTodo/>
      <Todos/>
      <hr></hr>
      <Counter/>
    {/* <UseContext/>
      <UseRef/> */}
      </center>
    </div>
  )
}
