import './Header.css';
import react from 'react';
import bg3png from '../componentes/img/bg_roxo_3.png';
import sinaiscurso from '../componentes/img/imgsinais.png';
import sinaisalfabeto from '../componentes/img/imgsinais2.png';


function Barra_footer_oportunidades() {
    return (
<>
<div className='containerfluid'>

   

               
<section id="header_size" class="slider_section ">
  <div id='size-barra-cursos' class="slider_bg_box">
    <div id='size-barra-cursos' class="bg_img_box">
      <img src={sinaiscurso} alt="bg roxo"/>
    </div>
  </div>
  
  <div id="customCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container ">
          <div class="row">
            <div class="col-md-7 mx-auto">
              <div class="detail-box">
                <h1>
               </h1>
                <p>
                    "Se o lugar não permitir o acesso a todas as pessoas, esse lugar é deficiente."
                </p>
                <span>Thaís Frota</span>
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

export default Barra_footer_oportunidades;