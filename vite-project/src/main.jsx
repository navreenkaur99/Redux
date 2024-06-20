// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers'; // Import your combined reducer

// import App from './App';

// const store = createStore(rootReducer); // Create Redux store with combined reducer

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/Store'; // Adjust the path based on your actual file structure
import App from './App'; // Adjust the path to your main application component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'
// import { Provider } from 'react-redux'
// import { Store } from './Store/Store.js'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={Store}>
//     <App />
//   </Provider>
// )
