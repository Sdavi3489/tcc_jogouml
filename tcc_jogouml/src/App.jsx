import { useState } from 'react'
import Navbar from './layout/Navbar'
import './App.css'
import Footer from './layout/Footer'
import Add_question from './pages/Add_question'
import { useLocation, Outlet } from 'react-router-dom'
import NavBarHome from './layout/NavBarHome'

function App() {
  const location = useLocation();
  const renderNavBar = location.pathname != '/' && location.pathname != '/register' && location.pathname != '/rules' && location.pathname != '/rules/caso-de-uso' && location.pathname != '/sobre';
  const renderNavBarHome = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/rules' || location.pathname === '/rules/caso-de-uso' || location.pathname === '/sobre';

  return (
    <>
      {/* {renderNavRules && <NavBarHome />} */}
      {renderNavBarHome && <NavBarHome />}
      {renderNavBar && <Navbar />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
