import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './TrilhaLi.module.css';
import ModalLi from '../Modal/ModaLi';

const TrilhaLi = () => {
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
                    <p className={styles.links} onClick={() => openModal('modal1')}>Padrões BPS Working according to Standards (Operadores)</p>
                    <p className={styles.links} onClick={() => openModal('modal2')}>[RBLA-I4.0-Conceito] Indústria 4.0 - Conceito, metodo e aplicação na prática-B</p>
                    <p className={styles.links} onClick={() => openModal('modal3')}>[RBLA-I4.0-Fundamentos] Fundamentos sobre a Industria 4.0-B</p>
                    <p className={styles.links} onClick={() => openModal('modal4')}>[BR-PROD-TPMBAS] Conceitos Básicos de TPM-B</p>
                    <p className={styles.links} onClick={() => openModal('modal5')}>[RBLA-COM-SUC1] Comunicação Dialógica – Habilidades de sucesso-B</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#18837E", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #18837E' }}
                    iconStyle={{ background: "#18837E", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Atividades</h3>
                    <p className={styles.links} onClick={() => openModal('modal6')}>Atualização de indicadores operacionais da área de atuação</p>
                    <p className={styles.links} onClick={() => openModal('modal7')}>Ciclos de melhorias TPM</p>
                    <p className={styles.links} onClick={() => openModal('modal8')}>1 dia na vida de (LT/Sup)</p>
                    <p className={styles.links} onClick={() => openModal('modal9')}>Conectividade (uso de ferramentas)</p>
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
                    <p className={styles.links} onClick={() => openModal('modal10')}>Comece pelo Porquê - Como grandes líderes inpiram pessoas e equipes a agir (Simon Sinek)</p>
                    <p className={styles.links} onClick={() => openModal('modal11')}>O Monge e o Executivo - Uma história sobre a essencia da liderança (James C. Hunter)</p>
                    <p className={styles.links} onClick={() => openModal('modal12')}>Como fazer amigos e influenciar pessoas (Dale Carnegie)</p>
                    <p className={styles.links} onClick={() => openModal('modal13')}>Felicidade dá lucro (Marcio Fernandes)</p>
                    <p className={styles.links} onClick={() => openModal('modal14')}>Qual é a tua obra? Inquietações propositivas sobre gestão, liderança e ética (Mario Sergio Cortella)</p>
                    <p className={styles.links} onClick={() => openModal('modal15')}>Comunicação não violenta - Técnicas para aprimorar relacionamentos pessoais e profissionais (Marshall Rosenberg)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: "#18837E", color: '#fff', boxShadow: '0px 0px 0px 0px' }}
                    contentArrowStyle={{ borderRight: '7px solid #18837E' }}
                    iconStyle={{ background: "#18837E", color: '#fff' }}
                >
                    <h3 className={styles.titles}>Videos</h3>
                    <div className={styles.links}>
                        <a href='https://www.ted.com/talks/simon_sinek_why_good_leaders_make_you_feel_safe/c?language=pt-BR&subtitle=pt-br' target='_blank'><p>Simon Sinek: Por que bons líderes fazem você se sentir seguro</p></a>
                        <a href='https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action' target='_blank'><p>TED Simon Sinek: Como grandes líderes inspiram ação</p></a>
                        <a href='https://www.ted.com/talks/dan_pink_the_puzzle_of_motivation/up-next?language=pt-br' target='_blank'><p>TED Dan Pink: A surpreendente ciência da motivação</p></a>
                        <a href='https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are?language=pt-BR' target='_blank'><p>Amy Cuddy: Sua linguagem corporal molda quem você é</p></a>
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
                <ModalLi isOpen={isModalOpen} onClose={closeModal} modalType={modalType} />
            </VerticalTimeline>
        </div>
    );
}

export default TrilhaLi;

