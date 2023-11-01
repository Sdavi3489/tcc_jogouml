import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import style from '../styles/Rules.module.css'
import RulesGame from '../components/RulesGame'
import Title from '../components/Title'
import RulesUseCase from '../components/RulesUseCase'


const Rules = () => {
  const location = useLocation(); // pega o a localização da url do site e verifica se o usuário está nela
  const rulesInitial = location.pathname === '/rules';
  const rulesCasodeUso = location.pathname === '/rules/caso-de-uso';

  return (
    <>
      <div className={style.containerContent}>
        <aside className={style.sidebar}>
          <h2 className={style.h2SideBar}>Capítulos</h2>
          <ol>
            <li className={style.ulRulesAside}><a className={style.itensBar} href="/rules">Regras do jogo</a></li>
            <li className={style.ulRulesAside}><a className={style.itensBar} href="/rules/caso-de-uso">Caso de uso</a></li>
          </ol>
        </aside>
        <article className={style.contentRules}>
          {rulesInitial && <RulesGame />}
          {rulesCasodeUso && <RulesUseCase/>}
        </article>

      </div>

    </>
  )
}

export default Rules