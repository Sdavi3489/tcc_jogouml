import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './layout/Navbar'
import './App.css'
import Questions from './components/Questions'
import Footer from './layout/Footer'

function App() {
  //const [count, setCount] = useState(0)
  // const questions = { "question": [
  //   { "id": 1, 
  //   "pergunta": "O que é caso de uso?", 
  //   "resposta": [{ "a": "É uma ação do usuário", "b": "Representa a ligação do usuário com o sistema", "c": "Serve como forma de relacionamento", "d": "É uma característica do ator"}],
  //   "certo": "a",
  //   "errado": ["b","c","d"]
  // }
  // ]}

  return (
    <>
      <Navbar/>
      <h1>Home</h1>
      <Questions/>

    </>
  )
}

export default App
