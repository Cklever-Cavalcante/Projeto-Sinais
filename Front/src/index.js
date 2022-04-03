import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cursos from './componentes/Cursos.js'
import Oportunidades from './componentes/Oportunidades.js';
import Projetos from './componentes/Projetos';
import Tecnologias from './componentes/Tecnologogias.js';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
  
            
            <Route element ={<App/>} path="/" exact/>
            <Route element ={<Cursos/>} path="/Cursos"/>
            <Route element ={<Oportunidades/>} path="/Oportunidades"/>
            <Route element ={<Projetos/>} path="/Projetos"/>
            <Route element ={<Tecnologias/>} path="/Tecnologias"/>
    
   
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
