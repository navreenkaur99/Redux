// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from '../Feature/todo/todoSlice'
// export const Store =   configureStore({
//     reducer :todoReducer
// })
// src/Store/Store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers'; // Import your combined reducer

const store = configureStore({
    reducer: rootReducer
});

export default store;
