import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import style from '../styles/NavBarHome.module.css'


const NavBarHome = () => {
    return (
        <header>
            <ul>
                <li><Link className={style.linkNav} to="/rules">Instruções</Link></li>
                <li><Link className={style.linkNav} to="/rank">Ranking</Link></li>
                <li><Link className={style.linkNav} to="#">Sobre</Link></li>
            </ul>
        </header>
    )
}

export default NavBarHome