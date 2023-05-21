import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import User from './pages/User.jsx'
import Home from './pages/Home.jsx'
import Rules from './pages/Rules.jsx'
import Ranking from './pages/Ranking.jsx'

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
        path: 'rank',
        element: <Ranking/>,
      },
      {
        path: '/play/:id_user',
        element: <User/>,
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
)
