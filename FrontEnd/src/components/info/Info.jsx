import React from 'react'
import styles from "./Info.module.css";
import grupo from "../../assets/bl/grupo.png";
import { Link } from 'react-router-dom'

//colocar a estrtura de imagens

function Info({desc}) {
  return (
    <>
    <section className={styles.wrapper}>
            <div className={styles.boxImagens}>
                <img src={grupo} alt="Grupo de pessoas" />
            </div>
            <div className={styles.boxText}>
                <h1>Bem-vindo</h1>
                <p>{desc}</p>
            </div>
    </section>
    </>
  )
}

export default Info