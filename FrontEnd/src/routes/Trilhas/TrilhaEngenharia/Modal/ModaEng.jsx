import React from 'react';
import Modal from 'react-modal';
import styles from './ModalEng.module.css';
import { Link, useNavigate} from 'react-router-dom'
import { IoCloseSharp as Close } from 'react-icons/io5';



Modal.setAppElement('#root');

function ModalEng({ isOpen, onClose, modalType }) {

  const navigate = useNavigate();

  const Acesso = () => {
    const edv = "valorDoEdv";  // Substitua pelo valor real de edv

    // Navegue para o componente Forms com o estado contendo edv
    navigate('/forms', { state: { edvUser: edv } });
  };
  const renderModalContent = () => {

    {/*Inicio Modal Treinamentos*/ }
    if (modalType === 'modal1') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Programa de capacitação i4.0[RBLA-I4.0-Conceito] Indústria 4.0 - Conceito, metodo e aplicação na prática-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
            <li>História das Revoluções Industriais e seus impactos na sociedade</li>
            <li>Internet das Coisas</li>
            <li>Computação em nuvem; - Análise de Big Data</li>
            <li>Inteligência artificial</li>
            <li>Robótica Avançada</li>
            <li>Fabricação Aditiva</li>
            <li>Integração de sistemas; - Segurança Digital</li>
            <li>Cases de transformação digital e I4.0 em produtos, manufatura e logística na fábrica da Bosch Campinas.</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d27231%26componentTypeID%3dCOURSE%26revisionDate%3d1623333180000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms/"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal2') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Programa de capacitação i4.0
            [RBLA-I4.0-Fundamentos] Fundamentos sobre a Industria 4.0-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
            <li>História das Revoluções Industriais e seus impactos na sociedade.</li>
            <li>Internet das Coisas.</li>
            <li>Computação em nuvem - Análise de Big Data.</li>
            <li>Inteligência artificial.</li>
            <li>Robótica Avançada.</li>
            <li>Manufatura Aditiva.</li>
            <li>Realidade Aumentada - Simulação.</li>
            <li>Integração de sistemas - Segurança Digital.</li>
            <li>Casos da transformação digital e I4.0 em produtos, manufatura e logística na fábrica da Bosch Campinas.</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d27231%26componentTypeID%3dCOURSE%26revisionDate%3d1623333180000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal3') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>TPM
            [BR-PROD-TPMBAS] Conceitos Básicos de TPM-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
           <li>Aqui vai ser adquirido os seguintes conhecimentos:</li>
           <li>Definição TPM</li>       
           <li>Histórico TPM</li>
           <li>Estrutura Organizacional TPM</li>
           <li>TPM Sistemático "Visão geral" - "Como chegamos aqui?"</li>  
           <li>Definição Equipamentos/Compromisso TPM/definição Líder TPM/Matriz de Definição Treinamento</li>
           <li> Definição Automática de Tempo, Limpeza Doméstica/5S/Rotulagem/ Eliminação de fonte de sujeira</li>
           <li>Elaborar cronograma de parada - Elaborar quadro de atividades</li>
           <li>Sugestões de melhoria: via cartão "kaizen teian" ou FSP</li>
           <li>Elaborar/atualizar Planos de inspeção</li>
           <li>Limpeza e lubrificação e planos de manutenção preventiva - planos de manutenção preventiva</li>
           <li>LPP</li>
           <li>Elaborar/atualizar lista de peças de reposição tanto para MA quanto para MP</li>
           <li>Confirmação de Processo e fechamento do ciclo inicial TPM</li>
           <li>Pós-Ciclo, Home control</li>
           <li>TBO na prática</li>
          </div>
          <div className={styles.btns}>
            <a href=' https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d14423%26componentTypeID%3dCOURSE%26revisionDate%3d1470082560000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal4') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Ferramentas de Qualidade: 8D, FSP
            [QM-8D-WBT] 8 D: A problem Solving Method-B</h1>
            <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
            <li>8D é um método para resolver problemas ou defeitos em um produto ou processo em oito etapas, também chamadas de disciplinas.</li>
            <li>Este curso fornecerá uma visão geral das oito etapas do método 8D. O curso também explicará como o método 8D é usado na Bosch.</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d2402%26componentTypeID%3dWBT%26revisionDate%3d1410857820000%26fromSF%3dY&company=BOSCH ' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal5') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Ferramentas de Qualidade: 14 Quality Basics
            [QM-QBasics-B-WBT] Q-Basics for the Value Stream-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
          <p>Este curso é sobre os “14 Q-Basics for the Value Stream”.
                            Ele foi projetado como uma atividade baseada em cenários. São descritos cenários referentes à aplicação/implementação do Q-Basics.
                            Serão feitas perguntas de múltipla escolha que devem ser respondidas por você.
                            Os cenários do curso permitirão que você tome conhecimento dos descuidos que comumente ocorrem nas usinas.
                            Ele também irá educá-lo sobre as ações corretas a serem tomadas para evitar riscos e falhas.</p>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d19119%26componentTypeID%3dWBT%26revisionDate%3d1508239200000%26fromSF%3dY&company=BOSCH ' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal6') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Ferramentas de Qualidade: FMEA [QM-FMEA-WBT] FMEA Basics-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>Este WBT fornece uma introdução às sete etapas para a criação de um FMEA:</li>
            <li>Planejamento e Preparação</li>
            <li>Análise estrutural</li>
            <li>Análise funcional</li>
            <li>Analises falhas</li>
            <li>Análise de risco</li>
            <li>Otimização</li>
            <li>Documentação de resultados</li>
          </div>
          <div className={styles.btns}>
          <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dP001%2d004%26componentTypeID%3dWBT%26revisionDate%3d1650448800000%26fromSF%3dY&company=BOSCH ' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal7') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Ferramentas de Qualidade: Plano de Controle [QM-CP-WBT] Control Plan – An Overview-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
          <li>Definição de “Plano de Controle” (CP)</li>
                        <li>Elementos do CP (folha de rosto, planilha)</li>
                        <li>Etapas do processo, que requerem um controle do processo</li>
                        <li>Fases de aplicação do CP (Protótipo, Produção)</li>
                        <li>Funções e responsabilidades dentro do CP (RASIC)</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d15039%26componentTypeID%3dWBT%26revisionDate%3d1473677940000%26fromSF%3dY&company=BOSCH ' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal8') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Ferramentas de Qualidade: Processos de Modificação
