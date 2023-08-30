import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Time() {
    const navigate = useNavigate() // navega para o link definido quando o for acionado
    const [time, setTime] = useState(12 * 60); // Tempo em segundos, aqui eu determinei 12 minutos de tempo total

    useEffect(() => {
        if (time > 0) {
            const temporizador = setInterval(() => {
                // o tempo vai diminuir no setState do tempo conforme ele passar
                // 1000 quer dizer 1 segundo por toda as vezes que essa operação deve acontecer
                // o prev vai pegar o tempo anterior e ir diminuindo um segundo
                setTime(prevTime => prevTime - 1);
            }, 1000);
            // O clearInterval vai ser responsavel por terminar a contagem
            return () => clearInterval(temporizador);
        }
        else{
            navigate('/private/gameover');
        }
    }, [time]);

    const minutes = Math.floor(time / 60); // converte o tempo em minutos
    const seconds = time % 60; // converte o tempo em segundos
    // o padStart funciona para formatar a exibição para que aparece sempre com dois digitos
    localStorage.setItem(`time`, `${minutes}:${seconds}`); // Isso vai armazenar o tempo que o usuário terminou

    return (
        <>
            <span>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
        </>
    );
}

export default Time;
