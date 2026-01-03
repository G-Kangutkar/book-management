import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthProvider from './Components/AuthContext'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <AuthProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

   </Routes>

   </AuthProvider>
   
   </BrowserRouter>
      
      
  )
}

export default App
