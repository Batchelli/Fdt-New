import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Login.module.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function Esqueci() {
	const [edv, setEdv] = useState("");
	const [acesso, setAcesso] = useState("");

	const SetSenha = async (e) => {
		e.preventDefault();
		try {
			const NovaSenha = await axios.put(
				`http://127.0.0.1:8000/api/v1/usuarios/senhaUpdate`,
				{
					nome: "",
					trilha: "",
					gestor: "",
					gestor_email: "",
					senha: edv,
					acesso: 1,
					edv: edv,
				}
			);
			const NewAcess = await axios.put(
				`http://127.0.0.1:8000/api/v1/usuarios/acesso`,
				{
					nome: "",
					trilha: "",
					gestor: "",
					gestor_email: "",
					senha: edv,
					acesso: 1,
					edv: edv,
				}
			);
			toast.success("Senha resetada com sucesso", {
				position: "top-right",
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				onClose: () => {
					setEdv("");
					setTimeout(() => {
						navigate("/");
					}, 3500);
				},
			});
		} catch (error) {
			console.error("Erro na requisição:", error);
			toast.error("Usuário não encontrado", {
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
	};

	return (
		<div className={styles.container}>
			<div className={styles.fundo}>
				<div className={styles.contLogin}>
					<div className={styles.bl}>
						<img src="src\assets\bl\Bosch_symbol_logo_black_red.svg" alt="" />
					</div>
					<div className={styles.inps}>
						<div className={styles.contInp}>
							<input
								className={styles.inp}
								id="edv"
								type="number"
								placeholder=""
								value={edv}
								onChange={(e) => setEdv(e.target.value)}
							/>
							<label htmlFor="edv" className={styles.placeholder}>
								EDV:
							</label>
						</div>
					</div>
					<Link to={"/"} className={styles.links}>
						<p id={styles.link}>Voltar ao inicio</p>
					</Link>
					<div className={styles.btns}>
						<button className={styles.btn} onClick={SetSenha}>
							Alterar senha
						</button>
					</div>
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
		</div>
	);
}

export default Esqueci;
