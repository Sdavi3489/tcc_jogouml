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


const Menu = () => {

  const [user, setUser] = useState('');
  const [sumUC, setSumUC] = useState(false);
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Tab value: ")
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

    //sessionStorage.setItem('play', true);

    if (value == 0) {
      return navigate(`/private/play/${user.id_user}`)
    }
    if (value == 1) {
      return navigate(`/rank`)
    }

    //return navigate(`/private/play/${user.id_user}`)

  }

  //console.log(user.username)

  return (
    <>
      <div className={style.containerMenu}>
        <h1>Olá {user.username}</h1>
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