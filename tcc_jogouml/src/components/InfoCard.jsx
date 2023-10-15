import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import lupa from '../assets/imgHome/lupa.png';
import medal from '../assets/imgHome/medal.png';
import quiz from '../assets/imgHome/quiz.png';

const InfoCard = () => {

    const cardContent = [
        {
            img: quiz,
            alt: "imagem representativa de um quiz",
            title: "Aprenda a teoria e aplique na prática!",
            descricao: `Aprenda com base na resolução de situações 
                relacionadas ao desenvolvimento da modelagem de sistemas`
        },
        {
            img: lupa,
            alt: "imagem representativa de uma lupa",
            title: "Caso tenha alguma dificuldade não tem problema!",
            descricao: `Você pode procurar por ajuda na página de instruções através de fontes confiáveis!`
        },
        {
            img: medal,
            alt: "imagem representativa de uma medalha",
            title: "Fique em primeiro lugar!",
            descricao: `Se você for o melhor no assunto tente a primeira colocação do nosso ranking!`
        }
    ]

    return (
        <>
            {
                cardContent.map((e, index) => {
                    return (<Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image= {e.img}
                                alt= {e.alt}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {e.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {e.descricao}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>)
                })
            }
        </>
    )
}

export default InfoCard