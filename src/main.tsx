import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login.tsx"
import Main from "./components/Main.tsx"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
