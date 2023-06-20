import React from 'react'
import { useState, useEffect } from 'react'
//import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';
//import { useState, useEffect } from 'react'
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());
import { Link, useNavigate } from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
import Navbar from '../layout/Navbar';


const Menu = () => {

  const [user, setUser] = useState('');
  // const [logout, setLogout] = useState(false);
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

  function onPlayGame(){
    return navigate(`/private/play/${user.id_user}`)
  }

  console.log(user.username)

  return (
    <>
      <h1>Olá {user.username}</h1>
      <button type="submit" onClick={onPlayGame}>Começar</button>


    </>
  )
}

export default Menu