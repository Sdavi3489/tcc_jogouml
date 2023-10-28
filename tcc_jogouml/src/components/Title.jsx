import React from 'react'
import style from '../styles/Title.module.css'

const Title = ({topico,title}) => {
  return (
    <>
        <h1>{topico}: {title}</h1>
        <div className={style.divider}></div>
    </>
  )
}

export default Title