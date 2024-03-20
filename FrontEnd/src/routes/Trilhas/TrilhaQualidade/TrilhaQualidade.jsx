import {
	VerticalTimelineElement,
	VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./TrilhaQualidade.module.css";
import Info from "../../../components/info/Info";
import TrilhaQua from "./Trilha/TrilhaQua";
import Header from "../../../components/Header/Header";

const TrilhaQualidade = () => {
	return (
		<div>
			<Header />
			<Info desc="Trilha de desenvolvimento focada na formação de habilidades para atuação dentro do escopo de “Auditor de Qualidade” onde você terá a oportunidade de se desenvolver tecnicamente e nos conceitos referentes a qualidade dentro da Bosch." />
			<h1 className={styles.title}>Trilha de Qualidade</h1>
			<TrilhaQua />
		</div>
	);
};

export default TrilhaQualidade;
