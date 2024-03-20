import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Login.module.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import BL from "../../../assets/bl/BoschLogo.svg"


function Esqueci() {
	const [edv, setEdv] = useState("");

	const navigate = useNavigate();

	const SetSenha = async (e) => {
		e.preventDefault();
		try {
			const NovaSenha = await axios.put(
				`http://127.0.0.1:8000/api/v1/fdt/email/resetPassword/${edv}`,
				{
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
						navigate("/fdt/auth");
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
						<img src={BL} alt="" />
					</div>
					<div className={styles.inps}>
						<div className={styles.contInp}>
							<input
								className={styles.inp}
								id="edv"
								type="number"
								placeholder="EDV:"
								value={edv}
								onChange={(e) => setEdv(e.target.value)}
							/>
						</div>
					</div>
					<Link to={"/fdt/auth"} className={styles.links}>
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
