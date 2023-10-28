import React from 'react'
import style from '../styles/Rules.module.css'
import RulesGame from '../components/RulesGame'
import Title from '../components/Title'


const Rules = () => {
  return (
    <>
      <div className={style.containerContent}>
        <aside className={style.sidebar}>
          <h2 className={style.h2SideBar}>Capítulos</h2>
          <ol>
            <li className={style.ulRulesAside}><a className={style.itensBar} href="#">Regras do jogo</a></li>
            <li className={style.ulRulesAside}><a className={style.itensBar} href="#">Caso de uso</a></li>
          </ol>
        </aside>
        <article className={style.contentRules}>
          <RulesGame />
        </article>

      </div>

    </>
  )
}

export default Rules