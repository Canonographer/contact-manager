import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './bootstrap.min.css'
function App() {
  

  return (
    <>
      <Home/>
      <ToastContainer/>
    </>
  )
}

export default App
