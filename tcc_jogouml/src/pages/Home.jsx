import React, { useState, useEffect } from 'react'
import style from '../styles/Home.module.css'
import banner from "../assets/banner_jogo.jpg"
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Home = () => {
  const [username, setUsername] = useState(''); // informações do usuario
  const [password, setPassword] = useState(''); // senha
  //const [iduser, setIduser] = useState('');
  const [isValido, setIsvalido] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate()


  // function onChangeInput(event) {
  //   const { value, name } = event.target;

  //   setUsers({
  //     ...users,
  //     [name]: value,
  //   });
  // }

  async function onSubmitValues(e) {
    e.preventDefault();
    //const login = { "id_user": 1, "username": username, "hash": password}

    // //Função para criptografar o username
    // const criptoUsername = async (username) => {
    //   try {
    //     const salt = await bcrypt.genSalt(10); // Gerar um salt aleatório
    //     const hash = await bcrypt.hash(username, salt); // Gerar o hash da senha com o salt
    //     return hash;
    //   } catch (error) {
    //     throw new Error('Erro ao criptografar o username');
    //   }
    // };

    // // Criptografar o username durante o registro
    // const userCripto = await criptoUsername(username);
    // console.log('username criptografado:', userCripto);

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

    //console.log('Senha criptografada do map:', hashedPassword[0]);

    // Verificar a senha durante o processo de login
    const Comp_senha = await comparePassword(password, hashedPassword[0]);
    //console.log('Senha correta:', Comp_senha);

    if (Comp_senha) {
      console.log('Senha correta', Comp_senha);
      const infoLogin = { "id_user": userID[0], "username": username, "hash": hashedPassword[0] }
      //console.log('infologin', infoLogin);

      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoLogin),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data); // Dados retornados pela API após a requisição POST
        })
        .catch(error => {
          console.log('Ocorreu um erro:', error);
        });

      //navigate(`/play/${userID[0]}`);

      // REQUISIÇÃO GET PARA CRIAR O TOKEN E VALIDÁ-LO
      fetch(`http://localhost:3000/protegido`)
        .then(response => response.json())
        .then(data => {
          const val = data.valido
          console.log("É valido: ", val)
          localStorage.setItem('sessao', val);
          navigate(`/private`);
        })
        .catch(error => {
          //const verify = error.valido
          navigate(`/`);
          console.log('Não é válido:', error);
        });
    } else {
      setIsvalido(true);
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3000/user/${username}`)
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
          <img src={banner} alt="banner do site que representa um diagrama de caso de uso" height={'100%'} />
        </div>
        <div className={style.login}>
          <form action="" onSubmit={onSubmitValues}>
            <label className={style.userLabel}>Username: </label>
            <input className={style.ipt} type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label className={style.userLabel}>Senha: </label>
            <input className={style.ipt} type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className={style.btnEntrar} type='submit'>Entrar</button>
            <a className={style.registro} href="/register">Registre-se</a>
            {isValido && <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">
                <AlertTitle>Erro</AlertTitle>
                Senha ou Usuário incorreto — <strong>Tente novamente!</strong>
              </Alert>
            </Stack>}
          </form>
        </div>
      </div>
    </>
  )
}

export default Home