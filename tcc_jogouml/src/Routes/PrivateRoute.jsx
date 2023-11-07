import React, { useState, useEffect } from 'react'
import { BrowserRouter as Route, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Verificar se o token está disponível (exemplo: armazenado no localStorage)
        const sessao = localStorage.getItem('auth');
        // console.log("sessao:", sessao);

        if (sessao) {
            setToken(sessao);
        }
    }, []);

    return token ? children : navigate("/");
}

export default PrivateRoute