[QM-TQ056-WBT] Engineering Change Process-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
          <p>O WBT fornece uma visão geral do Processo de Mudança de Engenharia na Bosch. Com isso, será explicado detalhadamente o Processo de Mudança de Engenharia padronizado na Bosch em suas fases, bem como o CDQ0404.</p>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dP001%2d005%26componentTypeID%3dWBT%26revisionDate%3d1293840000000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal9') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>[RBLA-COM-PITCH] How to be understood with impactful presentations-A</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <div className={styles.cont}>
          <li>O poder de uma história: emoções versus dados</li>
                        <li>Os segredos de uma apresentação impactante</li>
                        <li>A apresentação muda dependendo do público</li>
                        <li>O poder da masterline e do roteiro bem planejado</li>
                        <li>Impacto: descubra como fazer seu corpo falar a mesma língua que sua boca</li>
                        <li>Seja um maestro: comande o tom de voz e as pausas</li>
                        <li>Descubra e transforme seus vícios e defeitos de apresentação</li>
                        <li>Encurtar a distância entre o planejado e o realizado</li>
                        <li>Simulação prática com feedback construtivo</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d28276%26componentTypeID%3dCOURSE%26revisionDate%3d1638823860000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    //Fim Modal Treinamentos

    //Inicio Modal Atividades
    else if (modalType === 'modal10') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>PGL</h1>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <br />
          <div className={styles.cont}>
            <li>Acompanhar um desenvolvimento de projeto para a manufatura</li>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal11') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Idioma</h1>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <br />
          <div className={styles.cont}>
            <li>Participar como ouvinte de uma reunião do IPN ou outra no idioma inglês</li>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal12') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>1 dia na vida de (Plan/Eng)</h1>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <br />
          <div className={styles.cont}>
            <li>Vivenciar um dia de rotina de uma pessoa que está no papel de Planejador / Engenheiro</li>
          </div>
        </div>
      );
    }
    else if (modalType === 'modal13') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Conectividade</h1>
          <h3 className={styles.subtitle}>Conteúdo:</h3>
          <br />
          <div className={styles.cont}>
            <ul className={styles.links}>
              <a href="https://teamsdemo.office.com/#/0/1" target="_blank">
                <li>Microsoft Teams</li>
              </a>
              <a href="https://connect.bosch.com/wikis/home?lang=pt-br#!/wiki/W28a4d914c7f7_491a_9502_8a0b6dbb3c17/page/Which%20Word%20Training%20to%20choose" target="_blank">
                <li>Microsoft Word</li>
              </a>
              <a href="https://connect.bosch.com/wikis/home?lang=pt-br#!/wiki/W28a4d914c7f7_491a_9502_8a0b6dbb3c17/page/Which%20Outlook%20%26%20FindTime%20training%20to%20choose" target="_blank">
                <li>Microsoft Outlook</li>
              </a>
              <a href="https://connect.bosch.com/wikis/home?lang=pt-br#!/wiki/W28a4d914c7f7_491a_9502_8a0b6dbb3c17/page/Which%20PowerPoint%20training%20to%20choose" target="_blank">
                <li>Microsoft Power Point</li>
              </a>
            </ul>
          </div>
        </div>
      );
    }
    //Fim Modal Atividades

    //Inicio Modal Leitura
    else if (modalType === 'modal14') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Comece pelo mais difícil: 21 ótimas maneiras de superar a preguiça e se tornar altamente eficiente e produtivo (Brian Tracy)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Nesse livro, você conhecerá estratégias para não deixar que a tecnologia domine sua vida, os elementos vitais para a formação de bons hábitos – decisão, disciplina e determinação – e lições práticas para deixar de ser acomodado, definir prioridades e se tornar altamente produtivo.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/comecePeloMaisDificil.jpg" alt="" />
          </div>
        </div>
      );
    }
    else if (modalType === 'modal15') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Essencialismo: A disciplinada busca por menos (Greg McKeown)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Neste livro, Greg McKeown mostra que, para equilibrar trabalho e vida pessoal, não basta recusar solicitações aleatoriamente: é preciso eliminar o que não é essencial e se livrar de desperdícios de tempo. Devemos aprender a reduzir, simplificar e manter o foco em nossos objetivos.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/essencialismo.jpg" alt="" />
          </div>
        </div>
      );
    }
    else if (modalType === 'modal16') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Motivação 3.0 - Drive: A surpreendente verdade sobre o que realmente nos motiva (Daniel H. Pink)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Publicado em 37 línguas e um dos livros mais vendidos e influentes dos últimos tempos, Motivação 3.0 mudou a compreensão das pessoas a respeito do que realmente nos move.   

