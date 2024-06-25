import React, { useState } from 'react'; // Import React and useState hook
import {useDispatch} from 'react-redux'
import { addTodo } from '../Feature/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState(""); // Define state for input

  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch( addTodo(input))
    setInput('')
    
  };
  return (
    <>    <h1> TO DO LIST</h1>
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
      
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit" // Corrected this line to type="submit"
         >
        Add Todo
      </button>
    </form>
    </>

  );
}

export default AddTodo; // Export AddTodo component
