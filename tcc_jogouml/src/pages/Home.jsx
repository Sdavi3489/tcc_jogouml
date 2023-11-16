import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs';
import style from '../styles/Home.module.css'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import InfoCard from '../components/InfoCard';
import imgLogo from '../assets/logo-jogo-tcc-new.png'
import Footer from '../layout/Footer';

const Home = () => {
  const [username, setUsername] = useState(''); // informações do usuario
  const [password, setPassword] = useState(''); // senha
  const [isValido, setIsvalido] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate()
  const apiURL = import.meta.env.VITE_REACT_APP_API_URL; // url da api


  async function onSubmitValues(e) {
    e.preventDefault();

    // Função para verificar a senha
    const comparePassword = async (password, hash) => {
      try {
        const match = await bcrypt.compare(password, hash); // Comparar a senha fornecida com o hash armazenado
        return match;
      } catch (error) {
        throw new Error('Erro ao verificar a senha');
      }
    };

    const userID = user.map((u) => u.id_user); // Retorna o id de usuário
    const hashedPassword = user.map((u) => u.hash); // Retorna a senha criptografada


    // Verificar a senha durante o processo de login
    const Comp_senha = await comparePassword(password, hashedPassword[0]);

    if (Comp_senha) {
      console.log('Senha correta', Comp_senha);
      const infoLogin = { "id_user": userID[0], "username": username, "hash": hashedPassword[0] }

      fetch(`${apiURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoLogin),
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data); // Dados retornados pela API após a requisição POST
        })
        .catch(error => {
          console.log('Ocorreu um erro:', error);
        });

      // REQUISIÇÃO GET PARA CRIAR O TOKEN E VALIDÁ-LO
      fetch(`${apiURL}/protegido`)
        .then(response => response.json())
        .then(data => {
          const val = data.valido
          // console.log("É valido: ", val)
          localStorage.setItem(`auth`, val);
          navigate(`/private`);
        })
        .catch(error => {
          navigate(`/`);
          console.log('Não é válido:', error);
        });
    } else {
      setIsvalido(true);
    }
  }

  useEffect(() => {
    fetch(`${apiURL}/user/${username}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        //console.log(setUser);
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
  }, [username])

  return (
    <>
      <div className={style.containerHome}>
        <div className={style.banner}>
          <img className={style.imageLogo} src={imgLogo} alt="Logo do site" />
          <h2 className={style.title}>Aprenda UML na prática!</h2>
          <p className={style.desc}>Aprenda sobre modelagem UML e saiba com aplicar em situações de sistemas reais!</p>
          <p className={style.descReg}>Não possui registro?</p>
          <Link className={style.regs} to="/register">Registre-se</Link>
        </div>
        <div className={style.login}>
          <form action="" onSubmit={onSubmitValues}>
            <label className={style.userLabel}>Username: </label>
            <input className={style.ipt} type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label className={style.userLabel}>Senha: </label>
            <input className={style.ipt} type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className={style.btnEntrar} type='submit'>Entrar</button>
            {isValido && <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">
                <AlertTitle>Erro</AlertTitle>
                Senha ou Usuário incorreto — <strong>Tente novamente!</strong>
              </Alert>
            </Stack>}
          </form>
        </div>
      </div>
      <div className={style.containerCards}>
        <InfoCard></InfoCard>
      </div>
    </>
  )
}

export default Home