Muita gente acredita que a melhor maneira de motivar alguém é oferecer algum tipo de recompensa, como prêmios, promoções ou dinheiro.

Esta visão está errada, diz Daniel Pink. Segundo ele, o segredo da alta performance e da satisfação está ligado à necessidade essencialmente humana de aprender e criar coisas novas, ter autonomia e melhorar o mundo para nós e para os outros.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/motivacao.jpg" alt="" />
          </div>
        </div>
      );
    }
    else if (modalType === 'modal17') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Comunicação não violenta - Técnicas para aprimorar relacionamentos pessoais e profissionais (Marshall Rosenberg)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p> Nesta obra, best-seller no Brasil e no mundo, Marshall Rosenberg explica de maneira revolucionária os valores e princípios da comunicação não violenta, que se baseia em habilidades de linguagem e comunicação que fortalecem nossa capacidade de manter a humanidade, mesmo em condições adversas.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/comunicacao.jpg" alt="" />
          </div>
        </div>
      );
    }
    else if (modalType === 'modal18') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Qual é a tua obra? Inquietações propositivas sobre gestão, liderança e ética (Mario Sergio Cortella)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Depois do sucesso de "Não Nascemos Prontos" e "Não espere pelo
            epitáfio" Mario Sergio Cortella publica, também pela Editora Vozes, um texto envolvente
            sobre as inquietações do mundo corporativo. Neste livro o autor desmistifica conceitos e
            pré-conceitos, e define o líder espiritualizado, como aquele que reconhece a própria
            obra e é capaz de edificá-la, buscando incessantemente o significado das coisas.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/obra.jpg" alt="" />
          </div>
        </div>
      );
    }
    else if (modalType === 'modal19') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Comunicação não violenta - Técnicas para aprimorar relacionamentos pessoais e profissionais (Marshall Rosenberg)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Manual prático e didático que apresenta metodologia criada pelo autor, voltada para
            aprimorar os relacionamentos interpessoais e diminuir a violência no mundo. Aplicável em
            centenas de situações que exigem clareza na comunicação: em fábricas, escolas,
            comunidades carentes e até em graves conflitos políticos.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/comunicacao.jpg" alt="" />
          </div>
        </div>
      );
    }
    //Fim Modal Leitura

    return null;
  };

  return (
    <div className={styles.container}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        className={styles.modals}
        style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' } }}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default ModalEng;
