import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "./First.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";


const First = (props) => {

	const [senha, setSenha] = useState("");
	const [email, setEmail] = useState("");
	const [confirmSenha, setConfirmSenha] = useState("");
	const [senhaVerificada, setSenhaVerificada] = useState(true);
	const [haveEmail, setHaveEmail] = useState("")

	const navigate = useNavigate();

	const token = localStorage.getItem("access_token");
	const dToken = jwtDecode(token);
	const dEdv = dToken.edv


	const userData = async () => {
		try {
			const user = await axios.get(
				`http://127.0.0.1:8000/api/v1/fdt/users/user/${dEdv}`,
				{}
			);

			if (user.data.user_email){
				setHaveEmail(user.data.user_email)
			}

			console.log("teste", user.data.user_email)
			return user.data.user_email


		} catch (error) {
		}
	}

	userData();

	const NovaSenha = async (e) => {
		e.preventDefault();
		if (confirmSenha == "" || senha == "" || email == "") {
			toast.error("Preencha todos os campos", {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (senha != confirmSenha) {
			setSenhaVerificada(false);
			toast.error("Senhas diferentes", {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else if (senha === confirmSenha) {
			setSenhaVerificada(true);
			if (senhaVerificada == true) {
				try {
					const fAccess = await axios.put(
						`http://127.0.0.1:8000/api/v1/fdt/users/firstAccess/${dEdv}/${email}/${senha}`,
						{
						}
					);
					if (fAccess) {
						toast.success("Senha alterada com sucesso", {
							position: "top-right",
							autoClose: 2500,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
							onClose: () => {
								setConfirmSenha("");
								setSenha("");
								setTimeout(() => {
									navigate("/fdt/trilhas");
								}, 3500);
							},
						});
					}
				} catch (error) {
					console.error("Erro na requisição:", error);
				}
			}
		}
	};


	return (
		<div className={styles.containerMae}>
			<div className={styles.container}>
				<div className={styles.esquerda}>
					<h1>Bem vindo</h1>
					<p>
						Essa plataforma foi desenvolvida no intuito de proporcionar para os
						colaboradores maior facilidade em seu desenvolvimento profissional,
						buscando sempre otimizar cada vez mais sua acessibilidade ao sistema
						que foi desenvolvido pelos aprendizes da ETS.
					</p>
					<div className={styles.autores}>
						<div className={styles.names}>
							<strong>Giovana Radaeli</strong>
							<strong>CaP/ETS</strong>
						</div>
						<div className={styles.names}>
							<strong>Lucas Baccelli</strong>
							<strong>CaP/ETS</strong>
						</div>
					</div>
				</div>
				<div className={styles.direita}>
					<form className={styles.form} onSubmit={NovaSenha}>
						<h3>Primeiro acesso</h3>
						<p>
							Devido ao seu primeiro acesso a plataforma precisamos que você
							defina sua nova senha abaixo:
						</p>
						<div className={styles.inps}>
							<div className={styles.inp}>
								<label>Digite sua nova senha:</label>
								<input
									value={senha}
									onChange={(e) => setSenha(e.target.value)}
									type="password"
									placeholder="Digite sua nova senha"
								/>
							</div>
							<div className={styles.inp}>
								<label>Confirme sua nova senha:</label>
								<input
									value={confirmSenha}
									onChange={(e) => setConfirmSenha(e.target.value)}
									type="password"
									placeholder="Confirme sua senha"
								/>
							</div>
							{console.log("Teste123", haveEmail)}
							{haveEmail != null  && (
								<div className={styles.inp}>
									<label>Digite seu email:</label>
									<input
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										type="text"
										placeholder="Digite sua email"
									/>
								</div>
							)}

						</div>
						<div className={styles.cntBtn}>
							<input className={styles.btn} type="submit" value="Continuar" />
						</div>
					</form>
				</div>
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
			<div className={styles.bgOpa} />
		</div>
	);
};
export default First;
