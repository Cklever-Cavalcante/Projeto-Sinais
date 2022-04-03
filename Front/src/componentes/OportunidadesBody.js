import React from 'react';
import eco from '../componentes/img/ecoturismo.png';
import './Oportunidades.css';
import bg3png from '../componentes/img/bg_roxo_3.png';
import oportunidade from '../componentes/img/oportunidade_pcd.png';
import pcdonline from '../componentes/img/pcdonline.png';
import vagas from '../componentes/img/vagas.png';
import egalite from '../componentes/img/egalite.png';
import emprega from '../componentes/img/empregapcd.png';
import especiais from '../componentes/img/especiais.png';
import imgpcd from '../componentes/img/img-pcd.png';


function OportunidadesBody() {
     return (
<>
<div id="about" class="about">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div id='abaout_titulo_size' class="titlepage">
                     <h2 id='abaout_titulo_size'>Conheça 6 sites de emprego para pessoas com deficiência</h2>
                     <span></span>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row flexcss">
               <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div class="about-box">
                     <h3>Qual a realidade brasileira? </h3>
                     <p>A princípio, é importante salientar que no Brasil, desde 2004, a Lei da Inclusão Social obriga empresas que tenham mais de cem funcionários a destinar de 2% a 5% de suas vagas de emprego a pessoas com deficiência.

Além de cumprir a lei, algumas organizações apresentam uma cultura construtiva em questão do respeito às diferenças, priorizando a inclusão de todos. Isso se reflete no aumento do número de vagas para profissionais com deficiência.

Acima de tudo, o que deve ser incentivado dentro do ambiente corporativo, é incitação de interação entre os colaboradores. Da mesma forma que cursos preparatórios para receber os novos colegas e demais formas de tornar a empresa acessível e um lugar amigável para se trabalhar.

A popularização da Internet e a inclusão digital têm oferecido diversas oportunidades para quem busca uma colocação no mercado. Atualmente, há um bom número de sites que oferecem vagas específicas para pessoas com deficiência, com banco de currículos e artigos sobre o assunto.</p>
                     
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                   <div class="about-img">

                     <figure id='pcd_oportunidade'><img id='pcd_oportunidade' src={oportunidade} alt="img"/></figure>
                     
                  </div>
                 
               </div>
            </div>
            
         </div>
      </div>

      <section class="do_section">
    <div class="container">
      <div class="heading_container">
        <h2>
          Confira aqui os 6 sites
        </h2>
        <p>
          
        </p>
      </div>
    </div>

    <div className='container box_margin_oportuniade'>
    <div class="container do_container">
      <div  class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h4>
              Deficiente Online
            </h4>
            <p>
            Considerado um dos maiores sites de emprego para pessoas com deficiência, o Deficiente Online oferece vagas e um banco de currículos específicos para esses profissionais.
            Afinal, estão cadastradas no site mais de mil grandes empresas que anunciam, periodicamente, vagas para pessoas com deficiência em todos os estados brasileiros.
            Os interessados podem acessar o site e fazer o cadastro de seu currículo gratuitamente, além de realizar pesquisas e se candidatar para vagas do seu interesse. O site Deficiente Online ainda é parceiro do portal Vagas PCD.
            </p>
            <a className='btn-box-a' href="https://www.deficienteonline.com.br/">
            <button class="main-button icon-button ">Acesse aqui</button>
           </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box mt-5 mt-md-0">
            <img id='img_pcdonline_size' src={pcdonline} alt="Logo da agencia pcd online"/>
          </div>
        </div>
      </div>
    </div>
    </div>
<br/>
<br/>

    <div className='container box_margin_oportuniade'>  
    <div class="container do_container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img id='img_pcdonline_size' src={vagas} alt=""/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box  mt-5 mt-md-0">
            <h4>
              Vagas
            </h4>
            <p>
            A Vagas.com é uma das mais conhecidas empresas de recrutamento via internet. Com 19 anos de atuação no mercado, o site é líder em seu setor no Brasil e possui uma página específica para anúncios e vagas de emprego para pessoas com deficiência.
            Ao acessar as vagas para pessoas com deficiência, o usuário encontra uma série de oportunidades de emprego anunciadas por empresas de diferentes tamanhos. No site é possível filtrar as vagas por localização, área de atuação e nível do candidato.
            A Vagas.com possui mais de 2.500 empresas cadastradas, além de 12 milhões de currículos disponíveis em seu banco. Além disso, a ferramenta é 100% gratuita para os candidatos a uma oportunidade de emprego.
           </p>
            <a href="https://www.vagas.com.br/">
            <button class="main-button icon-button ">Acesse aqui</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    <br/>
<br/>

    <div className='container box_margin_oportuniade'>
    <div class="container do_container">
      <div  class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h4>
              Egalitê
            </h4>
            <p>
            O Egalitê trabalha para a inclusão do PCD no mercado de trabalho. Diretamente no site, você cria seu perfil e cadastra o seu currículo e procura por vagas.
            Além disso, o Egalitê está produzindo nesse ano de 2020 uma Feira Nacional Online de empregos para pessoas com deficiência, que vai acontecer a partir de 21 de setembro. O evento durará 7 dias, e vai contar com lives e bate-papos.
            Você pode conferir toda a programação do evento através do perfil do instagram do Egalitê.
            </p>
            <a className='btn-box-a' href="https://www.egalite.com.br/">
            <button class="main-button icon-button ">Acesse aqui</button>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box mt-5 mt-md-0">
            <img id='img_pcdonline_size' src={egalite} alt="Logo da agencia pcd online"/>
          </div>
        </div>
      </div>
    </div>
    </div>

    <br/>
<br/>


    <div className='container box_margin_oportuniade'>  
    <div class="container do_container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img id='img_pcdonline_size' src={emprega} alt="logo da agencia emprega pcd"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box  mt-5 mt-md-0">
            <h4>
              Emprega pcd
            </h4>
            <p>
            O site Emprega PCD oferece diversas oportunidades de emprego e de estágio para pessoas com deficiência de todo o país. Além disso, as empresas interessadas podem anunciar suas vagas enviando um e-mail diretamente para vagas@empregapcd.com.br.
            Já os profissionais em busca de recolocação podem cadastrar gratuitamente seu currículo e a partir de então se candidatar diretamente nas vagas anunciadas no site. Há, também, a possibilidade de solicitar o envio das novas vagas por e-mail.</p>          
            <a href="https://www.empregapcd.com.br">
            <button class="main-button icon-button ">Acesse aqui</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    <br/>
<br/>

    <div className='container box_margin_oportuniade'>
    <div class="container do_container">
      <div  class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h4>
              Oportunidades Especiais
            </h4>
            <p>
            O site Oportunidades Especiais é um dos mais importantes projetos de empregabilidade para pessoas com deficiência.
            A plataforma oferece não só vagas exclusivas para esses profissionais, mas também proporciona outros serviços, como o envio de vagas pelo WhatsApp, divulgação de vagas em estandes montados em shoppings de todo o país, entre outras ações.
            Para ter acesso às vagas é preciso cadastrar o currículo e então conhecer as diversas oportunidades oferecidas por grandes empresas. O site divulga também o seu calendário de ações em shoppings.
            Outros serviços que podem ser encontrados no site são: cursos de capacitação para recursos humanos, orientação e suporte on-line, curadoria de currículo, entre outros.</p>
            <a className='btn-box-a' href="https://www.deficienteonline.com.br/">
            <button class="main-button icon-button ">Acesse aqui</button>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box mt-5 mt-md-0">
            <img id='img_pcdonline_size' src={especiais} alt="Logo da agencia oportunidades especiais pcd"/>
          </div>
        </div>
      </div>
    </div>
    </div>

    <br/>
<br/>

    <div className='container box_margin_oportuniade'>  
    <div class="container do_container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img id='img_pcdonline_size' src={imgpcd} alt="logo do site pessoas com deficiência"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box  mt-5 mt-md-0">
            <h4>
              Vagas
            </h4>
            <p>
            A Vagas.com é uma das mais conhecidas empresas de recrutamento via internet. Com 19 anos de atuação no mercado, o site é líder em seu setor no Brasil e possui uma página específica para anúncios e vagas de emprego para pessoas com deficiência.
            Ao acessar as vagas para pessoas com deficiência, o usuário encontra uma série de oportunidades de emprego anunciadas por empresas de diferentes tamanhos. No site é possível filtrar as vagas por localização, área de atuação e nível do candidato.
            A Vagas.com possui mais de 2.500 empresas cadastradas, além de 12 milhões de currículos disponíveis em seu banco. Além disso, a ferramenta é 100% gratuita para os candidatos a uma oportunidade de emprego.
           </p>
            <a href="https://pessoascomdeficiencia.com.br/site/deficientes/deficiente-online/">
            <button class="main-button icon-button ">Acesse aqui</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
 
</section>

<br/>
<br/>

<section>

<div className='containerfluid'>

   

               
<section id="header_size" class="slider_section ">
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
                <h1>
                  Empresas <br/>
               
                </h1>
                <p>
                  Sua empresa gostaria de divulgar uma vaga especifica para surdos? <br/>
                  Entre em contado, cadastre-se que e deixe o Sinais fazer esse ponte.  
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
</section>

<br/>



      

<hr id='hr-shadow' class="section-hr container"/>




<div id="contact" class="section">


<div class="container">

	
	<div class="row">

	
		<div class="col-md-6">
			<div class="contact-form">
				<h4>Cadastro de Empresas</h4>
				<form>
					<input class="input" type="text" name="name" placeholder="Name da Empresa"/>
					<input class="input" type="text" name="name" placeholder="Nome do Responsável pelo contato"/>
					<input class="input" type="text" name="name" placeholder="Telefone"/>
					<input class="input" type="email" name="email" placeholder="Email"/>
					<textarea class="input" name="message" placeholder="Escreva aqui o Motivo do seu Contato"></textarea>
          <button class="main-button icon-button pull-right" type="reset">Limpar Formulário</button> <br/>
					<button class="main-button icon-button pull-right" type='submit'>Cadastrar Empresa</button>
				</form>
			</div>
		</div>
		

	
		<div class="col-md-5 col-md-offset-1">
			<h4>Contatos</h4>
			<ul class="contact-details">
				<li><i class="fa fa-envelope"></i>Sinais@gmail.com</li>
				<li><i class="fa fa-phone"></i>122-547-223-45</li>
				<li><i class="fa fa-map-marker"></i>4476 Clement Street</li>
			</ul>

		
			<div id="contact-map"></div>
			

		</div>
		

	</div>
	

</div>


</div>

<br/>
<br/>

<hr id='hr-shadow' class="section-hr container"/>

<br/>
<br/>

</>
    );

}

export default OportunidadesBody;