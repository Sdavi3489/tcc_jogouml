import { useState } from 'react'
import Navbar from './layout/Navbar'
import './App.css'
import Footer from './layout/Footer'
import Add_question from './pages/Add_question'
import { useLocation ,Outlet } from 'react-router-dom'
import NavBarHome from './layout/NavBarHome'

function App() {
  const location = useLocation();
  const renderNavBar = location.pathname != '/' && location.pathname != '/register';
  const renderNavBarHome = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {renderNavBar && <Navbar/>}
      {renderNavBarHome && <NavBarHome/>}
      <Outlet/>
      <Footer/>
      <Add_question></Add_question>
    </>
  )
}

export default App
