import React from 'react'
import style from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/play/1">Jogar</Link></li>
                <li><Link to="/rules">Instruções</Link></li>
                <li><Link to="/rank">Ranking</Link></li>
            </ul>


        </header>
    )
}

export default Navbar