import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './routes/Home/Home.jsx';
import TrilhaLider from './routes/Trilhas/TrilhaLider/TrilhaLider.jsx';
import TrilhaQuali from './routes/Trilhas/TrilhaQualidade/TrilhaQualidade.jsx';
import TrilhaEnge from './routes/Trilhas/TrilhaEngenharia/TrilhaEnge.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Forms from './routes/Forms/Forms.jsx';
import Login from './routes/Login/Login.jsx';
import First from './routes/FirstAcess/First.jsx';
import Cadastro from './routes/Admin/Cadastro/Cadastro.jsx';
import AHome from './routes/Admin/AdminHome/AHome.jsx';
import SCadastro from './routes/Admin/SingleCadastro/SCadastro.jsx';
import Esqueci from './routes/Login/EsqueciSenha/Esqueci.jsx';

const PrivateRoute = ({ element, expectedTrilha, isAdmin }) => {
  const isLoggedIn = Boolean(window.localStorage.getItem('user'));
  const userTrilha = window.localStorage.getItem('trilha');
  const edv = window.localStorage.getItem('edv');

  if (!isLoggedIn && !edv) {
    return <Navigate to="/" />;
  }

  const lowercaseUserTrilha = userTrilha ? userTrilha.toLowerCase() : '';
  const lowercaseExpectedTrilha = expectedTrilha ? expectedTrilha.toLowerCase() : '';
  const lowercaseIsAdmin = isAdmin ? isAdmin.toLowerCase() : '';

  if (!expectedTrilha || lowercaseUserTrilha === lowercaseExpectedTrilha) {
    return element;
  }

  if (!isAdmin || lowercaseUserTrilha === lowercaseIsAdmin) {
    return element;
  }

  return <Home />;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/esqueciSenha",
        element: <Esqueci />
      },
      {
        path: "/home/",
        element: <First />
      },
      {
        path: "/Trilhas",
        element: <PrivateRoute element={<Home />} />
      },
      {
        path: "/Lider",
        element: <PrivateRoute element={<TrilhaLider />} expectedTrilha="Lider" isAdmin="Admin" />
      },
      {
        path: "/Qualidade",
        element: <PrivateRoute element={<TrilhaQuali />} expectedTrilha="Qualidade" isAdmin="Admin" />
      },
      {
        path: "/Engenharia",
        element: <PrivateRoute element={<TrilhaEnge />} expectedTrilha="Engenharia" isAdmin="Admin" />
      },
      {
        path: "/Forms/",
        element: <PrivateRoute element={<Forms />} />
      },
      {
        path: "/Register",
        element: <PrivateRoute element={<Cadastro />} expectedTrilha="Admin" />
      },
      {
        path: "/Admin",
        element: <PrivateRoute element={<AHome />} expectedTrilha="Admin" />
      },
      {
        path: "/MassiveRegister",
        element: <PrivateRoute element={<Cadastro />} expectedTrilha="Admin" />
      },
      {
        path: "/SingleRegister",
        element: <PrivateRoute element={<SCadastro />} expectedTrilha="Admin" />
      },
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
