import React, { useState, useEffect } from 'react'

const PrivateRouteGame = ({ children }) => {
    const [tokenPlay, setTokenPlay] = useState(null);

    useEffect(() => {
        // Verificar se o token está disponível (exemplo: armazenado no localStorage)
        const sessao = localStorage.getItem('auth');
        // console.log("sessao:", sessao);
        const sessao_game = localStorage.getItem('inGame');
        // console.log("sessao game:", sessao_game);
        

        if (sessao && sessao_game) {
            setTokenPlay(sessao_game);
        }
    }, []);

    return tokenPlay ? children : <h1>Sessão de jogo não encontrada</h1>;
}

export default PrivateRouteGame