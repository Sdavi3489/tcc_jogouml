import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/ImageQuestion.module.css'
import Imgperg12_14 from "../assets/questions/questao-12-14.jpg";
import Imgperg15 from "../assets/questions/questao-15.jpg";
import Imgperg16 from "../assets/questions/questao-16.jpg";
import Imgperg17 from "../assets/questions/questao-17.jpg";
import Imgperg18 from "../assets/questions/questao-18.png";
import Imgperg19 from "../assets/questions/questao-19.png";
import Imgperg20 from "../assets/questions/questao-20.png";
import Imgperg21 from "../assets/questions/questao-21.png";
import Imgperg22 from "../assets/questions/questao-22.png";
import Imgperg23 from "../assets/questions/questao-23.png";
import Imgperg24 from "../assets/questions/questao-24.png";
import Imgperg25 from "../assets/questions/questao-25.png";
import Imgperg26 from "../assets/questions/questao-26.png";
import Imgperg28 from "../assets/questions/questao-28.png";

const ImageQuestion = ({perg, image}) => {
  console.log('prop: ', perg)
  console.log('img: ', image)
  const imgPergunta = [
    {
      "img": null
    },
    {
      "img": Imgperg12_14,
    },
    {
      "img": Imgperg12_14,
    },
    {
      "img": Imgperg12_14,
    },
    {
      "img": Imgperg15,
    },
    {
      "img": Imgperg16,
    },
    {
      "img": Imgperg17,
    },    
    {
      "img": Imgperg18,
    },    
    {
      "img": Imgperg19,
    },
    {
      "img": Imgperg20,
    },
    {
      "img": Imgperg21,
    },    
    {
      "img": Imgperg22,
    },    
    {
      "img": Imgperg23,
    },
    {
      "img": Imgperg24,
    },    
    {
      "img": Imgperg25,
    },
    {
      "img": Imgperg26,
    },
    {
      "img": null,
    },
    {
      "img": Imgperg28,
    }
  ]

  // useEffect(() => {
  //   fetch(`http://localhost:3000/question/${perg.perg}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setImgPerg(data[0].image);
  //       console.log('bd img',data[0].image);
  //     })
  //     .catch(error => {
  //       console.log('Ocorreu um erro:', error);
  //     });
  // }, [])

  return (
    <>
      {(image != null ? <img className={styles.QuestionImg} src={imgPergunta[perg].img} height={'200px'} />: <div style={{display: "none"}}>Sem imagem</div>)}
    </>
  )
}

export default ImageQuestion