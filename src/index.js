import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // ✅ global styles
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // optional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);