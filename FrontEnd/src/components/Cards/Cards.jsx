import styles from './Cards.module.css'
import React from 'react'
import lbosch from "../../assets/bl/Bosch_symbol_logo_black_red.svg";
import { Link } from 'react-router-dom'

function Cards({ link, nome, detalhes, icone, mostrarBotoes, linkbt1, linkbt2}) {
    return (
        <Link to={link} className={styles.card}>
            <div className={styles.front}>
                <img className={styles.lb} src={lbosch} alt="logoBosch" />
                <h1>{nome}</h1>
                <img className={styles.icones} src={icone} alt='iconeDaTrilha' />
                
            </div>
            <div className={styles.back}>
                <img className={styles.lb} src={lbosch} alt="logoBosch" />
                <h1>{nome}</h1>
                <p className={styles.txt}>{detalhes}</p>
                {mostrarBotoes && (
                    <div className={styles.btns}>
                        <Link to={linkbt1} ><button className={styles.btCad}>Cadastro em massa</button></Link>
                        <p>O cadastro em massa permite o cadastro de vários usuários ao mesmo tempo.</p>
                        <Link to={linkbt2} ><button className={styles.btCad}>Cadastro único</button></Link>
                        <p>O cadastro único permite o cadastro de um único usuários por vez.</p>
                    </div>
                )}
            </div>
        </Link>
    );
}

export default Cards;
