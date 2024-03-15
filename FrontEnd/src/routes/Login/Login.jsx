import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
	const [edv, setEdv] = useState("");
	const [senha, setSenha] = useState("");
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const Login = async () => {
		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/v1/fdt/users/token/",
				{
					user: edv,
					senha: senha,
				}
			);
	
			if (response.data.access_token) { // Check if login is successful
				if (response.data.tipo_user === "Admin") { // Redirect to /Admin if user is admin
					navigate("/Admin");
				} else {
					navigate("/Trilhas"); // Redirect to /Trilhas if user is not admin
				}
			} else {
				setError("Senha ou usuário inválidos!"); // Handle invalid credentials
			}
		} catch (error) {
			// Handle other errors
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
						<div className={styles.contInp}>
							<input
								className={styles.inp}
								id="passW"
								type="password"
								placeholder=""
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>
							<label htmlFor="passW" className={styles.placeholder}>
								Senha:
							</label>
						</div>
					</div>
					<Link to={"/esqueciSenha"} className={styles.links}>
						<p id={styles.link}>Esqueci a senha!</p>
					</Link>
					<div className={styles.btns}>
						<button className={styles.btn} onClick={Login}>
							Entrar
						</button>
					</div>
					{error && <p className={styles.error}>Senha ou usuário inválidos!</p>}
				</div>
			</div>
		</div>
	);
};

export default Login;
