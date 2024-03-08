
import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './TrilhaQua.module.css';
import ModalLi from '../Modal/ModalQua';

const TrilhaQua = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    const openModal = (type) => {
        setIsModalOpen(true);
        setModalType(type);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalType('');
    };

    return (
        <div>
            <VerticalTimeline className={styles.trilhaImg}>
                <VerticalTimelineElement
                    contentStyle={{ background: '#9E2896', color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #9E2896' }}
                    iconStyle={{ background: '#9E2896', color: '#fff' }}
                    className={styles.cont}
                >
                    <h3 className={styles.titles}>Palestra</h3>
                    <p>Introdução ao BPS (Princípios e Elementos)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#007BC0", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #007BC0' }}
                    iconStyle={{ background: "#007BC0", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Treinamentos</h3>
                    <p className={styles.links} onClick={() => openModal('modalQua1')}>[RBLA-I4.0-Conceito] Indústria 4.0 - Conceito, metodo e aplicação na prática-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua2')}>[RBLA-I4.0-Fundamentos] Fundamentos sobre a Industria 4.0-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua3')}>[QM-QM001] Quality at Bosch-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua4')}>[QM-8D-WBT] 8 D: A problem Solving Method-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua5')}>[QM-QBasics-B-WBT] Q-Basics for the Value Stream-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua6')}>[QM-FMEA-WBT] FMEA Basics-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua7')}>[QM-CP-WBT] Control Plan – An Overview-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua8')}>[QM-TQ056-WBT] Engineering Change Process-B</p>
                    <p className={styles.links} onClick={() => openModal('modalQua9')}>[RBLA-COM-PITCH] How to be understood with impactful presentations-A</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#18837E", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #18837E' }}
                    iconStyle={{ background: "#18837E", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Mentoria</h3>
                    <p className={styles.links} onClick={() => openModal('modalQua')}>Mentoria de carreira com TPRs</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#00884A", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #00884A' }}
                    iconStyle={{ background: "#00884A", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Atividades</h3>
                    <p className={styles.links} onClick={() => openModal('modalQua10')}>Auditoria de Processo</p>
                    <p className={styles.links} onClick={() => openModal('modalQua11')}>1 dia na vida de (Auditor de Qualidade)</p>
                    <p className={styles.links} onClick={() => openModal('modalQua12')}>Conectividade (uso de ferramentas)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#9E2896", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #9E2896' }}
                    iconStyle={{ background: "#9E2896", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Visitas</h3>
                    <p>Conhecer as principais áreas suportes que tem interface direta com a manufatura</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#007BC0", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #007BC0' }}
                    iconStyle={{ background: "#007BC0", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Conversas</h3>
                    <p>Preparação para entrevistas</p>
                    <p>RODA DE CONVERSA: Inteligência e/ou saúde Emocional</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#18837E", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #18837E' }}
                    iconStyle={{ background: "#18837E", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Leituras</h3>
                    <p className={styles.links} onClick={() => openModal('modalQua13')}>Comece pelo mais difícil: 21 ótimas maneiras de superar a preguiça e se tornar altamente eficiente e produtivo (Brian Tracy)</p>
                    <p className={styles.links} onClick={() => openModal('modalQua14')}>TQC - Controle de Qualidade Total (Vicente Falconi Campos)</p>
                    <p className={styles.links} onClick={() => openModal('modalQua15')}>Comunicação não violenta - Técnicas para aprimorar relacionamentos pessoais e profissionais (Marshall Rosenberg)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#00884A", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #00884A' }}
                    iconStyle={{ background: "#00884A", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Vídeos</h3>
                    <div className={styles.links}>
                        <a href='https://www.youtube.com/watch?v=pIl-lmy4y7I' target='_blank'><p>Filme "A Meta"</p></a>
                        <p>Canal Qtube no Bosch Tube (Quick Learning e ProduTube)</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#9E2896", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #9E2896' }}
                    iconStyle={{ background: "#9E2896", color: '#fff' }}
                >
                    <h3 className={styles.titles}>PodCast</h3>
                    <div className={styles.links}>
                        <a href='https://open.spotify.com/show/4GdDUsEMpGYu3gP2PakQ5d' target='_blank'><p>Bosch Talks</p></a>
                        <p>CaPcast</p>
                        <p>QualiCast</p>
                        <p>PrimoTech</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#007BC0", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #007BC0' }}
                    iconStyle={{ background: "#007BC0", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Eventos</h3>
                    <p>Eventos de organizações externas</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#18837E", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #18837E' }}
                    iconStyle={{ background: "#18837E", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Desafios</h3>
                    <p>Criação de conteúdo para o Canal Qtube no Bosch Tube</p>
                    <p>Semana da Qualidade</p>
                    <p>Prêmio da Qualidade RBLA</p>
                </VerticalTimelineElement>

                <ModalLi isOpen={isModalOpen} onClose={handleModalClose} modalType={modalType} />
            </VerticalTimeline>
        </div>
    );
}

export default TrilhaQua;

{/* <a onClick={() => openModal('modalQua')}>Abrir Modal 1</a> */ }

