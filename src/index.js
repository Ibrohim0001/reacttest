import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const element = <h1>hello world</h1>
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);


