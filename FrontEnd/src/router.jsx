import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
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
    const { type: userType, trilha: userTrilha } = useType(); 
    const token = localStorage.getItem('access_token'); 

    const decodedToken = jwtDecode(token);

    useEffect(() => {
        if (!token) {
            console.log("Token não encontrado no localStorage");
            return;
        }

        try {
            console.log("Token decodificado:", decodedToken);
            if (decodedToken && decodedToken.tipo_user) {
                console.log("Tipo de usuário:", decodedToken.tipo_user);
                console.log("Trilha do usuário:", decodedToken.trilha);
            } else {
                console.log("Propriedade 'tipo_user' não encontrada no token");
            }
        } catch (error) {
            console.error("Erro ao decodificar o token:", error);
        }
    }, [token]);

    console.log("userType:", userType);
    console.log("allowedUserTypes:", allowedUserTypes);

    if (allowedUserTypes.includes(decodedToken.tipo_user) || allowedUserTypes.includes(decodedToken.trilha)) {
        console.log("Usuário autorizado");
        console.log("Trilha: ", decodedToken.trilha);
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

                    <Route path="/fdt/lider" element={<ProtectedRoute element={<TrilhaLider />} allowedUserTypes={['Admin', 'Lider']} />} />
                    <Route path="/fdt/qualidade" element={<ProtectedRoute element={<TrilhaQuali />} allowedUserTypes={['Admin', 'Qualidade']} />} />
                    <Route path="/fdt/engenharia" element={<ProtectedRoute element={<TrilhaEnge />} allowedUserTypes={['Admin', 'Engenharia']} />} />

                    <Route element={<Login />} path="/fdt/auth" />
                    <Route element={<First />} path="/fdt/firstaccess" />
                    <Route element={<Esqueci />} path="/fdt/esqueciasenha" />
                    <Route element={<Forms />} path="/fdt/forms" />

                    <Route path="/fdt/multicadastro" element={<ProtectedRoute element={<Cadastro />} allowedUserTypes={['Admin']} />} />
                    <Route path="/fdt/singlecadastro" element={<ProtectedRoute element={<SCadastro />} allowedUserTypes={['Admin']} />}  />

                    <Route element={<ErrorPage />} path="/fdt/error" />
                </Routes>
            </TypeProvider>
        </BrowserRouter>
    )
}

export default Router;
