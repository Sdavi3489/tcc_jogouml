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


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:3000/protegido');
    //         const data = await response.json();
    //         const val = data.valido
    //         if (val == true) {
    //             //return children;
    //             return setLogado(true)
    //         }
    //         else{
    //             return setLogado(false)
    //         }
    //         // setUser(data);
    //         // setLogado(true)
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     fetch(`http://localhost:3000/protegido`)
    //         .then(response => response.json())
    //         .then(data => {
    //             //const val = data.userId
    //             const val = data.valido
    //             if (val) {
    //                 return children;
    //                 //return setLogado(true)
    //             }
    //             else{
    //                 return navigate(`/`)
    //             }
    //             //console.log("É valido: ", val)
    //             //navigate(`/private/${userCripto}`);
    //         })
    //         .catch(error => {
    //             const verify = error.valido
    //             if(verify){
    //                 return null;
    //             }
    //             //setLogado(false)
    //             //navigate(`/private/${verify}`);
    //             console.log('Não é válido:', error);
    //         });

    // }, []);

    // if (!UsuarioAutenticado) {
    //     navigate('/login');
    //     return null;
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`http://localhost:3000/protectedCookie`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 const val = data.valido;
    //                 setLogado(val)
    //                 console.log("É valido: ", val)
    //                 //navigate(`/private/${userCripto}`);
    //             })
    //             .catch(error => {
    //                 const verify = error.valido
    //                 //navigate(`/private/${verify}`);
    //                 console.log('Não é válido:', error.valido);
    //                 setLogado(verify);
    //             });
    //     }

    //     fetchData();
    // }, []);

    // if (!IdUser) {
    //     setLogado(true);
    // }
    // else {
    //     setLogado(false)
    // }

    // Função para verificar a senha
    // const compareUser = async (username, hash) => {
    //     try {
    //         const match = await bcrypt.compare(username, hash); // Comparar a senha fornecida com o hash armazenado
    //         return match;
    //     } catch (error) {
    //         throw new Error('Erro ao verificar o username');
    //     }
    // };

    // const VerificaUser = async ()=> {
    //     const Comp_user = await compareUser(user, usercrypto);
    //     setLogado(Comp_user);
    // }

    // VerificaUser();



    return token ? children : navigate("/");
}

export default PrivateRoute