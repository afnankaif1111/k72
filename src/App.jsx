import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents1'
import Projects from './pages/projects'

const App = () => {
  return (

    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/projects' element={<Projects/> } />
        
      </Routes>
    </div>
  )
}

export default App