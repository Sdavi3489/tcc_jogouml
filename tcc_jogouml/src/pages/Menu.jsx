import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../layout/Navbar';
import useCaseImage from '../assets/caso-de-uso-menu.jpg';
import style from '../styles/Menu.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import bcrypt from 'bcryptjs';


const Menu = () => {

  const [user, setUser] = useState('');
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  localStorage.removeItem('inGame'); // remove sessão do jogo caso esteja em aberto no navegador e caso o usuario resolva voltar para o menu
  localStorage.removeItem('User'); // remove nome de usuario da sessão que jogou anteriormente
  localStorage.removeItem('time'); // remove o tempo feito na sessão anterior
  
  for (let index = 0; index < 12; index++) {
    localStorage.removeItem(`co0${index}`);// remove o localStorage das conquistas
    localStorage.removeItem(`tr0${index}`);// remove o localStorage das trofeus
  }


  const handleChange = (event, newValue) => {
    setValue(newValue); // muda o valor do nível do jogo
    //console.log("Tab value: ", value)
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/protegido');
      const data = await response.json();
      console.log(data.user)
      setUser(data.user);
    };
    fetchData();
  }, []);

  async function onPlayGame() {
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


    //Função para criptografar o username
    const criptoUsername = async (username) => {
      try {
        const salt = await bcrypt.genSalt(10); // Gerar um salt aleatório
        const hash = await bcrypt.hash(username, salt); // Gerar o hash da senha com o salt
        return hash;
      } catch (error) {
        throw new Error('Erro ao criptografar o username');
      }
    };

    // Criptografar o username durante o registro
    const userCripto = await criptoUsername(user.username);
    console.log('username criptografado:', userCripto);

    
    //value == 0 significa que o nivel esta no iniciante
    if (value == 0) {
      localStorage.setItem('inGame',userCripto);
      localStorage.setItem('User', user.username);
      return navigate(`/private/play/${user.id_user}/${value}`)
    }
    //value == 1 significa que o nivel esta no intermediário
    if (value == 1) {
      localStorage.setItem('inGame',userCripto);
      localStorage.setItem('User', user.username);
      return navigate(`/private/play/${user.id_user}/${value}`)
    }

    //return navigate(`/private/play/${user.id_user}`)

  }

  //console.log(user.username)

  return (
    <>
      <div className={style.containerMenu}>
        <span className={style.spanInfo}>Olá {user.username}</span>
        <div className={style.containerCards}>
          <div>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={useCaseImage}
                  alt="Imagem do diagrama de caso de uso"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Caso de uso
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Esta sessão contém conteúdo sobre:
                    Atores,
                    Caso de uso,
                    Relacionamentos,
                    Include,
                    Exclude
                  </Typography>
                </CardContent>
                <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                  <Tab label="Iniciante" />
                  <Tab label="Intermediário" />
                </Tabs>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="primary" onClick={onPlayGame}>
                  Começar
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div >
    </>
  )
}

export default Menu