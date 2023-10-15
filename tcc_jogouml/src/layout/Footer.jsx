import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <hr />
        <footer className={styles.rodape}><div><Link className={styles.link} to='https://github.com/Sdavi3489' target='_blank'><AiFillGithub size={30}/> @Sdavi3489</Link><Link to={'https://www.linkedin.com/in/davi-soares-aa3761289/'} target='_blank'><AiFillLinkedin size={30}/>Davi Soares</Link></div><p className={styles.dev_foot}>Desenvolvido por Davi Soares - 2023</p></footer>
    </>
  )
}

export default Footer