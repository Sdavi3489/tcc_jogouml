import React from 'react'
import styles from '../styles/Questions.module.css'

const Questions = () => {
    const questions = {
        "id": 1,
        "pergunta": "O que é caso de uso?",
        "resposta": [{ "a": "É uma ação do usuário", "b": "Representa a ligação do usuário com o sistema", "c": "Serve como forma de relacionamento", "d": "É uma característica do ator" }],
        "certo": "a",
        "errado": ["b", "c", "d"]
    }



    return (
        <div className={styles.container_qt}>
            <p className={styles.pq}>{questions.pergunta}</p>
            <button className={styles.btnA}>{questions.resposta.map((e,index)=>e.a)}</button>
            <button className={styles.btnA}>{questions.resposta.map((e,index)=>e.b)}</button>
            <button className={styles.btnA}>{questions.resposta.map((e,index)=>e.c)}</button>
            <button className={styles.btnA}>{questions.resposta.map((e,index)=>e.d)}</button>
        </div>
    )

    // const questions = {
    //     "question": [
    //         {
    //             "id": 1,
    //             "pergunta": "O que é caso de uso?",
    //             "resposta": [{ "a": "É uma ação do usuário", "b": "Representa a ligação do usuário com o sistema", "c": "Serve como forma de relacionamento", "d": "É uma característica do ator" }],
    //             "certo": "a",
    //             "errado": ["b", "c", "d"]
    //         }
    //     ]
    // }

    //<p className=''>{questions.resposta.map((e)=> e.a)}</p>
    // o map pega cada valor do array, o 'e' representa o valor, se eu quiser pegar o valor de a eu uso 'e.a' ou se quiser pegar de b 'e.b' e assim sucessivamente 
}

export default Questions