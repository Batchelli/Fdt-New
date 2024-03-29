import React, { useState } from "react";
import styles from "./SCadastro.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../../components/Header/Header";
import Api from "../../../Api";

function SCadastro() {
	const [name, setName] = useState("");
	const [edv, setEdv] = useState("");
	const [gestor, setGestor] = useState("");
	const [user_email, setUser_Email] = useState("");
	const [selectedTrilha, setSelectedTrilha] = useState("");
	const [selectedTipo, setSelectedTipo] = useState("");

	const [isAdmin, setIsAdmin] = useState(false)

	const trilhaSelect = (eventTri) => {
		setSelectedTrilha(eventTri.target.value);
	};

	const tipoSelect = (eventTip) => {
		setSelectedTipo(eventTip.target.value);

		isAdm()
	};

	const isAdm = () => {

		if (selectedTipo === "Admin") {
			setIsAdmin(true)
		} else {
			setIsAdmin(false)
		}
	}


	const cad = async (e) => {
		e.preventDefault();
		if (selectedTipo === "Admin") {
			if (name == "" || edv == "" || user_email == "") {
				toast.error("Preencha todos os campos!", {
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
				try {
					const cadAdm = await axios.post(`${Api}/cadastros/singleRegister`,
						{
							nome: name,
							edv: edv,
							trilha: "",
							gestor: "",
							gestor_email: "",
							user_email: user_email,
							tipo_user: "Admin",
							senha: "",
							acesso: true,
						},
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					);
					toast.success("Cadastro realizado com sucesso!", {
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
					setUser_Email("");
				} catch {

					toast.error("Erro ao cadastrar usuário!", {
						position: "top-right",
						autoClose: 2500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});

				}
			}
		} else {
			if (name == "" || edv == "" || gestor == "" || user_email == "" || selectedTrilha == "") {
				toast.error("Preencha todos os campos!", {
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
				try {
					const cadAdm = await axios.post(`${Api}/cadastros/singleRegister`,
						{
							nome: name,
							edv: edv,
							trilha: selectedTrilha,
							gestor: gestor,
							gestor_email: user_email,
							user_email: "",
							tipo_user: "User",
							senha: "",
							acesso: true,
						},
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					);
					toast.success("Cadastro realizado com sucesso!", {
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
					setUser_Email("");
					setSelectedTrilha("");
				} catch {

					toast.error("Erro ao cadastrar usuário!", {
						position: "top-right",
						autoClose: 2500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});

				}
			}
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
							<div className={styles.drop} id={styles.tipoUser}>
								<label>Tipo do Usuário:</label>
								<select
									className={styles.dropD}
									id="dropdown"
									value={selectedTipo}
									onChange={tipoSelect}
								>
									<option value="">Selecione...</option>
									<option value="Admin">Admin</option>
									<option value="User">User</option>
								</select>
							</div>
						</div>

						{isAdmin !== false && (
							<div className={styles.inputs}>
								<div className={styles.nEdv}>
									<div className={styles.inps} id={styles.name}>
										<label>Nome:</label>
										<input
											value={name}
											onChange={(e) => setName(e.target.value)}
											type="text"
											name="name"
											placeholder="Nome do Colaborador"
										/>
									</div>
									<div className={styles.inps} id={styles.edv}>
										<label>EDV:</label>
										<input
											value={edv}
											onChange={(e) => setEdv(e.target.value)}
											type="number"
											name="edv"
											placeholder="EDV do Colaborador"
										/>
									</div>
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
										value={user_email}
										onChange={(e) => setUser_Email(e.target.value)}
										type="email"
										name="user_email"
										placeholder="Email do Gestor"
									/>
								</div>
								<div className={styles.drops}>
									<div className={styles.drop}>
										<label>Trilha:</label>
										<select
											className={styles.dropD}
											id="dropdown"
											value={selectedTrilha}
											onChange={trilhaSelect}
										>
											<option value="">Selecione uma trilha</option>
											<option value="Lider">Líder</option>
											<option value="Qualidade">Qualidade</option>
											<option value="Engenharia">Engenharia</option>
										</select>
									</div>
								</div>
							</div>
						)}

						{isAdmin !== true && (
							<div className={styles.inputs}>
								<div className={styles.nEdv}>
									<div className={styles.inps} id={styles.name}>
										<label>Nome:</label>
										<input
											value={name}
											onChange={(e) => setName(e.target.value)}
											type="text"
											name="name"
											placeholder="Nome do Colaborador"
										/>
									</div>
									<div className={styles.inps} id={styles.edv}>
										<label>EDV:</label>
										<input
											value={edv}
											onChange={(e) => setEdv(e.target.value)}
											type="number"
											name="edv"
											placeholder="EDV do Colaborador"
										/>
									</div>
								</div>
								<div className={styles.inps}>
									<label>E-mail:</label>
									<input
										value={user_email}
										onChange={(e) => setUser_Email(e.target.value)}
										type="email"
										name="user_email"
										placeholder="Email do usuário"
									/>
								</div>
							</div>
						)}

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
