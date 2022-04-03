import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoRoxa from '../componentes/img/projeto_logo.roxa.png'


function Navbar() {
    return (
<>

<div id='navbar_shadow' className='containerfluid'>


    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
        <Link className="nav-link nav-item" to="/"> 
            
           
            <img src={logoRoxa} alt="Logo sinais"/>
          

          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                 <Link className="nav-link" to="/Cursos">Cursos</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/Oportunidades">Oportunidades</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Projetos">Projetos</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Tecnologias">Tecnologias de acessibilidade</Link>
              </li>
            </ul>
          
          </div>
        </nav>
      </div>
    </header>
    

</div>

</>
    );
}

export default Navbar;