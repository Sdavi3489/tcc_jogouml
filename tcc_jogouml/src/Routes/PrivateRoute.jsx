import React, { useState, useEffect } from 'react'
import { BrowserRouter as Route, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    //const logado = true
    //const { user } = useParams();
    //const [logado, setLogado] = useState(null);
    //const [user, setUser] = useState([]);



    const [token, setToken] = useState(null);

    useEffect(() => {
        // Verificar se o token está disponível (exemplo: armazenado no localStorage)
        //const tokenFromStorage = localStorage.getItem('token');
        const sessao = localStorage.getItem('sessao');
        console.log("sessao:", sessao);

        if (sessao) {
            setToken(sessao);
        }
    }, []);

    return token ? children : <h1>Página não encontrada</h1>;
}

export default PrivateRoute