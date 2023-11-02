import React from 'react'
import style from '../styles/Figura.module.css'


const Figura = ({image, caption, lar, alt}) => {
    return (
        <>
            <figure className={style.figuraRules}>
                <img  className={style.figuraImg} src={image} alt="imagem Menu" width={lar} height={alt}/>
                <figcaption className={style.figuraCaption}>{caption}</figcaption>
            </figure>
        </>
    )
}

export default Figura