import { useState } from 'react'
import Navbar from './layout/Navbar'
import './App.css'
import Questions from './components/Questions'
import Footer from './layout/Footer'
import Add_question from './pages/Add_question'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <hr />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
