import {
	VerticalTimelineElement,
	VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./TrilhaEnge.module.css";
import Info from "../../../components/info/Info";
import TrilhaEng from "./Trilha/TrilhaEng";
import Header from "../../../components/Header/Header";

const TrilhaEnge = () => {
	return (
		<div>
			<Header />
			<Info desc="Trilha de desenvolvimento focada na formação de habilidades para atuação dentro do planejamento técnico de manufatura e áreas correlatas, onde você terá a oportunidade de vivenciar as rotinas e necessidades dentro do escopo do planejamento técnico, ferramentas da qualidade, metodologias e etc." />
			<h1 className={styles.title}>Trilha de Engenharia</h1>
			<TrilhaEng />
		</div>
	);
};

export default TrilhaEnge;
