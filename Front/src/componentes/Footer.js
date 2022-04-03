import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logoRoxa from '../componentes/img/projeto_logo.roxa.png';
import bgroxo from '../componentes/img/bg_roxo_3.png';




function Footer() {
    return (
<>



<div className='containerfluid'>
  <section id="header_size_pg_curso2" class="slider_section ">
  <div class="slider_bg_box">
    <div class="bg_img_box">
      <img src={bgroxo} alt="bg roxo"/>
    </div>
  </div>
  
  <div id="customCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container ">
          <div class="row">
            <div class="col-md-7 mx-auto">
              <div class="detail-box">
                <h1 id="h1_curso_size">
                 
                </h1>
                <p>
                
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>

</section>
</div>

<footer id="footer" class="section">


<div class="container">

  
  <div class="row">

   
    <div id='footer-logo-box-size' class="col-md-6">
      <div class="footer-logo">
      <Link className="nav-link" to="/">
          <img src={logoRoxa} alt="logo"/>
          </Link>
      </div>
    </div>
   

    
    <div id='footer-nav-box-size' class="col-md-6">
      <ul class="footer-nav">
        <li><Link id='color-link' className="nav-link" to="/">Inicio</Link></li>
        <li><Link id='color-link'  className="nav-link" to="/Cursos">Cursos</Link></li>
        <li><Link id='color-link'  className="nav-link" to="/Oportunidades">Oportunidades</Link></li>
        <li><Link id='color-link'  className="nav-link" to="/Projetos">Projetos</Link></li>
        <li><Link id='color-link'  className="nav-link" to="/Tecnologias">Tecnologias de acessibilidade</Link></li>
      </ul>
    </div>
    

  </div>
 

  
  <div id="bottom-footer" class="row">

    
    <div class="col-md-4 col-md-push-8">
      <ul class="footer-social">
        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a></li>
        <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
        <li><a href="#" class="youtube"><i class="fa fa-youtube"></i></a></li>
        <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
    

    
    <div class="col-md-8 col-md-pull-4">
      <div class="footer-copyright">
        <span>&copy; Copyright 2018. All Rights Reserved. | Projeto Sinais <i class="fa fa-heart-o" aria-hidden="true"></i> by <a id='color-link'  href="https://colorlib.com">RecodePro</a></span>
      </div>
    </div>
   

  </div>
  

</div>


</footer>
</>  



    );
}

export default Footer;