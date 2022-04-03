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
          através da tecnologia e promover a inclusão, fomentando e ensinando seus alunos a pensar 
          criticamente, assim, possibilitar o ambiente propicio para soluções tecnológicas de impacto social. 

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
						<span id='lugar-de-fala-size' class="lead">As mídias sociais descentralizaram o conhecimento e o poder de fala de um grupo restrito de indivíduos, permitindo que outras vozes pudessem se manifestar, compartilhar suas histórias e vivências através da comunicação digital. 
              Por outro lado, as plataformas digitais acabam reiterando comportamentos de seus usuários e a cultura em que estão inseridos. Vivemos em uma realidade em que mais vozes podem ecoar suas ideias; vozes de grupos que foram calados e silenciados, e que hoje confrontam vozes que antes dominavam todo o conhecimento. Só que nem todo mundo tem a mesma força e visibilidade ainda.
              Daí a importância de entendermos o conceito de lugar de fala, em um mundo que transborda novas narrativas e pensamentos, para compreender na prática, a importância desse conceito na garantia de ambientes de trabalho capazes de responder à pluralidade de pessoas e lugares de fala que compõem as organizações em meio a ambientes cada vez mais voláteis, incertos, complexos e ambíguos (mundo VUCA).</span>
					</div>

					

				</div>
			

				<hr id='hr-shadow' class="section-hr"/>

		
				<div id='size-div-fala' class="row">

					<div class="col-md-6">
						<h3>Palestra: O surdo no mercado de trabalho
                Por: Prof. Rafaela Piekarski
               </h3>
						<p  size-div-fala_p class="lead"> Evento da Comissão de Responsabilidade Social do TRT-PR, com apoio da Uninter.</p>
						<p id='size-div-fala_p'>Possui vasta experiência no ensino de Libras como segunda língua (L2) em diversas esferas. Realiza trabalhos de tradução no campo
               cinematográfico como atriz-tradutora surda (registro vídeo em libras) e tradutora revisora de conteúdos com acessibilidade linguística 
               para Surdos. Atualmente é professora do curso de Letras do Centro Universitário Internacional - Uninter, que é responsável pela disciplina de Libras na instituição..</p>
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
                Capacitação
              </h5>
              <p>
              Aqui temos um repositório com cursos e dicas selecionadas que serão atualizadas 
              constantemente para contribuir com a formação de surdos e não surdos. Entendemos que a 
              integração plena do surdo no 
              mercado de trabalho passa, também, pela capacitação da pessoa não surda.

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
                Informação
              </h5>
              <p>
              Um dos grandes objetivos do projeto é proporcionar um ambiente seguro, 
              simples e atualizado constantemente com informações sobre empregabilidade, 
              projetos programas e políticas públicas de interesse da população surda e PCDs em geral.
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
              Sair da teoria é necessário para promover impacto social. O projeto Sinais tem como objetivo ser um 
              catalizador de oportunidade de emprego, estágio e formações oferecido por empresas parceiras que ter pessoas 
              surdas no seu quadro de funcionários. 
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