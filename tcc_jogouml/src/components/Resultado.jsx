import React from 'react'
import styles from '../styles/Resultado.module.css'
import rank from "../assets/ranking-outline.svg"
import co01 from "../assets/conquistas/co01.jpg"
import co02 from "../assets/conquistas/co02.jpg"
import co03 from "../assets/conquistas/co03.jpg"
import co04 from "../assets/conquistas/co04.jpg"
import co06 from "../assets/conquistas/co06.jpg"
import co07 from "../assets/conquistas/co07.jpg"
import tr01 from "../assets/conquistas/tr01.jpg"
import tr05 from "../assets/conquistas/tr05.jpg"
import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiAlliedStar } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";

const Resultado = () => {
    const location = useLocation();
    const parametrosURL = new URLSearchParams(location.search);
    const erros = parametrosURL.get('erros');
    const { id, score, acertos } = useParams();
    const [result, setResult] = useState([]);
    // const [getconq, setGetconq] = useState([]);
    const style_itens = { paddingRight: "2rem" }
    const navigate = useNavigate() // navega para o link definido quando o for acionado
    const user = localStorage.getItem('User');
    const m1 = localStorage.getItem('co01');
    const m2 = localStorage.getItem('co03');
    const m3 = localStorage.getItem('co04');
    const m4 = localStorage.getItem('co07');
    const m5 = localStorage.getItem('co06');
    const t1 = localStorage.getItem('tr01');
    const t5 = localStorage.getItem('tr05');
    const time = localStorage.getItem('time');
    const minutes = Number(time.split(':')[0]) // pega os minutos do tempo obtido
    const seconds = Number(time.split(':')[1]) // pega os segundos do tempo obtido
    const timeComplete = minutes + seconds - erros*10 // pega tempo completo e desconta pontos extras do tempo
    const scoreConvertido = Number(score)
    // TODO: VERIFICA ESSA CONTA SE ELA FUNCIONA NORMAL
    const FinalScore = scoreConvertido + timeComplete; //pontuacao final/criterio de desempate

    console.log("score", score);
    console.log("Time result component:", FinalScore);
    console.log("desconto tempo", timeComplete);
    // console.log("Time result component subtraido por erros:", FinalScoreteste);
    console.log('erros componente result:', erros);
    // o usuario perde 10 pontos do tempo por pergunta errada na pontuação final

    function getTime() {
        // const minutes = Number(time.split(':')[0]) // pega os minutos do tempo obtido
        // const seconds = Number(time.split(':')[1]) // pega os segundos do tempo obtido
        //console.log(minutes, ":", seconds); 
        if (minutes >= 8 && seconds >= 0) {
            // Adiciona a conquista da velocidade se o usuário bater um recorde maior que 8 minutos
            localStorage.setItem('co02', "Conquista: Eu sou a velocidade!");
        }
        //retorna true se o item estiver disponível e mostra na tela de resultados
        return localStorage.getItem('co02');
    }


    // function RestartPlayGame() {

    //     fetch('http://localhost:3000/Delresptemp', {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.log('Ocorreu um erro:', error);
    //         });


    //     //localStorage.setItem('inGame',user);
    //     return navigate(`/private/play/${id}`)
    // }

    useEffect(() => {
        fetch(`http://localhost:3000/result`)
            .then(response => response.json())
            .then(data => {
                setResult(data);
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });
    }, [result])

    useEffect(() => {
        // TODO: MUDEI O SCORE PARA O NOVO SCORE DE DESEMPATE caso quiser trocar só vir aqui
        // lembrar de trocar para float
        fetch(`http://localhost:3000/rank/${id}/${FinalScore}`, {
            method: 'PUT'
        })
            .then(response => response.json())
            .then(data => {
                //setVer(data);
                console.log(data); // Dados retornados pela API após a requisição POST
            })
            .catch(error => {
                console.log('Ocorreu um erro:', error);
            });

    }, [])

    function conq_trofeu() {
        // Essa função se refere ao troféu que o usuário ganhará se ele for o primeiro do ranking
        useEffect(() => {
            fetch(`http://localhost:3000/ranking`)
                .then(response => response.json())
                .then(data => {
                    console.log(data[0]);
                    //setGetUsername(data[0].username)
                    if (data[0].username == user) {
                        localStorage.setItem(`tr05`, 'Troféu: Segue o líder');
                    }
                })
                .catch(error => {
                    console.log('Ocorreu um erro:', error);
                });
        }, [])
    }

    conq_trofeu();

    return (
        <>
            <div className={styles.containerResult}>
                <span className={styles.score}>Pontuação: {FinalScore} <GiAlliedStar size={35} color='#699BF7' /></span>
                <div className={styles.contItens}>
                    <span className={styles.acertos} style={style_itens}>{acertos} Acertos</span>
                    <span className={styles.acertos}>Conquistas</span>
                </div>
                <div className={styles.conq}>
                    {m1 && (<img src={co01} height={'90px'} />)}
                    {m2 && (<img src={co03} height={'90px'} />)}
                    {m3 && (<img src={co04} height={'90px'} />)}
                    {m4 && (<img src={co07} height={'90px'} />)}
                    {m5 && (<img src={co06} height={'90px'} />)}
                    {getTime() && (<img src={co02} height={'90px'} />)}
                    {t1 && (<img src={tr01} height={'90px'} />)}
                    {t5 && (<img src={tr05} height={'90px'} />)}

                </div>
                <div className={styles.time}>
                    <span>Tempo</span><br />
                    {/* {time && (<span>{time}</span>)} */}
                    {time && (
                        <span>{time}</span>
                    )
                    }
                </div>
                <div className={styles.containerOpt}>
                    <Link to={`/private`}><BiMenu size={50} /></Link>
                    <Link to={`/rank`}><img src={rank} alt="Link para a página Ranking" height={'45px'} /></Link>
                    {/* <Link onClick={RestartPlayGame}><VscDebugRestart size={50} /></Link> */}
                </div>
            </div>
        </>
    )
}

export default Resultado