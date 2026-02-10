import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'
// import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

   <BrowserRouter>
   <AuthProvider>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      
   </Routes>

   </AuthProvider>
   
   </BrowserRouter>
      
      
  )
}

export default App
