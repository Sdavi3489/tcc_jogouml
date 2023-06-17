import React, { useState, useEffect } from 'react'
import style from '../styles/Navbar.module.css'
import { Link, useNavigate} from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
    const navigate = useNavigate();

    function OnLogout(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/logout`)
            .then(response => response.json())
            .then(data => {
                const sair = data.logout
                console.log(sair)
                localStorage.removeItem('sessao');
                navigate(`/`);
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });
    }

    //<li><Link to="/play/1">Jogar</Link></li>

    return (
        <header>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rules">Instruções</Link></li>
                <li><Link to="/rank">Ranking</Link></li>
                <li><Link className={style.btnLogout} onClick={OnLogout}><BiLogOut color='#FFF' size={25} /></Link></li>
            </ul>


        </header>
    )
}

export default Navbar