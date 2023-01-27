import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyRouter from './MyRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRouter token="teste23" />
  </React.StrictMode>
);

export default root;

