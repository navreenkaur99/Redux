// Todos.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Feature/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos.todos); // Accessing todos state correctly
    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            {todos && todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </>
    );
}

export default Todos;



// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { removeTodo } from '../Feature/todo/todoSlice'

// function Todos() {
//     const todos = useSelector(state => state.todos)
//     const dispatch = useDispatch()
//   return (
//     <>
//     <div>Todos</div>
//     { todos && todos.map((todo)=> (
//         <li key ={todo.id}>
//             {todo.text}
//             <button onClick={ () => dispatch(removeTodo(todo.id))}>Delete</button>
//         </li>
        
//     ))}
//     </>
//   )
// }

// export default Todos