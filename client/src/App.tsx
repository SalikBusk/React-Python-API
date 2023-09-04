import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

const Layout = () => {
  return(
    <div>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <div></div>,
      }
    ],
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
