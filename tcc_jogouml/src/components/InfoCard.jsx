import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const InfoCard = () => {

    const cardContent = [
        {
            title: "Aprenda a teoria e aplique na prática!",
            descricao: `Aprenda com base na resolução de situações 
                relacionadas ao desenvolvimento da modelagem de sistemas`
        },
        {
            title: "Caso tenha alguma dificuldade não tem problema!",
            descricao: `Você pode procurar por ajuda na página de instruções através de fontes confiáveis!`
        },
        {
            title: "Fique em primeiro lugar!",
            descricao: `Se você for o melhor no assunto tente a primeira colocação do nosso ranking!`
        }
    ]

    return (
        <>
            {/* <div className="containerCard">
                {
                    cardContent.forEach((e)=>{
                        return <><span className="title">{e.title}</span><p className="desc">{e.descricao}</p></>
                    })
                }
            </div> */}

            {
                cardContent.map((e, index) => {
                    return (<Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
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