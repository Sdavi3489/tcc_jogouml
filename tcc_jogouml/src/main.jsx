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

// const [Autenticar, setAutenticar] = useState(false);

// const handleLogin = () => {
//   setAutenticar(true);
// };

// const handleLogout = () => {
//   setAutenticar(false);
// };


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
        path: '/result/:score',
        element: <Resultado />,
      },
      {
        path: '/private/play/:id_user',
        element: <PrivateRoute><User /></PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,

  ///////// Backup da pagina de intruções estou utilizando para criar uma rota protegida como teste depois mudar isto
  // {
  //   path: "rules",
  //   element: <Rules />,
  // },

  // {
  //   element: <PrivateRoute
  //     path="/rules"
  //     element={<Rules />}
  //     Autenticar={Autenticar}
  //     onLogout={handleLogout}
  //   />,
  // },

  // {
  //   path: "menu",
  //   element: <PrivateRoute><Menu/></PrivateRoute>,
  // },
)
