import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import { useEdv } from "../Login/EdvContext";

const Login = () => {
	const [edv, setEdv] = useState("");
	const { setEdvValue } = useEdv();
	const [senha, setSenha] = useState("");
	const [nome, setNome] = useState("");
	const [trilha, setTrilha] = useState("");
	const [gestor, setGestor] = useState("");
	const [gestor_email, setGestor_email] = useState("");
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const limpaCache = () => {
		localStorage.clear();
	};

	const Login = async () => {
		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/v1/logins/login/",
				{
					edv: edv,
					senha: senha,
					acesso: true,
				}
			);
			const respostaUser = await axios.get(
				`http://127.0.0.1:8000/api/v1/usuarios/user/${edv}/`,
				{}
			);
			const valorAcesso = respostaUser.data[0].acesso;

			if (response.data.success) {
				window.localStorage.setItem("user", response.data.access_token);
				window.localStorage.setItem("trilha", response.data.trilha);
				if (response.data.trilha === "Admin") {
					navigate("/Admin");
				} else {
					if (
						valorAcesso == 1 ||
						valorAcesso == "True" ||
						valorAcesso == true
					) {
						navigate(`home/`, { state: { edvUser: edv } });
						console.log(respostaUser.data[0]);
					} else {
						navigate("/Trilhas");
						console.log(respostaUser.data[0]);
					}
					setEdvValue(edv);
					const novoClienteID = edv;
					window.localStorage.setItem("clienteID", novoClienteID);
				}
			}
		} catch (error) {
			if (error.response && error.response.data && error.response.data.detail) {
				if (Array.isArray(error.response.data.detail)) {
					const validationErrors = error.response.data.detail
						.map((error) => error.msg)
						.join(", ");
					setError(`Validation errors: ${validationErrors}`);
				} else {
					setError("Validation errors occurred. Please check the input.");
				}
			} else {
				setError("An unexpected error occurred. Please try again.");
			}
		}
	};

	limpaCache();

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
