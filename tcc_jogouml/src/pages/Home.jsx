import React from 'react'
import style from '../styles/Home.module.css'
import banner from "../assets/banner_jogo.jpg"
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <>
      <div className={style.containerHome}>
        <div className={style.banner}>
          <img src={banner} alt="banner do site que representa um diagrama de caso de uso"/>
        </div>
        <div className={style.username}>
          <form action="">
            <label className={style.userLabel}>Username: </label>
            <input type="text" name="username" className={style.ipt} />
            <button className={style.btnEntrar}>Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home