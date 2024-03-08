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
			<Info desc="Esta é a trilha de desenvolvimentos para Engenharia" />
			<h1 className={styles.title}>Trilha de Engenharia</h1>
			<TrilhaEng />
		</div>
	);
};

export default TrilhaEnge;
