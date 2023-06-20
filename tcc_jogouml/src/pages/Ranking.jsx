import React from 'react'
import styles from '../styles/Ranking.module.css'
import { useState, useEffect } from 'react'

const Ranking = () => {

  const [rank, setRank] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/ranking`)
      .then(response => response.json())
      .then(data => {
        setRank(data);
        console.log(data.username, data.pontuacao);
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
            <th>Posição</th>
            <th>Username</th>
            <th>Pontuação</th>
          </tr>
          {
            rank.map((res, index) => {
              return <tr key={index}>
                <td>{index+1}</td>
                <td className={styles.user}>{res.username}</td>
                <td className={styles.score}>{res.pontuacao}</td>
              </tr>

            })
          }

        </table>
      </div>
    </>
  )
}

export default Ranking