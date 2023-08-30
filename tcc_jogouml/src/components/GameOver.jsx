import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../styles/GameOver.module.css'
import { BsFillEmojiFrownFill } from "react-icons/bs";

const GameOver = () => {
    localStorage.removeItem('inGame'); // remove sessão do jogo caso esteja em aberto no navegador e caso o usuario resolva voltar para o menu
    for (let index = 0; index < 12; index++) {
        localStorage.removeItem(`co0${index}`);// remove o localStorage das conquistas
        localStorage.removeItem(`tr0${index}`);// remove o localStorage das trofeus
    }
    
    return (
        <>
            <div className={style.contGameOver}>
                <div><BsFillEmojiFrownFill size={80} color='#FFFF00' /></div>
                <h1 className={style.msgGameOver}>Infelizmente você perdeu suas tentantivas restantes!</h1>
                <h2 className={style.msgGameOver}>Não desista! Estude e tente novamente!</h2>
                <h2 className={style.msgGameOver}>Veja os conceitos importantes nas instruções</h2>
                <Link className={style.linkRules} to={`/rules`}>Vá para Instruções</Link>
            </div>
        </>
    )
}

export default GameOver