import React from 'react';
import './Tecnologias.css';
import hand from '../componentes/img/handtalk.png';
import giulia from '../componentes/img/giulia2.png';
import movie from '../componentes/img/movie.png';
import sound from '../componentes/img/sound.png';



function Tecnologiasbody() {
    return (

<div className="containerfluid">

   

<div class="packages">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage text_align_center ">
                     <h2></h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class=" col-md-6">
                  <div id="ho_img" class="packages_box" data-aos="fade-right" >
                     <figure id="rioimg"><img src={hand} alt="Hand talk"/></figure>
                     <div class="tuscany">
                        <div class="tusc text_align_left">
                           <div class="italy">
                              <h3>Hand Talk</h3>
                        
                           </div>
                         
                        </div>
                        <p>O Hand Talk é um aplicativo gratuito para celulares Android e iPhone (iOS) que permite traduzir textos em Libras (Língua Brasileira de Sinais).
							 A ferramenta usa um avatar digital, interpretado pelo personagem Hugo, para desenvolver os gestos e facilitar a comunicação com pessoas surdas
							  ou com dificuldade auditiva. O aplicativo Hand Talk já teve mais de 1,5 milhão de downloads e coleciona prêmios e reconhecimentos. A startup criada 
							  em 2012 pelo publicitário Ronaldo Tenório, em parceria com Carlos Wanderlan (analista de sistemas) e Thadeu Luz (arquiteto especialista em 3D), combina
							  inovação tecnológica com impacto social para proporcionar acessibilidade digital em Libras para milhões de surdos.</p>
                        <div class="tusc">
                        <a href="https://www.handtalk.me/br/">
            			<button class="main-button icon-button ">Saiba mais</button>
           				 </a>
                        </div>
                     </div>
                  </div>
               </div>


               <div class=" col-md-6">
                  <div id="ho_img" class="packages_box" data-aos="fade-left">
                     <figure id='img-giulia-size'><img src={giulia} alt="Aplicativo Giulia"/></figure>
                     <div class="tuscany">
                        <div class="tusc text_align_left">
                           <div class="italy">
                              <h3>Giulia</h3>
                             
                           </div>
                          
                        </div>
                        <p>
						Tirar dúvidas no setor de Recursos Humanos de uma empresa ou perguntar sobre as formas 
						de pagamento em uma loja são práticas banais em nosso dia a dia. Mas você já parou para
						 refletir como estas pequenas ações afetam a vida dos mais de nove milhões de deficientes 
						 auditivos do país? Pensando nisso, o professor da Faculdade de Tecnologia da Universidade 
						 Federal do Amazonas (Ufam), Manuel Cardoso, teve a iniciativa de mapear as dificuldades desta 
						 forma de comunicação e com uma equipe de engenheiros, designers e desenvolvedores, criou o aplicativo 
						 Giulia, plataforma responsável por tornar uma conversa entre surdos e ouvintes fácil e instantânea.
						</p>
						
                        <div class="tusc">
						<a href="https://play.google.com/store/apps/details?id=giulia.com.br.giulia.play&hl=pt_BR&gl=US">
            			<button class="main-button icon-button ">Saiba mais</button>
           				 </a>
                        
                        </div>
                     </div>
                  </div>
               </div>
               <div class=" col-md-6">
                  <div id="ho_img" class="packages_box" data-aos="fade-right" >
                     <figure><img src={movie} alt="Logo do app Movie Reading"/></figure>
                     <div class="tuscany">
                        <div class="tusc text_align_left">
                           <div class="italy">
                              <h3>Movie Reading</h3>
                              
                           </div>
                          
                        </div>
                        <p>
						É um aplicativo para smartphones e tablets, criado para proporcionar acessibilidade 
						completa nas Salas de Cinema, Videos On Demand (Netflix, Itunes, outras), Home Video 
						(DVD e Blu-ray) e também na transmissão de TV aberta ou por assinatura, disponibilizando 
						os recursos da Audiodescrição, Legendas e LIBRAS - Língua Brasileira de Sinais, para um novo
						 público de milhões de pessoas com algum tipo de deficiência no Brasil.
						Uma excelente ferramenta de tecnologia assistiva, que funciona para qualquer tipo de plataforma 
						de exibição de cinema e conteúdos audiovisuais e ainda soma muitas vantagens! O aplicativo faz a sincronia por meio de uma avançada tecnologia de reconhecimento de áudio. Não é necessário para as salas de exibição nenhum investimento em equipamentos específicos ou rede Wi-FI.
						Com esse diferencial, o MovieReading também possibilita versões acessíveis para Home Vídeo (DVD e Blu-ray) e Videos On Demand (VOD).
						</p>
                        <div class="tusc">
                        <a href="https://www.moviereadingbrasil.com.br/">
            			<button class="main-button icon-button ">Saiba mais</button>
           				 </a>
                        
                        </div>
                     </div>
                  </div>
               </div>
               <div class=" col-md-6">
                  <div id="ho_img" class="packages_box" data-aos="fade-left">
                     <figure><img src={sound} alt="Aplicativo Aplificador de som"/></figure>
                     <div class="tuscany">
                        <div class="tusc text_align_left">
                           <div class="italy">
                              <h3>Amplicador de Som</h3>
                             
                           </div>
                          
                        </div>
                        <p> 
						Para usuários do Android com deficiência auditiva, o Google tem alguns truques sérios na manga por meio do Amplificador de Som Android.
						Sound Amplifier é um app que melhora o áudio do microfone de seu dispositivo Android ao usar fones de ouvido. 
						Este aplicativo amplifica os sons baixos, te permitindo desfrutar de ligações mais naturais (mesmo em ambientes barulhentos).
						Além disso, também é possível personalizar sua experiência a partir do menu de opções. Lá dá para ajustar tanto o volume quanto 
						a redução de ruído no lado direito ou esquerdo do fone de ouvido, independentemente.
						Sound Amplifier é um app do Google, e bem útil quando se trata de pessoas com dificuldades auditivas. Graças a este aplicativo, 
						os usuários podem ter conversas telefônicas mais confortáveis quando estiverem usando fones de ouvido em seus dispositivos Android.
						</p>
						<br/>
                        <div class="tusc">
                         <a href="https://play.google.com/store/apps/details?id=com.google.android.accessibility.soundamplifier&hl=pt_BR&gl=US">
            			<button class="main-button icon-button ">Saiba mais</button>
           				 </a>
                        
                        </div>
                     </div>
                  </div>
               </div>
             
            </div>
         </div>
      </div>

</div>

 
  
    );
}

export default Tecnologiasbody;