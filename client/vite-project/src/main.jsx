import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
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
