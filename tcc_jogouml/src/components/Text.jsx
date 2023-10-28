import React from 'react'
import style from '../styles/Text.module.css'

const Text = ({texto}) => {
  return (
    <>
        <p className={style.textComponent}>{texto}</p>
    </>
  )
}

export default Text