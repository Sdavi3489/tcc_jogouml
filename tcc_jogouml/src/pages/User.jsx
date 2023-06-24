import React from 'react'
import Questions from '../components/Questions'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id_user } = useParams();
  return (
    <>
      <Questions userID={id_user}/>
    </>
  )
}

export default User