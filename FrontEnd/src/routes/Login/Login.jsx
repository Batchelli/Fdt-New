import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

import BL from "../../assets/bl/BoschLogo.svg"
import { useType } from "../../UseAuth";


const Login = () => {
	const [edv, setEdv] = useState("");
	const [senha, setSenha] = useState("");
	const [error, setError] = useState(null);
	const { setTypeValue } = useType();

	const navigate = useNavigate();

	useEffect(() => {
        localStorage.clear();
    }, []);

	const Logar = async () => {
		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/v1/fdt/users/token/",
				{
					user: edv,
					senha: senha,
				}
			);
	
			if (response.data.access_token) {
				localStorage.setItem('access_token', response.data.access_token);
                setTypeValue(response.data.tipo_user);

				if (response.data.tipo_user === "Admin") {
					navigate("/fdt/admin");
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
					<Link to={"/esqueciSenha"} className={styles.links}>
						<p id={styles.link}>Esqueci a senha!</p>
					</Link>
					<div className={styles.btns}>
						<button className={styles.btn} onClick={Logar}>
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
