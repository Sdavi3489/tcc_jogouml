import React from 'react'
import styles from '../styles/Questions.module.css'
import { useState, useEffect, useRef } from 'react'
import { FcOk, FcDisapprove } from 'react-icons/fc';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Questions = () => {
    const [valTrue, setValTrue] = useState(false); // Verifica se o valor é verdadeiro ou falso
    const [showResp, setshowResp] = useState(false); // Mostra resultado na tela quando o resultado for true, quando o usuário escolher a resposta acionando a função verfica_resp
    const [count, setCount] = useState(0);

    const questions = {
        "id": 1,
        "pergunta": "O que é caso de uso?",
        "resposta": [{ "a": "É uma ação do usuário", "b": "Representa a ligação do usuário com o sistema", "c": "Serve como forma de relacionamento", "d": "É uma característica do ator" }],
        "verificado": [true, false, false, false]
    }

    // const questions = {
    //     question: [
    //         {
    //             "id": 1,
    //             "pergunta": "O que é caso de uso?",
    //             "resposta": [{ "a": "É uma ação do usuário", "b": "Representa a ligação do usuário com o sistema", "c": "Serve como forma de relacionamento", "d": "É uma característica do ator" }],
    //             "verificado": [true, false, false, false]
    //         },
    //         {
    //             "id": 2,
    //             "pergunta": "O que são os atores?",
    //             "resposta": [{ "a": "Representa apenas o sistema", "b": "Representa a ligação do usuário com o sistema", "c": "Serve como forma de relacionamento", "d": "São usuários que utilizam o sistema" }],
    //             "verificado": [false, false, false, true]
    //         }

    //     ]
    // }

    function verifica_resp() {
        setValTrue(!valTrue);
        setshowResp(true);
    }

    function next_question(){
        setCount((e)=>e+1)
        console.log(count)
        setshowResp(false)
    }


    return (
        <div className={styles.container_qt}>
            <p className={styles.pq}>{questions.pergunta}</p>
            <button className={styles.btnA} onClick={verifica_resp}>{questions.resposta.map((e, index) => e.a)}</button>{showResp && (questions.verificado[0] == true ? <FcOk/> : <FcDisapprove/>)}
            <button className={styles.btnA} onClick={verifica_resp}>{questions.resposta.map((e, index) => e.b)}</button>{showResp && (questions.verificado[1] == true ? <FcOk/> : <FcDisapprove/>)}
            <button className={styles.btnA} onClick={verifica_resp}>{questions.resposta.map((e, index) => e.c)}</button>{showResp && (questions.verificado[2] == true ? <FcOk/> : <FcDisapprove/>)}
            <button className={styles.btnA} onClick={verifica_resp}>{questions.resposta.map((e, index) => e.d)}</button>{showResp && (questions.verificado[3] == true ? <FcOk/> : <FcDisapprove/>)}
            {showResp &&(<button className={styles.btnArrow} onClick={next_question}><FiArrowRightCircle/></button>)}
        </div>
    )
    // #AAAAAA - cor cinza 
    // o map pega cada valor do array, o 'e' representa o valor, se eu quiser pegar o valor de a eu uso 'e.a' ou se quiser pegar de b 'e.b' e assim sucessivamente 
}

export default Questions