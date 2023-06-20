import React from 'react'
import styles from '../styles/Footer.module.css'
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <hr />
        <footer className={styles.rodape}><div><Link className={styles.link} to='https://github.com/Sdavi3489' target='_blank'><AiFillGithub size={30}/> @Sdavi3489</Link><Link className={styles.link}><AiFillInstagram size={30}/> @sdavi3489</Link></div><p className={styles.dev_foot}>Desenvolvido por Davi - 2023</p></footer>
    </>
  )
}

export default Footer