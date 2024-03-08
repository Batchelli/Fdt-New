import React from 'react';
import Modal from 'react-modal';
import styles from './ModalQua.module.css';
import { Link } from 'react-router-dom'
import { IoCloseSharp as Close } from 'react-icons/io5';

Modal.setAppElement('#root');

function ModalQua({ isOpen, onClose, modalType }) {
  const renderModalContent = () => {

    {/*Inicio Modal Treinamentos*/ }
    if (modalType === 'modalQua1') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>[RBLA-I4.0-Conceito] Indústria 4.0 - Conceito, método e aplicação na prática-B</h1>
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
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modalQua2') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>
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
    else if (modalType === 'modalQua3') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>[QM-QM001] Quality at Bosch-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>Este treinamento oferece uma visão geral sobre:</li>
            <li>Qualidade e negócios: significado da qualidade, expectativas do cliente, padrões</li>
            <li>Processo de engenharia de produto (análise de requisitos, análise de riscos, solução sistemática de problemas, gerenciamento de projetos e portas de qualidade)</li>
            <li>aplicação e efeito dos métodos selecionados (teoria e exercício)</li>
          </div>
          <div className={styles.btns}>
          <a href='https://bosch.plateau.com/learning/user/deeplink.do?OWASP_CSRFTOKEN=866Y-KRVV-JUQU-AMN6-BWXY-GVX4-MWO0-15IB&linkId=ITEM_DETAILS&componentID=T001-317&componentTypeID=COURSE&fromSF=Y&revisionDate=1356998400000#/7BEB3B1F8D8E4EFAE05311E6750A2008' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    else if (modalType === 'modalQua4') {
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
    else if (modalType === 'modalQua5') {
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
    else if (modalType === 'modalQua6') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>[QM-FMEA-WBT] FMEA Basics-B</h1>
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
    else if (modalType === 'modalQua7') {
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
    else if (modalType === 'modalQua8') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>[QM-TQ056-WBT] Engineering Change Process-B</h1>
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
    else if (modalType === 'modalQua9') {
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
    else if (modalType === 'modalQua10') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Audioria de Processo</h1>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <br />
          <div className={styles.cont}>
            <li>Acompanhar uma auditoria de processo interna com time de auditores internos de CaP</li>
          </div>
        </div>
      );
    }
    else if (modalType === 'modalQua11') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>1 dia na vida de (Auditor de Qualidade)</h1>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <br />
          <div className={styles.cont}>
            <li>Acompanhar execução de 1 auditoria de produto e 1 auditoria de posto</li>
          </div>
        </div>
      );
    }
    else if (modalType === 'modalQua12') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Conectividade (uso de ferramentas)</h1>
          <h3 className={styles.subtitle}>Conteudo:</h3>
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
    else if (modalType === 'modalQua13') {
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
    else if (modalType === 'modalQua14') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>TQC - Controle de Qualidade Total (Vicente Falconi Campos)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Este livro mostra o estado atual do "TQC japonês" como ensinado hoje pela JUSE-Union of Japonese Scientists and Engineers no Japão. A maneira como o material está disposto foi produto de muitos anos de trabalho junto a várias empresas brasileiras, orientado e acompanhado pelo Sr. Ichiro Miyauchi, da JUSE.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/TQC.jpg" alt="" />
          </div>
        </div>
      );
    }
    else if (modalType === 'modalQua15') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Comunicação não violenta - Técnicas para aprimorar relacionamentos pessoais e profissionais (Marshall Rosenberg)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p> Nesta obra, best-seller no Brasil e no mundo, Marshall Rosenberg explica de maneira revolucionária os valores e princípios da comunicação não violenta, que se baseia em habilidades de linguagem e comunicação que fortalecem nossa capacidade de manter a humanidade, mesmo em condições adversas.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/comunicacao.jpg" alt="imagem do livro comunicação não violenta" />
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

export default ModalQua;
