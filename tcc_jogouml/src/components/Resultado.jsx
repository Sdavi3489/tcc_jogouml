import React from 'react'
import styles from '../styles/Resultado.module.css'
import rank from "../assets/ranking-outline.svg"
import co01 from "../assets/conquistas/co01.jpg"
import co03 from "../assets/conquistas/co03.jpg"
import co04 from "../assets/conquistas/co04.jpg"
import co06 from "../assets/conquistas/co06.jpg"
import co07 from "../assets/conquistas/co07.jpg"
import tr01 from "../assets/conquistas/tr01.jpg"
import tr05 from "../assets/conquistas/tr05.jpg"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiAlliedStar } from "react-icons/gi";
import { FaGrinStars } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const Resultado = () => {

    const { id, score, acertos } = useParams();
    const [result, setResult] = useState([]);
    // const [getconq, setGetconq] = useState([]);
    // const [getUsername, setGetUsername] = useState('');
    const style_red = { backgroundColor: "#FF0000" }
    const style_green = { backgroundColor: "#008000" }
    const style_perg = { backgroundColor: "#333" }
    const style_emoji = { paddingRight: "15rem" }
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

    // useEffect(() => {
    //     fetch(`http://localhost:3000/getConq`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setGetconq(data);
    //             console.log("Data conquistas",data);
    //             console.log("conquista id",data.id_conquista);
    //         })
    //         .catch(error => {
    //             console.log('Ocorreu um erro:', error);
    //         });
    // }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/rank/${id}/${score}`, {
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
                    if(data[0].username == user){
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
                <span className={styles.score}>Pontuação: {score} <GiAlliedStar size={35} color='#699BF7' /></span>
                <div className={styles.contItens}>
                    <span className={styles.acertos} style={style_itens}>{acertos} Acertos</span>
                    <span className={styles.acertos}>Conquistas</span>
                </div>
                <div className={styles.conq}>
                    {/* <FaGrinStars size={50} color='#E4A951' style={style_emoji} /> */}
                    {m1 && (<img src={co01} height={'90px'} />)}
                    {m2 && (<img src={co03} height={'90px'} />)}
                    {m3 && (<img src={co04} height={'90px'} />)}
                    {m4 && (<img src={co07} height={'90px'} />)}
                    {m5 && (<img src={co06} height={'90px'} />)}
                    {t1 && (<img src={tr01} height={'90px'} />)}
                    {t5 && (<img src={tr05} height={'90px'} />)}

                </div>
                {/* <table className={styles.tableRes}>
                    <tr>
                        <th>Pergunta</th>
                        <th>Resposta Correta</th>
                        <th>Sua Resposta</th>
                    </tr>
                    {
                        result.map((res, index) => {
                            return <tr key={index}>
                                <td style={style_perg}>{index + 1}</td>
                                <td style={style_green}>{res.resposta_correta}</td>
                                {(res.resposta_dada) == res.resposta_correta ? <td style={style_green}>{res.resposta_dada}</td> : <td style={style_red}>{res.resposta_dada}</td>}
                            </tr>

                        })
                    }
                </table> */}
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