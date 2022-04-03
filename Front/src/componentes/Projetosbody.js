import React from 'react';
import eco from '../componentes/img/ecoturismo.png';
import fiocruz from '../componentes/img/fiocruz.png';
import cidadao from '../componentes/img/surdocidadao.png';
import ceara from '../componentes/img/ceara.png';
import pl from '../componentes/img/pl.png';
import pl2 from '../componentes/img/pl2.png';
import './Projetos.css';



function Projetosbody() {
     return (
<>
<br/>
<div className='container box_margin_oportuniade'>
    <div class="container do_container">
      <div  class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h4>
            Projeto Empregabilidade Social da Pessoa Surda
            </h4>
            <p>
            O Projeto Empregabilidade Social da Pessoa Surda tem como objetivo promover a inserção de 
            trabalhadores surdos nas dependências da Fiocruz através de postos de trabalho e processos 
            formativos. Em funcionamento desde 1994, conta hoje com 110 trabalhadores surdos, exercendo
             suas atividades em diversas unidades da instituição. O projeto é coordenado pela Cooperação
             Social da Presidência da Fiocruz, desenvolvido em parceria com a Coordenação-Geral de Gestão
              de Pessoas (Cogepe) e a ONG Centro de Vida Independente (CVI-Rio), e conta com equipe formada
               por socióloga, assistente social, psicóloga e intérprete de Libras.
            </p>
            <a className='btn-box-a' href="https://portal.fiocruz.br/noticia/projeto-empregabilidade-social-da-pessoa-surda">
            <button class="main-button icon-button ">Acesse aqui</button>
           </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box mt-5 mt-md-0">
            <img id='img_pcdonline_size' src={fiocruz} alt="Logo da Fio cruz"/>
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
            <img id='img_pcdonline_size' src={cidadao} alt="Logo projeto surdo cidadão"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box  mt-5 mt-md-0">
            <h4>
             Projeto Surdo Cidadão
            </h4>
            <p>
            O Projeto Surdo Cidadão, desenvolvido pelo Instituto Consultor Social, tem por objetivo 
            apresentar o Mercado de Trabalho para os surdos. Quando pensamos na cidadania do Surdo, 
            devemos focar na Acessibilidade. Porém esse fato está ligado à capacidade da sociedade de 
            entender e reconhecer a pessoa surda. Estes necessitam de uma adaptação bastante objetiva, 
            a LIBRAS – Língua Brasileira de Sinais, para acessarem seus direitos e oportunidades disponíveis na sociedade.
           </p>
            <a href="http://www.surdocidadao.org.br/institucional/projeto/">
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
            Projeto determina que placas de sinalização tragam informações em braile e libras
            </h4>
            <p>
            O Projeto de Lei 256/22 determina que a sinalização de ruas, praças, transporte coletivo e outros logradouros públicos, 
            bem como a de edificações públicas e privadas, deverá trazer inscrições em braile e em Língua Brasileira de Sinais (Libras).
            Em análise na Câmara dos Deputados, a proposta acrescenta a medida à Lei 10.098/00, que estabelece normas gerais e critérios
             básicos para a promoção da acessibilidade das pessoas portadoras de deficiência ou com mobilidade reduzida.
            </p>
            <a className='btn-box-a' href="https://socepel.com.br/?p=7513">
            <button class="main-button icon-button ">Acesse aqui</button>
           </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box mt-5 mt-md-0">
            <img id='img_pcdonline_size' src={pl2} alt="Simbolo do poder legislativo"/>
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
            <img id='img_pcdonline_size' src={ceara} alt="Logo da universidade federal do ceara"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box  mt-5 mt-md-0">
            <h4>
            Projeto de Extensão: Georreferenciamento dos Surdos do Ceará
            </h4>
            <p>
            A Comunidade Surda do Ceará tem poucas opções de lugares que possam atendê-la a contento, 
            no que se refere a uma comunicação efetiva na Língua Brasileira de Sinais (Libras). É, então,
             interessante que se conheça o número de surdos residentes em cada bairro, tanto de Fortaleza como 
             no Ceará como um todo, pois assim será possível sensibilizar os trabalhadores/proprietários de estabelecimentos
              comerciais e de unidades de pronto atendimento médico a aprenderem a Libras. Podem se sentir mais animados a uma iniciativa
              assim se conhecerem os integrantes da Comunidade Surda que venham a atender. Também poderão ser estimulados por meio de um marketing 
              mais sensibilizador, quando puderem espalhar no entorno que fornecem um serviço especial à Comunidade Surda, com trabalhadores treinados para melhor servir os surdos.
           </p>
            <a href="https://clubedelibras.ufc.br/pt/geosurdosce/">
            <button class="main-button icon-button ">Acesse aqui</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    <br/>
    <br/>

</>
    );

}

export default Projetosbody;