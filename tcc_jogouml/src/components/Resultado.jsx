import React from 'react'
import styles from '../styles/Resultado.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VscDebugRestart } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";
import bcrypt from 'bcryptjs';

const Resultado = () => {

    const { id, score } = useParams();
    const [result, setResult] = useState([]);
    const style_red = { backgroundColor: "#FF0000" }
    const style_green = { backgroundColor: "#008000" }
    const style_perg = { backgroundColor: "#333" }
    const navigate = useNavigate() // navega para o link definido quando o for acionado
    

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



    return (
        <>
            <div className={styles.containerResult}>
                <span className={styles.score}>Pontuação: {score}</span>
                <table className={styles.tableRes}>
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
                </table>
                <div className={styles.containerOpt}>
                    <Link to={`/private`}><BiMenu size={50} /></Link>
                    {/* <Link onClick={RestartPlayGame}><VscDebugRestart size={50} /></Link> */}
                </div>
            </div>
        </>
    )
}

export default Resultado