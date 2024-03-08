import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import { EdvProvider } from "./routes/Login/EdvContext";

function App() {
	return (
		<>
			<EdvProvider>
				<Outlet />
			</EdvProvider>
		</>
	);
}

export default App;
