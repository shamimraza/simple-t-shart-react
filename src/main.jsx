import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componentes/Home/Home';
import Main from './componentes/Layout/Main';
import OrderReview from './componentes/OrderReview/OrderReview';
import Grandapa from './componentes/Grandpa/Grandapa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path:'/review',
        element: <OrderReview></OrderReview>
      },
      {
        path:'/grandpa',
        element:<Grandapa></Grandapa>
      }
    ]
  }
    
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
