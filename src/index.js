import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='hi' id='hyd'>Calculadora</h1>
    <Calculator />
  </div> 
);

