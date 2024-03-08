import React, { useState } from "react";
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

const animatedComponents = makeAnimated();

const Forms = () => {
	const [name, setName] = useState("");
	const [emails, setEmails] = useState("");
	const [edv, setEdv] = useState("");
	const [selectedOptions, setSelectedOptions] = useState([]);
	const clienteID = window.localStorage.getItem("clienteID");
	const navigate = useNavigate();

	const trilha = localStorage.getItem("trilha");
	let infos = null;

	if (trilha == "Lider") {
		infos = infoLider;
	} else if (trilha == "Qualidade") {
		infos = infoQualidade;
	} else if (trilha == "Engenharia") {
		infos = infoEngenharia;
	} else if (trilha == "Admin") {
		infos = infosTreinos;
	}

	const vTrilha = () => {
		if (trilha == "Lider") {
			navigate("/Lider");
		} else if (trilha == "Qualidade") {
			navigate("/Qualidade");
		} else if (trilha == "Engenharia") {
			navigate("/Engenharia");
		}
	};

	const obterUsuario = async () => {
		try {
			const respostaUser = await axios.get(
				`http://127.0.0.1:8000/api/v1/usuarios/user/${clienteID}/`
			);
			setName(respostaUser.data[0].nome);
			setEmails(respostaUser.data[0].gestor_email);
			setEdv(clienteID);
		} catch (erro) {
			console.error("Erro ao obter dados do usuário:", erro);
		}
	};
	obterUsuario();

	const info = (e) => {
		e.preventDefault();
		obterUsuario();
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
			axios.post("http://127.0.0.1:8000/api/v1/sendEmail/email", {
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
            maxMenuHeight={90}
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
