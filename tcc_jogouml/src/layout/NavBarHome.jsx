import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import style from '../styles/NavBarHome.module.css'
import imgLogo from '../assets/logo-jogo-tcc-new.png'


const NavBarHome = () => {
    return (
        <header>
            <ul className={style.ulNav}>
                <li className={style.liNav}><img className={style.imageLogo} src={imgLogo} alt="Logo do site" /></li>
                <li className={style.liNav}><Link className={style.linkNav} to="/rules">Instruções</Link></li>
                <li className={style.liNav}><Link className={style.linkNav} to="/rank">Ranking</Link></li>
                <li className={style.liNav}><Link className={style.linkNav} to="#">Sobre</Link></li>
            </ul>
        </header>
    )
}

export default NavBarHome