import React from 'react';
import rio from '../componentes/img/Rio.png';
import recode from '../componentes/img/recode.png';
import oportunidade from '../componentes/img/oportunidade.jpg';
import capacitacao from '../componentes/img/capacitacao.jpg';
import informacao from '../componentes/img/informacao.jpg';
import bg3png from '../componentes/img/bg_roxo_3.png';
import bg1png from '../componentes/img/bgpng_roxo.png';
import logoRoxa from '../componentes/img/projeto_logo.roxa.png';
import { Link } from 'react-router-dom';

import './Body.css';



function Home() {
    return (

       <div className='containerfluid'>

   

               
    <section class="slider_section ">
      <div class="slider_bg_box">
        <div class="bg_img_box">
          <img src={bg3png} alt=""/>
        </div>
      </div>
      
      <div id="customCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 mx-auto">
                  <div class="detail-box">
                    <h1 id='size-titulo-index'>
                      Bem vindo ao <br/>
                      Sinais
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
   


<section id='about_padding' class="about_section layout_padding ">
<div class="container">
  <div id='margin-botton-about' class="row">
    <div class="col-md-6">
      <div class="img-box">
        <img src={logoRoxa} alt=""/>
      </div>
    </div>
    <div class="col-md-6">
      <div class="detail-box">
        <div class="heading_container">
          <h2>
            Quem somos?
          </h2>
        </div>
        <p>
       
        Somos parte do projeto Recode Pro. A Recode tem como principal objetivo, transformar vidas
          atrav??s da tecnologia e promover a inclus??o, fomentando e ensinando seus alunos a pensar 
          criticamente, assim, possibilitar o ambiente propicio para solu????es tecnol??gicas de impacto social. 

        </p>
        <a href="https://recodepro.org.br/">
          Saiba mais
        </a>
      </div>
    </div>
  </div>
</div>
</section>

<hr id='hr-shadow'  class="section-hr container"/>

<section>
<div class="container">

			
				<div class="row">
					<div id='margin-lugar-fala' class="section-header text-center">
						<h2 id='lugar-de-fala-size-h2'>Lugar de Fala</h2>
						<span id='lugar-de-fala-size' class="lead">As m??dias sociais descentralizaram o conhecimento e o poder de fala de um grupo restrito de indiv??duos, permitindo que outras vozes pudessem se manifestar, compartilhar suas hist??rias e viv??ncias atrav??s da comunica????o digital. 
              Por outro lado, as plataformas digitais acabam reiterando comportamentos de seus usu??rios e a cultura em que est??o inseridos. Vivemos em uma realidade em que mais vozes podem ecoar suas ideias; vozes de grupos que foram calados e silenciados, e que hoje confrontam vozes que antes dominavam todo o conhecimento. S?? que nem todo mundo tem a mesma for??a e visibilidade ainda.
              Da?? a import??ncia de entendermos o conceito de lugar de fala, em um mundo que transborda novas narrativas e pensamentos, para compreender na pr??tica, a import??ncia desse conceito na garantia de ambientes de trabalho capazes de responder ?? pluralidade de pessoas e lugares de fala que comp??em as organiza????es em meio a ambientes cada vez mais vol??teis, incertos, complexos e amb??guos (mundo VUCA).</span>
					</div>

					

				</div>
			

				<hr id='hr-shadow' class="section-hr"/>

		
				<div id='size-div-fala' class="row">

					<div class="col-md-6">
						<h3>Palestra: O surdo no mercado de trabalho
                Por: Prof. Rafaela Piekarski
               </h3>
						<p  size-div-fala_p class="lead"> Evento da Comiss??o de Responsabilidade Social do TRT-PR, com apoio da Uninter.</p>
						<p id='size-div-fala_p'>Possui vasta experi??ncia no ensino de Libras como segunda l??ngua (L2) em diversas esferas. Realiza trabalhos de tradu????o no campo
               cinematogr??fico como atriz-tradutora surda (registro v??deo em libras) e tradutora revisora de conte??dos com acessibilidade lingu??stica 
               para Surdos. Atualmente ?? professora do curso de Letras do Centro Universit??rio Internacional - Uninter, que ?? respons??vel pela disciplina de Libras na institui????o..</p>
					</div>

					<div class="col-md-5 col-md-offset-1">
					<iframe id='shadow-video' width="560" height="315" src="https://www.youtube.com/embed/8TDUHNHaiVg" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>

				</div>
				

			</div>
			

		

    </section>



<section id='shadow-servi' class="service_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center ">
        <h2 id='border-botton-roxo' class="">
          O que Oferecemos?
        </h2>
        <p class="col-lg-8 px-0">
      
        </p>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box ">
            <div class="img-box">
              <img src={capacitacao} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Capacita????o
              </h5>
              <p>
              Aqui temos um reposit??rio com cursos e dicas selecionadas que ser??o atualizadas 
              constantemente para contribuir com a forma????o de surdos e n??o surdos. Entendemos que a 
              integra????o plena do surdo no 
              mercado de trabalho passa, tamb??m, pela capacita????o da pessoa n??o surda.

              </p>
              <Link id='color-link'  className="nav-link" to="/Cursos">
                veja <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box ">
            <div class="img-box">
              <img src={informacao} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Informa????o
              </h5>
              <p>
              Um dos grandes objetivos do projeto ?? proporcionar um ambiente seguro, 
              simples e atualizado constantemente com informa????es sobre empregabilidade, 
              projetos programas e pol??ticas p??blicas de interesse da popula????o surda e PCDs em geral.
              <br/>
              
              </p>
              <Link id='color-link'  className="nav-link" to="/Projetos">
                veja <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box ">
            <div class="img-box">
              <img src={oportunidade} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Oportunidade
              </h5>
              <p>
              Sair da teoria ?? necess??rio para promover impacto social. O projeto Sinais tem como objetivo ser um 
              catalizador de oportunidade de emprego, est??gio e forma????es oferecido por empresas parceiras que ter pessoas 
              surdas no seu quadro de funcion??rios. 
              </p>
              
              <Link id='color-link'  className="nav-link" to="/Oportunidades">
                veja <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  </section>


</div>

       
);

}

export default Home;