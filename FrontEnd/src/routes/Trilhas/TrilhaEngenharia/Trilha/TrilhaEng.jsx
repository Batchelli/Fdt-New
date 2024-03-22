import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './TrilhaEng.module.css';
import ModalEng from '../Modal/ModaEng';

const TrilhaEng = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    const openModal = (type) => {
        setIsModalOpen(true);
        setModalType(type);
    };

    const closeModal = () => {
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
                >
                    <h3 className={styles.titles}>Palestra</h3>
                    <p>Introdução ao BPS (Princípios e Elementos)</p>
                    <p>Gerenciamento e indicadores operacionais (OEE/Produtividade)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: "#007BC0", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #007BC0' }}
                    iconStyle={{ background: "#007BC0", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Treinamentos</h3>
                    <p className={styles.links} onClick={() => openModal('modal1')}>Programa de capacitação i4.0[RBLA-I4.0-Conceito] Indústria 4.0 - Conceito, metodo e aplicação na prática-B</p>
                    <p className={styles.links} onClick={() => openModal('modal2')}>Programa de capacitação i4.0 [RBLA-I4.0-Fundamentos] Fundamentos sobre a Industria 4.0-B</p>
                    <p className={styles.links} onClick={() => openModal('modal3')}>TPM [BR-PROD-TPMBAS] Conceitos Básicos de TPM-B</p>
                    <p className={styles.links} onClick={() => openModal('modal4')}>Ferramentas de Qualidade: 8D, FSP [QM-8D-WBT] 8 D: A problem Solving Method-B</p>
                    <p className={styles.links} onClick={() => openModal('modal5')}>Ferramentas de Qualidade: 14 Quality Basics [QM-QBasics-B-WBT] Q-Basics for the Value Stream-B</p>
                    <p className={styles.links} onClick={() => openModal('modal6')}>Ferramentas de Qualidade: FMEA [QM-FMEA-WBT] FMEA Basics-B</p>
                    <p className={styles.links} onClick={() => openModal('modal7')}>Ferramentas de Qualidade: Plano de Controle [QM-CP-WBT] Control Plan – An Overview-B</p> 
                    <p className={styles.links} onClick={() => openModal('modal8')}>Ferramentas de Qualidade: Processos de Modificação [QM-TQ056-WBT] Engineering Change Process-B</p> 
                    <p className={styles.links} onClick={() => openModal('modal9')}>[RBLA-COM-PITCH] How to be understood with impactful presentations-A</p> 
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#18837E", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #18837E' }}
                    iconStyle={{ background: "#18837E", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Atividades</h3>
                    <p className={styles.links} onClick={() => openModal('modal10')}>PGL</p>
                    <p className={styles.links} onClick={() => openModal('modal11')}>Idioma</p>
                    <p className={styles.links} onClick={() => openModal('modal12')}>1 dia na vida de (Plan/Eng)</p>
                    <p className={styles.links} onClick={() => openModal('modal13')}>Conectividade (uso de ferramentas)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#00884A", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #00884A' }}
                    iconStyle={{ background: "#00884A", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Visitas</h3>
                    <p>Conhecer as principais áreas suportes que tem interface direta com a manufatura</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                     contentStyle={{ background: '#9E2896', color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                     contentArrowStyle={{ borderRight: '7px solid #9E2896' }}
                     iconStyle={{ background: '#9E2896', color: '#fff' }}
                >
                    <h3 className={styles.titles}>Conversas</h3>
                    <p>Bate Papo temático com Supervisão</p>
                    <p>Preparação para entrevistas</p>
                    <p>RODA DE CONVERSA: Diversidade - o papel da liderança e cuidados</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#007BC0", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #007BC0' }}
                    iconStyle={{ background: "#007BC0", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Leituras</h3>
                    <p className={styles.links} onClick={() => openModal('modal14')}>Comece pelo mais difícil: 21 ótimas maneiras de superar a preguiça e se tornar altamente eficiente e produtivo (Brian Tracy)</p>
                    <p className={styles.links} onClick={() => openModal('modal15')}>Essencialismo: A disciplinada busca por menos (Greg McKeown)</p>
                    <p className={styles.links} onClick={() => openModal('modal16')}>Motivação 3.0 - Drive: A surpreendente verdade sobre o que realmente nos motiva (Daniel H. Pink)</p>
                    <p className={styles.links} onClick={() => openModal('modal17')}>Comunicação não violenta - Técnicas para aprimorar relacionamentos pessoais e profissionais (Marshall Rosenberg)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#18837E", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #18837E' }}
                    iconStyle={{ background: "#18837E", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Videos</h3>
                    <div className={styles.links}>
                        <a href='https://www.youtube.com/watch?v=jf2NmDvpVk0&t=2s' target='_blank'><p>TED Alexandre Pellaes: O mundo precisa do seu melhor trabalho</p></a>
                        <a href='https://www.youtube.com/watch?v=pIl-lmy4y7I' target='_blank'><p>Filme "A Meta"</p></a>
                        <a href='tt' target='_blank'><p>Bosch Tube: canal Qtube, vídeos "ProdTube" para conhecer funcionamento e aplicação dos produtos Bosch</p></a>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#00884A", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #00884A' }}
                    iconStyle={{ background: "#00884A", color: '#fff' }}
                >
                    <h3 className={styles.titles}>PodCast</h3>
                    <div className={styles.links}>
                        <a href='https://open.spotify.com/show/4GdDUsEMpGYu3gP2PakQ5d' target='_blank'><p>Bosch Talks</p></a>
                    </div>
                </VerticalTimelineElement>
                <ModalEng isOpen={isModalOpen} onClose={closeModal} modalType={modalType} />
            </VerticalTimeline>
        </div>
    );
}

export default TrilhaEng;

{/* <a onClick={() => openModal('modal1')}>Abrir Modal 1</a> */ }

