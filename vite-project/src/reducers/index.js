
import { combineReducers } from 'redux';
import todoReducer from '../Feature/todo/todoSlice';
import counterReducer from './counterReducer'; // Adjust the path based on your actual file structure

const rootReducer = combineReducers({
    todos: todoReducer,  // Use 'todos' as the key for todoReducer
    counter: counterReducer // 'counter' is the key for counterReducer in the root state
});

export default rootReducer;

