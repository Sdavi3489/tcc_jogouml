import React from 'react'
import styles from '../styles/Ranking.module.css'
import { useState, useEffect } from 'react'

const Ranking = () => {
  localStorage.removeItem('User'); // remove nome de usuario da sessão que jogou anteriormente
  localStorage.removeItem('time'); // remove o tempo feito na sessão anterior
  const [rank, setRank] = useState([]);
  const apiURL = import.meta.env.VITE_REACT_APP_API_URL; // url da api
  for (let index = 0; index < 12; index++) {
    localStorage.removeItem(`co0${index}`);
    localStorage.removeItem(`tr0${index}`);
  }

  useEffect(() => {
    fetch(`${apiURL}/ranking`)
      .then(response => response.json())
      .then(data => {
        setRank(data);
        // console.log(data[0]);
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
  }, [])

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.Title}>Ranking</h1>
        <table className={styles.tableRanking}>
          <tr>
            <th className={styles.thRank}>Posição</th>
            <th className={styles.thRank}>Pontuação</th>
            <th className={styles.thRank}>Username</th>
          </tr>
          {
            rank.map((res, index) => {
              return <tr key={index}>
                <td>{index+1}</td>
                <td className={styles.score}>{res.pontuacao}</td>
                <td className={styles.user}>{res.username}</td>
              </tr>

            })
          }

        </table>
      </div>
    </>
  )
}

export default Ranking