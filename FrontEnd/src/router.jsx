import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/fdt" />
                <Route element={<AHome />} path="/fdt/admin" />

                <Route element={<TrilhaLider />} path="/fdt/lider" />
                <Route element={<TrilhaQuali />} path="/fdt/qualidade" />
                <Route element={<TrilhaEnge />} path="/fdt/engenharia" />

                <Route element={<Login />} path="/fdt/login" />
                <Route element={<First />} path="/fdt/firstaccess" />
                <Route element={<Esqueci />} path="/fdt/esqueciasenha" />
                <Route element={<Forms />} path="/fdt/forms" />

                <Route element={<Cadastro />} path="/fdt/multicadastro" />
                <Route element={<SCadastro />} path="/fdt/singlecadastro" />

                <Route element={<ErrorPage />} path="/fdt/singlecadastro" />
            </Routes>
        </BrowserRouter>
    )
}

export default router