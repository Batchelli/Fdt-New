import Cards from "../../components/Cards/Cards";
import imagemCard1 from "../../assets/icones/engineering.svg";
import imagemCard2 from "../../assets/icones/leader.svg";
import imagemCard3 from "../../assets/icones/quality.svg";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";

const Home = () => {
	return (
		<>
			<div className={styles.contCad}>
				<Header />
				<section className={styles.seCard}>
					<Cards
						nome="Engenharia"
						detalhes="Trilha de desenvolvimento para competências da área de engenharia, planejamento técnico para atuar dentro da área de manufatura e áreas suporte"
						icone={imagemCard1}
						link="/fdt/engenharia"
					/>

					<Cards
						nome="Liderança"
						detalhes="Trilha de desenvolvimento focada nas competências para liderança: lider de time ou supervisão"
						icone={imagemCard2}
						link="/fdt/lider"
					/>

					<Cards
						nome="Qualidade"
						detalhes="Trilha de desenvolvimento focada nas competências  do auditor de qualidade, rotinas e procedimentos focadas nesta área de atuação"
						icone={imagemCard3}
						link="/fdt/qualidade"
					/>
				</section>
			</div>
		</>
	);
};

export default Home;
