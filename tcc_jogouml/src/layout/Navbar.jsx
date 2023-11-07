import React, { useState, useEffect } from 'react'
import style from '../styles/Navbar.module.css'
import { Link, useNavigate} from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
    const apiURL = import.meta.env.VITE_REACT_APP_API_URL; // url da api
    const navigate = useNavigate();

    function OnLogout(e) {
        e.preventDefault();
        fetch(`${apiURL}/logout`)
            .then(response => response.json())
            .then(data => {
                const sair = data.logout
                console.log(sair)
                localStorage.removeItem('auth');
                localStorage.removeItem('inGame');
                navigate(`/`);
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });
    }

    //<li><Link to="/play/1">Jogar</Link></li>

    return (
        <header>
            <ul className={style.ulNav}>
                <li className={style.liNav}><Link className={style.linkNav} to="/private">Menu</Link></li>
                <li className={style.liNav}><Link className={style.linkNav} to="/rules">Instruções</Link></li>
                <li className={style.liNav}><Link className={style.linkNav} to="/rank">Ranking</Link></li>
                <li className={style.liNav}><Link className={style.btnLogout} onClick={OnLogout}><BiLogOut color='#FFF' size={25} /></Link></li>
            </ul>
        </header>
    )
}

export default Navbar