import Cards from "../../../components/Cards/Cards";
import Cad from "/src/assets/icones/cadastro.svg";
import Tri from "/src/assets/icones/trilha.svg";
import styles from "./AHome.module.css";
import Header from "../../../components/Header/Header"

const AHome = () => {
	return (
		<div className={styles.contCad}>
			<Header/>
			<section className={styles.seCard}>
				<Cards
					nome="Cadastro"
					icone={Cad}
					mostrarBotoes={true}
					linkbt1="/fdt/multicadastro"
					linkbt2="/fdt/singlecadastro"
				/>
				<Cards
					nome="Trilhas"
					detalhes="Trilhas de desenvolvimento existentes na Fábrica de talentos"
					icone={Tri}
					link="/fdt/trilhas"
				/>
			</section>
		</div>
	);
};

export default AHome;
