import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
import Navbar from '../layout/Navbar';
import useCaseImage from '../assets/caso-de-uso-menu.jpg';
import style from '../styles/Menu.module.css';


const Menu = () => {

  const [user, setUser] = useState('');
  const [sumUC, setSumUC] = useState(false);
  const navigate = useNavigate();

  function OnLogout() {
    fetch(`http://localhost:3000/logout`)
      .then(response => response.json())
      .then(data => {
        const sair = data.logout
        console.log(sair)
        //navigate(`/private/${false}`);
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/protegido');
      const data = await response.json();
      console.log(data.user)
      setUser(data.user);
    };
    fetchData();
  }, []);

  function onPlayGame() {
    fetch('http://localhost:3000/Delresptemp', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
    return navigate(`/private/play/${user.id_user}`)
  }

  //console.log(user.username)

  return (
    <>
      <div className={style.containerMenu}>
        <h1>Olá {user.username}</h1>
        <div className={style.containerCards}>
          <div className={style.cardMenu}>
            <img className={style.imgMenu} src={useCaseImage} alt="Imagem do diagrama de caso de uso" onClick={() => sumUC ? setSumUC(false) : setSumUC(true)} />
            <span className={style.spanDesc}>Caso de Uso</span>
          </div>
        </div>
        {sumUC == true && (
          <div className={style.containerDet}>
            <details className={style.det}>
              <summary>Nível de dificuldade: </summary>
              <details className={style.det}>
                <summary>Iniciante: </summary>
                <ul className={style.coluna}>
                  <li className={style.linha}>Atores</li>
                  <li className={style.linha}>Caso de uso</li>
                  <li className={style.linha}>Relacionamentos</li>
                  <li className={style.linha}>Include</li>
                  <li className={style.linha}>Exclude</li><br />
                  <li className={style.linha}><button className={style.btnPlay} type="submit" onClick={onPlayGame}>Começar</button></li>
                </ul>
              </details>
            </details>
          </div>
        )
        }
      </div>
    </>
  )
}

export default Menu