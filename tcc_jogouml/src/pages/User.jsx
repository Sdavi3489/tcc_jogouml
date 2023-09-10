import React from 'react'
import Questions from '../components/Questions'
import QuestionsInt from '../components/QuestionsInt';
import { useParams } from 'react-router-dom'

const User = () => {
  const { id_user, nivel} = useParams();
  return (
    <>
      {nivel == 0 &&(<Questions userID={id_user}/>)}
      {nivel == 1 &&(<QuestionsInt userID={id_user}/>)}
    </>
  )
}

export default User