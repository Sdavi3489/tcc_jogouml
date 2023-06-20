import React from 'react'
import styles from '../styles/Resultado.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Resultado = () => {

    const { id, score } = useParams();
    const [result, setResult] = useState([]);
    const style_red = { backgroundColor: "#FF0000" }
    const style_green = { backgroundColor: "#008000" }


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
                console.log(data.score); // Dados retornados pela API após a requisição POST
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
                        <th>Resposta Correta</th>
                        <th>Sua Resposta</th>
                    </tr>
                    {
                        result.map((res, index) => {
                            return <tr key={index}>
                                <td style={style_green}>{res.resposta_correta}</td>
                                {(res.resposta_dada) == res.resposta_correta ? <td style={style_green}>{res.resposta_dada}</td> : <td style={style_red}>{res.resposta_dada}</td>}
                            </tr>

                        })
                    }
                </table>

            </div>
        </>
    )
}

export default Resultado