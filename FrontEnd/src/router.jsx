import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import TrilhaLider from './routes/Trilhas/TrilhaLider/TrilhaLider.jsx';
import TrilhaQuali from './routes/Trilhas/TrilhaQualidade/TrilhaQualidade.jsx';
import TrilhaEnge from './routes/Trilhas/TrilhaEngenharia/TrilhaEnge.jsx';

import Cadastro from './routes/Admin/Cadastro/Cadastro.jsx';
import SCadastro from './routes/Admin/SingleCadastro/SCadastro.jsx';

import Login from './routes/Login/Login.jsx';
import First from './routes/FirstAcess/First.jsx';
import Esqueci from './routes/Login/EsqueciSenha/Esqueci.jsx';
import Forms from './routes/Forms/Forms.jsx';

import Home from './routes/Home/Home.jsx';
import AHome from './routes/Admin/AdminHome/AHome.jsx';

import ErrorPage from './routes/ErrorPage.jsx';

import { TypeProvider, useType } from "./UseAuth.jsx";


const ProtectedRoute = ({ element, allowedUserTypes }) => {
    const { type: userType } = useType();
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/fdt/users/user/me");
                const userData = response.data;
                if (userData && allowedUserTypes.includes(userData.tipo_user)) {
                    setIsAuthorized(true);
                }
            } catch (error) {
                console.error("Erro ao recuperar dados do usuário:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [allowedUserTypes]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (isAuthorized) {
        return element;
    } else {
        console.log("Usuário não autorizado");
        return <Navigate to="/fdt/trilhas" />;
    }
};
const Router = () => {
    return (
        <BrowserRouter>
            <TypeProvider>
                <Routes>
                    <Route element={<Home />} path="/fdt/trilhas" />
                    <Route path="/fdt/admin" element={<ProtectedRoute element={<AHome />} allowedUserTypes={['Admin']} />} />

                    <Route element={<TrilhaLider />} path="/fdt/lider" />
                    <Route element={<TrilhaQuali />} path="/fdt/qualidade" />
                    <Route element={<TrilhaEnge />} path="/fdt/engenharia" />

                    <Route element={<Login />} path="/fdt/auth" />
                    <Route element={<First />} path="/fdt/firstaccess" />
                    <Route element={<Esqueci />} path="/fdt/esqueciasenha" />
                    <Route element={<Forms />} path="/fdt/forms" />

                    <Route element={<Cadastro />} path="/fdt/multicadastro" />
                    <Route element={<SCadastro />} path="/fdt/singlecadastro" />

                    <Route element={<ErrorPage />} path="/fdt/error" />
                </Routes>
            </TypeProvider>
        </BrowserRouter>
    )
}

export default Router