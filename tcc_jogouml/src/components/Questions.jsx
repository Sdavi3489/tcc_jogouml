import React from 'react'
import styles from '../styles/Questions.module.css'
import { useState, useEffect, useRef } from 'react'
import { FcOk, FcDisapprove } from 'react-icons/fc';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Questions = () => {
    const [valTrue, setValTrue] = useState(false); // Verifica se o valor é verdadeiro ou falso
    const [showResp, setshowResp] = useState(false); // Mostra resultado na tela quando o resultado for true, quando o usuário escolher a resposta acionando a função verfica_resp
    const [count, setCount] = useState(1);
    const [bd_dados, setBdados] = useState([])
    const [ver, setVer] = useState([])
    const [resp, setResp] = useState([])


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
    //             "resposta": ["É uma ação do usuário","Representa a ligação do usuário com o sistema","Serve como forma de relacionamento","É uma característica do ator"],
    //             "verificado": [true, false, false, false]
    //         },
    //         {
    //             "id": 2,
    //             "pergunta": "O que são os atores?",
    //             "resposta": ["Representa apenas o sistema", "Representa a ligação do usuário com o sistema", "Serve como forma de relacionamento", "São usuários que utilizam o sistema" ],
    //             "verificado": [false, false, false, true]
    //         }

    //     ]
    // }



    function verifica_resp(e) {
        e.preventDefault();
        const resp_dada = { "id_resp": count, "resposta_dada": e.target.value, "usuario_fk": 1, "pergunta_fk": count }
        setValTrue(!valTrue);
        const rev = bd_dados.map((res) => res.ver_a)
        setshowResp(true);
        console.log(bd_dados.map((res) => res.ver_a))
        console.log(bd_dados.map((res) => res.ver_a[0]))
        console.log(rev[0])

        fetch('http://localhost:3000/answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resp_dada),
        })
            .then(response => response.json())
            .then(data => {
                setVer(data);
                //console.log(data.resposta_dada); // Dados retornados pela API após a requisição POST
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });


    }

    useEffect(() => {
        fetch(`http://localhost:3000/question/${count}`)
            .then(response => response.json())
            .then(data => {
                setBdados(data);
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });
    }, [count])

    // useEffect(() => {
    //     //const res = bd_resp.map((e)=>e.resposta_dada)
    //     fetch(`http://localhost:3000/verify/${count}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setResp(data);

    //             console.log('Resposta dada e resposta correta: ' + data.resposta_correta);
    //         })
    //         .catch(error => {
    //             console.log('Ocorreu um erro:', error);
    //         });
    // }, [ver])

    function next_question(e) {
        e.preventDefault()
        setCount((e) => e + 1)
        // console.log(ver.resposta_dada == bd_dados.resposta_correta)
        setshowResp(false)
    }


    return (
        <div className={styles.container_qt}>
            <p className={styles.pq}>{bd_dados.map((e, index) => e.pergunta)}</p>
            <button className={styles.btnA} onClick={verifica_resp} value='A'>{bd_dados.map((r) => r.opcao_a)}</button>{showResp && (bd_dados.map((res) => res.ver_a == true? <FcOk /> : <FcDisapprove />))}
            <button className={styles.btnA} onClick={verifica_resp} value='B'>{bd_dados.map((r) => r.opcao_b)}</button>{showResp && (bd_dados.map((res) => res.ver_b == true? <FcOk /> : <FcDisapprove />))}
            <button className={styles.btnA} onClick={verifica_resp} value='C'>{bd_dados.map((r) => r.opcao_c)}</button>{showResp && (bd_dados.map((res) => res.ver_c == true? <FcOk /> : <FcDisapprove />))}
            <button className={styles.btnA} onClick={verifica_resp} value='D'>{bd_dados.map((r) => r.opcao_d)}</button>{showResp && (bd_dados.map((res) => res.ver_d == true? <FcOk /> : <FcDisapprove />))}
            {showResp && (<button className={styles.btnArrow} onClick={next_question}><FiArrowRightCircle /></button>)}
        </div>
    )
    // #AAAAAA - cor cinza 
    // o map pega cada valor do array, o 'e' representa o valor, se eu quiser pegar o valor de a eu uso 'e.a' ou se quiser pegar de b 'e.b' e assim sucessivamente 
}

export default Questions