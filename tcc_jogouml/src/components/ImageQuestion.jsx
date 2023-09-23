import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/ImageQuestion.module.css'
import Imgperg11_13 from "../assets/questions/questao-11-13.jpg";
import Imgperg14 from "../assets/questions/questao-14.jpg";
import Imgperg15 from "../assets/questions/questao-15.jpg";
import Imgperg16 from "../assets/questions/questao-16.jpg";

const ImageQuestion = ({perg, image}) => {
  console.log('prop: ', perg)
  console.log('img: ', image)
  const imgPergunta = [
    {
      "img": Imgperg11_13,
    },
    {
      "img": Imgperg11_13,
    },
    {
      "img": Imgperg11_13,
    },
    {
      "img": Imgperg14,
    },
    {
      "img": Imgperg15,
    },
    {
      "img": Imgperg16,
    },
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