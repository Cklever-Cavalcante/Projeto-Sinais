import './Header.css';
import react from 'react';
import bg3png from '../componentes/img/bg_roxo_3.png';


function Header() {
    return (
<>
<div className='containerfluid'>

   

               
<section id="header_size" class="slider_section ">
  <div class="slider_bg_box">
    <div class="bg_img_box">
      <img src={bg3png} alt="bg roxo"/>
    </div>
  </div>
  
  <div id="customCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container ">
          <div class="row">
            <div class="col-md-7 mx-auto">
              <div class="detail-box">
                <h1 id='size-titulo-curso'>
                  Cursos 
               
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
</>
     );
}

export default Header;