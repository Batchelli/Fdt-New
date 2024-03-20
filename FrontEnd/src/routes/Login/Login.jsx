import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

import BL from "../../assets/bl/BoschLogo.svg"
import { useType } from "../../UseAuth";

import { jwtDecode } from "jwt-decode";

const Login = () => {
	const [edv, setEdv] = useState("");
	const [senha, setSenha] = useState("");
	const [error, setError] = useState(null);
	const { setTypeValue } = useType();

	const navigate = useNavigate();

	useEffect(() => {
		localStorage.clear();
	}, []);

	const Logar = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/v1/fdt/users/token/",
				{
					user: edv,
					senha: senha,
				}
			);


			if (response.data.access_token) {
				const user = await axios.get(
					`http://127.0.0.1:8000/api/v1/fdt/users/user/${edv}`,
					{

					}
				);
				localStorage.setItem('access_token', response.data.access_token);
				setTypeValue(response.data.tipo_user);

				console.log("acesso:", user.data.acesso)

				if (user.data.tipo_user === "Admin") {
					navigate("/fdt/admin");
				} else if (user.data.acesso = 0 || user.data.acesso == null || user.data.acesso == false) {
					navigate("/fdt/firstaccess");
				} else {
					navigate("/fdt/trilhas");
				}

			} else {
				setError("Senha ou usuário inválidos!");
			}
		} catch (error) {
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
					{error && <p className={styles.error}>Senha ou usuário inválidos!</p>}
				</form>
			</div>
		</div>
	);
};

export default Login;
