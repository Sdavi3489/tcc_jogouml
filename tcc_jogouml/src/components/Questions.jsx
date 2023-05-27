import React from 'react'
import styles from '../styles/Questions.module.css'
import { useState, useEffect, useRef } from 'react'
import { FcOk, FcDisapprove, FcLike } from 'react-icons/fc';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Resultado from './Resultado';

const Questions = () => {
    //const [valTrue, setValTrue] = useState(false); // Verifica se o valor é verdadeiro ou falso
    const [showResp, setshowResp] = useState(false); // Mostra resultado na tela quando o resultado for true, quando o usuário escolher a resposta acionando a função verfica_resp
    const [count, setCount] = useState(1); //conta o id das perguntas conforme o usuário avança e serve para indentifica o id da tabela pergunta.
    const [bd_dados, setBdados] = useState([]) //guarda todas as informações da requisição get do banco de dados da tabela pergunta.
    const [ver, setVer] = useState([]) //guarda as informações que enviamos para o banco de dados da tabela resposta.
    const [count_vida, setCountVida] = useState(5) //Contador de vidas
    const [Score, setScore] = useState(0) // Pontuação do jogador 
    const navigate = useNavigate() // navega para o link definido quando o for acionado


    function verifica_resp(e) {
        e.preventDefault();
        const resp_dada = { "id_resp": count, "resposta_dada": e.target.value, "usuario_fk": 1, "pergunta_fk": count } // manda as informações em json para a requisição post.
        const rev = bd_dados.map((res) => res.resposta_correta) //pega a resposta correta
        setshowResp(true); //Mostra a resposta correta e incorreta da questão

        console.log(rev);
        if(resp_dada.resposta_dada == rev){
            console.log('Ganhou 3 pontos!');
            setScore((scr)=>scr+3);
        }
        else{
            console.log('Perdeu 1 ponto!');
            setScore((scr)=>scr-1);
            setCountVida((ch)=>ch-1);
        }
        
        
        //console.log(bd_dados.map((res) => res.ver_a))
        //console.log(bd_dados.map((res) => res.ver_a[0]))
        //console.log(rev[0])

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
        setshowResp(false)
        if(count == 10){
            // esse if == 10 vai ser provisório por enquanto não adicionamos mais perguntas, quando adicionar mais eu coloco o tamanho (lenght) do array
            navigate(`/result/${Score}`); // esse navigate vai fazer um redirecionamento para a página de resultados
        }
    }


    return (
        <div className={styles.container_qt}>
            <div className={styles.container_vida}><p className={styles.score}>PONTOS: {Score}</p><p className={styles.countHearts}>{count_vida}</p><FcLike className={styles.fcLike} size={35}/></div>
            <p className={styles.pq}>{bd_dados.map((e, index) => e.pergunta)}</p>
            <button className={styles.btnA} onClick={verifica_resp} value='A'>{bd_dados.map((r) => r.opcao_a)}</button>{showResp && (bd_dados.map((res,index) => res.ver_a == true? <FcOk /> : <FcDisapprove />))}
            <button className={styles.btnA} onClick={verifica_resp} value='B'>{bd_dados.map((r) => r.opcao_b)}</button>{showResp && (bd_dados.map((res,index) => res.ver_b == true? <FcOk /> : <FcDisapprove />))}
            <button className={styles.btnA} onClick={verifica_resp} value='C'>{bd_dados.map((r) => r.opcao_c)}</button>{showResp && (bd_dados.map((res,index) => res.ver_c == true? <FcOk /> : <FcDisapprove />))}
            <button className={styles.btnA} onClick={verifica_resp} value='D'>{bd_dados.map((r) => r.opcao_d)}</button>{showResp && (bd_dados.map((res,index) => res.ver_d == true? <FcOk /> : <FcDisapprove />))}
            <div className={styles.container_btn}>{showResp && (<button className={styles.btnArrow} onClick={next_question}><FiArrowRightCircle /></button>)}</div>
        </div>
    )
    // #AAAAAA - cor cinza 
    // o map pega cada valor do array, o 'e' representa o valor, se eu quiser pegar o valor de a eu uso 'e.a' ou se quiser pegar de b 'e.b' e assim sucessivamente 
}

export default Questions