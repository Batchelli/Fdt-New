import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BL from "../../assets/bl/BoschLogo.svg"
import styles from "./Login.module.css";
import { useType } from "../../UseAuth";
import Api from "../../Api";
import axios from "axios";

const Login = () => {
	const [edv, setEdv] = useState("");
	const [senha, setSenha] = useState("");
	const { setTypeValue } = useType();

	const navigate = useNavigate();

	useEffect(() => {
		localStorage.clear();
	}, []);

	const Logar = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${Api}/users/token/`,
				{
					user: edv,
					senha: senha,
				}
			);
			if (response.data.access_token) {
				const user = await axios.get(
					`${Api}/users/user/${edv}`,
					{

					}
				);
				localStorage.setItem('access_token', response.data.access_token);
				setTypeValue(response.data.tipo_user);

				if (user.data.tipo_user === "Admin") {
					toast.success("Logado como admin!", {
						position: "top-center",
						autoClose: 350,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
						theme: "light",
						onClose: () => {
							setTimeout(() => {
								navigate("/fdt/admin");
							}, 1500);
						},
					});
				} else if (user.data.acesso = 0 || user.data.acesso == null || user.data.acesso == false) {
					toast.success("Logado como usuário!", {
						position: "top-center",
						autoClose: 350,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
						theme: "light",
						onClose: () => {
							setTimeout(() => {
								navigate("/fdt/firstaccess");
							}, 1500);
						},
					});
				} else {
					toast.success("Logado como usuário!", {
						position: "top-center",
						autoClose: 350,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
						theme: "light",
						onClose: () => {
							setTimeout(() => {
								navigate("/fdt/trilhas");
							}, 1500);
						},
					});
				}

			}
		} catch (error) {
			toast.error("Erro ao efetuar o login!", {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: "light",
			});
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.fundo}>
				<form onSubmit={Logar} className={styles.contLogin}>
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
						<div className={styles.contInp}>
							<input
								className={styles.inp}
								id="passW"
								type="password"
								placeholder="Senha:"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>
						</div>
					</div>
					<Link to={"/fdt/resetsenha"} className={styles.links}>
						<p id={styles.link}>Esqueci a senha!</p>
					</Link>
					<div className={styles.btns}>
						<button className={styles.btn}>
							Entrar
						</button>
					</div>
				</form>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggablel
				pauseOnHover
				theme="light"
			/>
		</div>
	);
};

export default Login;
