import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes,Router} from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
 

function App() {
  const [count, setCount] = useState(0)

  return (

   <BrowserRouter>
   <AuthProvider>
    
      <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    theme="dark"
                    transition={Bounce}
                />
    <Routes>
       
      <Route path='/' element={<Login/>}/>
      {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      
   </Routes>

   </AuthProvider>
   
   </BrowserRouter>
      
      
  )
}

export default App
