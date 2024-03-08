import React from 'react';
import Modal from 'react-modal';
import styles from './ModalLi.module.css';
import { Link } from 'react-router-dom'
import { IoCloseSharp as Close } from 'react-icons/io5';



Modal.setAppElement('#root');

function ModalLi({ isOpen, onClose, modalType }) {
  const renderModalContent = () => {

    {/*Inicio Modal Treinamentos*/ }
    if (modalType === 'modal1') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Padrões BPS Working according to Standards (Operadores)</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>Simulação de uma linha de produção (montagem de carros Lego);
              várias rodadas com melhorias passo a passo cada rodada deve ser analisada e discutida com o operador,
              por ex. grandes problemas, priorização de medidas, etc.</li>
            <li>Implementação de fluxo de material definido (FIFO-pista, supermercado).</li>
            <li>Reação e escalonamento em caso de desvios e falhas.</li>
            <li>Definição de função e responsabilidade.</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d2005%26componentTypeID%3dCOURSE%26revisionDate%3d1407234240000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
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
          <h1 className={styles.title}>[RBLA-I4.0-Conceito] Indústria 4.0 - Conceito, metodo e aplicação na prática-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteudo:</h3>
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
          <h1 className={styles.title}>[RBLA-I4.0-Fundamentos] Fundamentos sobre a Industria 4.0-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteudo:</h3>
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
    else if (modalType === 'modal4') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>[BR-PROD-TPMBAS] Conceitos Básicos de TPM-B</h1>

          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>Definição TPM, Histórico TPM, Estrutura Organizacional TPM, TPM Sistemático "Visão geral" - "Como chegamos aqui?".</li>
            <li>Definição Equipamentos/Compromisso TPM/definição Líder TPM/Matriz de Definição Treinamento.</li>
            <li>Definição Automática de Tempo,</li>
            <li>Limpeza Doméstica/5S/Rotulagem/ Eliminação de fonte de sujeira.</li>
            <li>Elaborar cronograma de parada - Elaborar quadro de atividades.</li>
            <li>Sugestões de melhoria: via cartão "kaizen teian" ou FSP.</li>
            <li>Elaborar/atualizar Planos de inspeção.</li>
            <li>limpeza e lubrificação e planos de manutenção preventiva - planos de manutenção preventiva.</li>
            <li>LPP.</li>
            <li>Elaborar/atualizar lista de peças de reposição tanto para MA quanto para MP.</li>
            <li>Confirmação de Processo e fechamento do ciclo inicial TPM.</li>
            <li>Pós-Ciclo.</li>
            <li>Home control, TBO na prática.</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d14423%26componentTypeID%3dCOURSE%26revisionDate%3d1470082560000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
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
          <h1 className={styles.title}>[RBLA-COM-SUC1] Comunicação Dialógica – Habilidades de sucesso-B</h1>
          <h3 className={styles.subtitle}>Dica para as pessoas de contato organizacional nos locais:</h3>
          <p>Desde 2021, este seminário é organizado centralmente pelo BTC para as regiões.
            Caso você queira marcar uma consulta em sua instalação local, entre em contato com o BTC responsável em sua região.</p>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>O que é comunicação e os diferentes tipos</li>
            <li>O problema do mal-entendido</li>
            <li>O poder de observação</li>
            <li>Os 3 tipos de linguagem</li>
            <li>Ouvir não é ouvir</li>
            <li>Ler o óbvio é a habilidade do especialista em boa comunicação</li>
            <li>Diga o que tem em mente sem criar uma situação desagradável</li>
            <li>A sabedoria do "não saber" e o método da readmiração</li>
          </div>
          <div className={styles.btns}>
            <a href='https://performancemanagerrot.successfactors.eu/sf/learning?destUrl=https%3a%2f%2fbosch%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3d28237%26componentTypeID%3dCOURSE%26revisionDate%3d1638446760000%26fromSF%3dY&company=BOSCH' target='_blank'><button>Ir para o treino</button></a>
            <Link to="/forms"><button>Pedir acesso</button></Link>
          </div>
        </div>
      );
    }
    //Fim Modal Treinamentos

    //Inicio Modal Atividades
    else if (modalType === 'modal6') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Atualização de indicadores operacionais da área de atuação</h1>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>Acompanhar  do Líder/Supervisor na coleta e atualização dos indicadores para reunião diária de produção (pentágono, active cockpit)</li>
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
          <h1 className={styles.title}>Ciclos de melhorias TPM</h1>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>Participar de times de projetos de ciclos de melhorias TPM</li>
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
          <h1 className={styles.title}>1 dia na vida de (LT/Sup)</h1>
          <h3 className={styles.subtitle}>Conteudo:</h3>
          <div className={styles.cont}>
            <li>Vivenciar um dia de rotina de uma pessoa que está no papel de líder e supervisor</li>
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
          <h1 className={styles.title}>Conectividade</h1>
          <h3 className={styles.subtitle}>Conteudo:</h3>
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
    else if (modalType === 'modal10') {
      return (
        <div>
          <div className={styles.btnf}>
            <button onClick={onClose}><Close className={styles.icon} /></button>
          </div>
          <h1 className={styles.title}>Comece pelo Porquê - Como grandes líderes inpiram pessoas e equipes a agir (Simon Sinek)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Nesse livro, você verá como pensam, agem e se comunicam os líderes que exercem a maior
            influência, e também descobrirá um modelo a partir do qual as pessoas podem ser inspiradas,
            movimentos podem ser criados e organizações, construídas. E tudo isso começa pelo porquê.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/cpp.jpg" alt="" />
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
          <h1 className={styles.title}>O Monge e o Executivo - Uma história sobre a essencia da liderança (James C. Hunter)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>um livro escrito por James C. Hunter sobre a essência da liderança,
            algumas vezes pelo autor reportada como "liderança servidora ou a verdadeira liderança"
            — uma concepção de liderança que se tem popularizado recentemente em empresas e
            organizações, embora, segundo o relato, exista desde tempos remotos.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/monge.jpg" alt="" />
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
          <h1 className={styles.title}>Como fazer amigos e influenciar pessoas (Dale Carnegie)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p>Como fazer amigos e influenciar pessoas é um livro da autoria do estadunidense Dale
            Carnegie, destinado a desenvolver estratégias comunicativas e de ajuda entre pessoas.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/amigos.jpg" alt="" />
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
          <h1 className={styles.title}>Felicidade dá lucro (Marcio Fernandes)</h1>
          <h3 className={styles.subtitle}>Sinopse:</h3>
          <p> Aliando lições de passagens autobiográficas a ensinamentos que vão na contramão do bom senso, o
            líder mais admirado do país ensina a investir na qualidade do dia a dia de seus
            colaboradores, como chama a equipe que lidera, para aumentar os lucros. Combinando uma
            linguagem acessível e franca com a experiência de ter passado de empacotador de loja a
            presidente executivo de empresa, Márcio criou Felicidade dá lucro, um livro rico em
            ideias e provocador em sua essência.</p>
          <div className={styles.img}>
            <img src="/src/assets/livros/felicidade.jpg" alt="" />
          </div>
        </div>
      );
    }
    else if (modalType === 'modal14') {
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
    else if (modalType === 'modal15') {
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

export default ModalLi;
