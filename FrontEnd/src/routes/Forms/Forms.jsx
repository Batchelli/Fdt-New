import React, { useState, useEffect } from "react";
import styles from "./Forms.module.css";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
	infoLider,
	infoQualidade,
	infoEngenharia,
	infosTreinos,
} from "./Infos";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

import { jwtDecode } from "jwt-decode";

const animatedComponents = makeAnimated();

const Forms = () => {
	const [name, setName] = useState("");
	const [emails, setEmails] = useState("");
	const [edv, setEdv] = useState("");
	const [selectedOptions, setSelectedOptions] = useState([]);
	const navigate = useNavigate();

	const token = localStorage.getItem("access_token");
	const dToken = jwtDecode(token);

	const dTrilha = dToken.trilha
	const dUser = dToken.tipo_user
	const dEdv = dToken.edv


	let infos = null;

	if (dTrilha == "Lider" || dUser == "Admin") {
		infos = infoLider;
	} else if (dTrilha == "Qualidade" || dUser == "Admin") {
		infos = infoQualidade;
	} else if (dTrilha == "Engenharia" || dUser == "Admin") {
		infos = infoEngenharia;
	} if (dUser == "Admin") {
		infos = infosTreinos;
	}

	const vTrilha = () => {
		if (dTrilha == "Lider") {
			navigate("/fdt/lider");
		} else if (dTrilha == "Qualidade") {
			navigate("/fdt/qualidade");
		} else if (dTrilha == "Engenharia") {
			navigate("/fdt/engenharia");
		}
	};

	useEffect(() => {
        const obterUsuario = async () => {
            try {
                const respostaUser = await axios.get(
                    `http://127.0.0.1:8000/api/v1/fdt/users/user/${dEdv}`
                );
                setName(respostaUser.data.nome);
                setEmails(respostaUser.data.gestor_email);
                setEdv(respostaUser.data.edv);
            } catch (erro) {
                console.error("Erro ao obter dados do usuário:", erro);
            }
        };
        obterUsuario();
    }, []);



	const info = (e) => {
		e.preventDefault();
		if (selectedOptions == "") {
			toast.error("Preencha todos os campos abaixo", {
				position: "top-right",
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			axios.post("http://127.0.0.1:8000/api/v1/fdt/email/email/", {
				nome: name,
				email: emails,
				edv: edv,
				dropD: selectedOptions.map((option) => option.value),
			});

			setSelectedOptions([]);
			toast.success("Requisição enviada com sucesso", {
				position: "top-right",
				autoClose: 500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setTimeout(() => {
				vTrilha();
			}, 1500);
		}
	};

	return (
		<div>
			<Header />
			<form className={styles.form} onSubmit={info}>
				<h1>Requisição</h1>
				<p>
					Formulário destinado para a solicitação de acesso ao curso desejado
				</p>
				<p>Selecione as opções que você deseja</p>
				<label>Nome:</label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					name="name"
					placeholder="Digite seu nome"
				/>
				<br />
				<label>EDV:</label>
				<input
					value={edv}
					onChange={(e) => setEdv(e.target.value)}
					type="text"
					name="edv"
					placeholder="Digite seu EDV "
				/>
				<br />
				<label>E-mail do Gestor:</label>
				<input
					value={emails}
					onChange={(e) => setEmails(e.target.value)}
					type="email"
					name="emails"
					placeholder="Digite o email do seu gestor"
				/>
				<br />
				<div>
					<Select
						closeMenuOnSelect={false}
						components={animatedComponents}
						isMulti
						value={selectedOptions}
						options={infos}
						name="dropD"
						onChange={(selected) => setSelectedOptions(selected)}
					/>
				</div>
				<div className={styles.bts}>
					<input className={styles.btn} type="submit" value="Enviar" />
				</div>
			</form>
			<ToastContainer
				position="top-right"
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
	);
};

export default Forms;
