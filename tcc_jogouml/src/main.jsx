import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './pages/User.jsx'
import Home from './pages/Home.jsx'
import Rules from './pages/Rules.jsx'
import Ranking from './pages/Ranking.jsx'
import Resultado from './components/Resultado.jsx'
import Register from './pages/Register.jsx'
import { useState } from 'react';
import PrivateRoute from './Routes/PrivateRoute.jsx'
import Menu from './pages/Menu.jsx'
import GameOver from './components/GameOver.jsx'
import PrivateRouteGame from './Routes/PrivateRouteGame.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
      {
        path: "private",
        element: <PrivateRoute><Menu /></PrivateRoute>,
      },
      {
        path: 'rank',
        element: <Ranking />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '/private/result/:id/:score/:acertos',
        element: <PrivateRouteGame><Resultado /></PrivateRouteGame>,
      },
      {
        path: '/private/play/:id_user',
        element: <PrivateRouteGame><User /></PrivateRouteGame>,
      },
      {
        path: '/private/gameover',
        element: <PrivateRouteGame><GameOver/></PrivateRouteGame>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
