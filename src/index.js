import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.css';
import './components/custom.css';
import App from './App';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import ModuleDescription from './components/ModuleDescription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/:moduleId' element={<ModuleDescription />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
