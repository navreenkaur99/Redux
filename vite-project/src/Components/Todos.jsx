
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Feature/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos.todos); // Accessing todos state correctly
    const dispatch = useDispatch();

    return (
        <>
            <h3>Todos</h3>
            <div className='card'>
                <div className="cardbody">
                              
                                {todos && todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>
            ))}
            </div>

            </div>
        </>
    );
}

export default Todos;


