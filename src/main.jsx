import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

import "./scss/style.scss";

ReactDOM.createRoot(document.getElementById("container")).render(
  <React.StrictMode>
    <main className="main">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>,
)
