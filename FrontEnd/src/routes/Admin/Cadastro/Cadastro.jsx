import { PiMicrosoftExcelLogoFill as Excel } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../components/Header/Header"
import styles from './Cadastro.module.css'
import React, { useState } from 'react';
import Api from '../../../Api';
import axios from 'axios';


const Cadastro = () => {

    const [file, setFile] = useState(null);
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
            await axios.post(`${Api}/cadastros/uploadfile/`,
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success("Arquivo enviado com sucesso!", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            toast.error("Erro ao enviar arquivo!", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const preview = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(`${Api}/cadastros/previewfile/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const fomatData = response.data.map((item) => ({
                Nome: item.nome || 'N/A',
                EDV: item.edv || 'N/A',
                Trilha: item.trilha || 'N/A',
                Gestor: item.gestor || 'N/A',
                Email: item.gestor_email || 'N/A',
            }))

            setPreviewData(fomatData);
            showEnviar()

        } catch (error) {
            console.error('Erro ao visualizar o arquivo', error);
        }
    };

    return (
        <div>
            <Header />
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
                        <input type="file" onChange={setArquivo} />
                        <button className={styles.btnExcel} onClick={preview}>Visualizar Dados</button>
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
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Cadastro