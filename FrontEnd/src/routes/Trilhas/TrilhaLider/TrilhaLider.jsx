import "react-vertical-timeline-component/style.min.css";
import styles from "./TrilhaLider.module.css";
import Info from "../../../components/info/Info";
import TrilhaLi from "./Trilha/TrilhaLi";
import Header from "../../../components/Header/Header";

const TrilhaLider = () => {
	return (
		<div>
			<Header />
			<Info desc="Esta é a trilha de desenvolvimentos para liderança: Supervisão e líder de trime. Siga pela trilha realizando seu autodesenvolvimento, onde não necessariamente uma ordem cronológica deve ser seguida. Adapte a melhor maneira dentro da sua realidade. Aproveite essa oportunidade de desenvolvimento de carreira." />
			<h1 className={styles.title}>Trilha de Liderança</h1>
			<TrilhaLi />
		</div>
	);
};

export default TrilhaLider;
