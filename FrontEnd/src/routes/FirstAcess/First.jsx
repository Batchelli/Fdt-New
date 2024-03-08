import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "./First.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const First = (props) => {
	const { edv } = useParams();
	const [senha, setSenha] = useState("");
	const [confirmSenha, setConfirmSenha] = useState("");
	const [senhaVerificada, setSenhaVerificada] = useState(true);
	const [nome, setNome] = useState("");
	const [trilha, setTrilha] = useState("");
	const [gestor, setGestor] = useState("");
	const [gestor_email, setGestor_email] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const edvUser = location.state && location.state.edvUser;

	const novaSenha = async (e) => {
		e.preventDefault();
		if (senha === confirmSenha) {
			setSenhaVerificada(true);
			if (confirmSenha == "" || senhaVerificada == "") {
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
			} else {
				try {
					const NovaSenha = await axios.put(
						`http://127.0.0.1:8000/api/v1/usuarios/senhaUpdate`,
						{
							nome: nome,
							trilha: trilha,
							gestor: gestor,
							gestor_email: gestor_email,
							senha: senha,
							acesso: 0,
							edv: edvUser,
						}
					);
					const NewAcess = await axios.put(
						`http://127.0.0.1:8000/api/v1/usuarios/acesso`,
						{
							nome: nome,
							trilha: trilha,
							gestor: gestor,
							gestor_email: gestor_email,
							senha: senha,
							acesso: 0,
							edv: edvUser,
						}
					);

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
								navigate("/Trilhas", { state: { edvUser: edv } });
							}, 3500);
						},
					});
				} catch (error) {
					console.error("Erro na requisição:", error);
				}
			}
		} else {
			setSenhaVerificada(false);
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
					<form className={styles.form} onSubmit={novaSenha}>
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
						</div>
						{!senhaVerificada && (
							<p className={styles.dfSenha}>As senhas não coincidem.</p>
						)}
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
