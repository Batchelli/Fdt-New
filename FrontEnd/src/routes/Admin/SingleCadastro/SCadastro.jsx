import React, { useState } from "react";
import styles from "./SCadastro.module.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Header from "../../../components/Header/Header";

function SCadastro() {
	const [name, setName] = useState("");
	const [edv, setEdv] = useState("");
	const [gestor, setGestor] = useState("");
	const [emails, setEmails] = useState("");
	const [selectedOption, setSelectedOption] = useState("");

	const handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const cad = (e) => {
		e.preventDefault();
		if (
			(name == "", edv == "", gestor == "", emails == "", selectedOption == "")
		) {
			toast.error("Preencha todos os campos", {
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
			axios.post(
				"http://127.0.0.1:8000/api/v1/register/SingleRegister/",
				{
					nome: name,
					edv: parseInt(edv),
					trilha: selectedOption,
					gestor: gestor,
					gestor_email: emails,
					senha: "",
					acesso: true,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			toast.success("Cadastro realizado com sucesso", {
				position: "top-right",
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setEdv("");
			setName("");
			setGestor("");
			setEmails("");
			setSelectedOption("");
		}
	};

	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.contForm}>
				<form className={styles.form} onSubmit={cad}>
					<div className={styles.header}>
						<h1>Cadastro</h1>
						<p>Formulário destinado para o cadastro de usuário</p>
						<p>Preencha as informações abaixo</p>
					</div>
					<div className={styles.inputs}>
						<div className={styles.inps}>
							<label>Nome:</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								type="text"
								name="name"
								placeholder="Nome do Colaborador"
							/>
						</div>
						<div className={styles.inps}>
							<label>EDV:</label>
							<input
								value={edv}
								onChange={(e) => setEdv(e.target.value)}
								type="number"
								name="edv"
								placeholder="EDV do Colaborador"
							/>
						</div>
						<div className={styles.inps}>
							<label>Gestor:</label>
							<input
								value={gestor}
								onChange={(e) => setGestor(e.target.value)}
								type="Text"
								name="gestor"
								placeholder="Nome do Gestor"
							/>
						</div>
						<div className={styles.inps}>
							<label>E-mail do Gestor:</label>
							<input
								value={emails}
								onChange={(e) => setEmails(e.target.value)}
								type="email"
								name="emails"
								placeholder="Email do Gestor"
							/>
						</div>
						<div className={styles.inps}>
							<label>Trilha:</label>
							<select
								className={styles.dropD}
								id="dropdown"
								value={selectedOption}
								onChange={handleDropdownChange}
							>
								<option value="">Selecione...</option>
								<option value="Lider">Líder</option>
								<option value="Qualidade">Qualidade</option>
								<option value="Engenharia">Engenharia</option>
							</select>
						</div>
					</div>
					<div className={styles.btns}>
						<input className={styles.btn} type="submit" value="Cadastrar" />
					</div>
				</form>
			</div>
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
}

export default SCadastro;
