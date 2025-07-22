import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </Provider>
  </React.StrictMode>
)


// import { Provider } from 'react-redux';
// import store from './store/store.js';

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //     {/* <Provider store={store}>
// //       <App />
// //     </Provider>, */}
// //   </StrictMode>
