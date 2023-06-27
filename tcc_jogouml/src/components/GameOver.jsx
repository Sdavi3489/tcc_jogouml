import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../styles/GameOver.module.css'
import { BsFillEmojiFrownFill } from "react-icons/bs";

const GameOver = () => {
    return (
        <>
            <div className={style.contGameOver}>
                <div><BsFillEmojiFrownFill size={80} color='#FFFF00'/></div>
                <h1 className={style.msgGameOver}>Infelizmente você perdeu suas tentantivas restantes!</h1>
                <h2 className={style.msgGameOver}>Não desista! Estude e tente novamente!</h2>
                <h2 className={style.msgGameOver}>Veja os conceitos importantes nas instruções</h2>
                <Link className={style.linkRules} to={`/rules`}>Vá para Instruções</Link>
            </div>
        </>
    )
}

export default GameOver