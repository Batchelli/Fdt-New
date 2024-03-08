import React, { useState } from 'react';
import styles from './Cadastro.module.css'
import axios from 'axios';
import { PiMicrosoftExcelLogoFill as Excel } from "react-icons/pi";
import Header from "../../../components/Header/Header"


const Cadastro = () => {

    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [previewData, setPreviewData] = useState([]);
    const [show, setShow] = useState(false)

    const fileDownload = "http://localhost:5173/ArquivoDeExemplo.xlsx"

    const download = (url) => {
        const fileNae = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileNae)

        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }


    const setArquivo = (e) => {
        setFile(e.target.files[0]);
    };

    const showEnviar = () => {
        setShow(true)
    }


    const enviar = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://127.0.0.1:8000/api/v1/register/uploadfile/',
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setUploadStatus('Arquivo enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o arquivo', error);
            setUploadStatus('Erro ao enviar o arquivo. Tente novamente.');
        }
    };

    const preview = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/previewfile/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const fomatData = response.data.map((item) => ({
                Nome: item.Nome || 'N/A',
                EDV: item.EDV || 'N/A',
                Trilha: item.Trilha || 'N/A',
                Gestor: item.Gestor || 'N/A',
                Email: item.Email || 'N/A',
            }))

            setPreviewData(fomatData);
            showEnviar()

        } catch (error) {
            console.error('Erro ao visualizar o arquivo', error);
        }
    };

    return (
        <div>
            <Header/>
            <div className={styles.form}>
                <div className={styles.btns}>
                    <div className={styles.download}>
                        <button onClick={() => { download(fileDownload) }} className={styles.btnDown}>
                            <Excel
                                size={60}
                                color='white'
                            />
                            Baixar Arquivo de exemplo
                        </button>
                        <p>Arquivo de exemplo para seguir o padrão de cadastro do sistema.</p>
                    </div>
                    <div className={styles.btnsApi}>
                        <input type="file" onChange={setArquivo}/>
                        <button className={styles.btnExcel}  onClick={preview}>Visualizar Dados</button>
                    </div>
                </div>
                <div className={styles.data}>
                    <ul className={styles.board}>
                        <h3>Nome</h3>
                        {previewData.map((item, index) => (
                            <p key={index}>
                                {`${item.Nome}`}
                            </p>
                        ))}
                    </ul>
                    <ul className={styles.board}>
                        <h3>EDV</h3>
                        {previewData.map((item, index) => (
                            <p key={index}>
                                {`${item.EDV}`}
                            </p>
                        ))}
                    </ul>
                    <ul className={styles.board}>
                        <h3>Trilha</h3>
                        {previewData.map((item, index) => (
                            <p key={index}>
                                {`${item.Trilha}`}
                            </p>
                        ))}
                    </ul>
                    <ul className={styles.board}>
                        <h3>Gestor</h3>
                        {previewData.map((item, index) => (
                            <p key={index}>
                                {`${item.Gestor}`}
                            </p>
                        ))}
                    </ul>
                    <ul className={styles.board}>
                        <h3>Email Gestor</h3>
                        {previewData.map((item, index) => (
                            <p key={index}>
                                {`${item.Email}`}
                            </p>
                        ))}
                    </ul>
                </div>
                {show && <button onClick={enviar} className={styles.btnExcel} id={styles.enviar}>Enviar Arquivo</button>}
                {show && <label>{uploadStatus}</label>}

            </div>
        </div>
    )
}

export default Cadastro