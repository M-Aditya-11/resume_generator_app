import React from "react"
import Navbar from "./components/Navbar/Navbar.jsx"
import {Route, Routes} from 'react-router-dom'
import ResumeTemplates from './pages/ResumeTemplates/ResumeTemplates.jsx'
import CoverLetters from './pages/CoverLetters/CoverLetters.jsx'
import Home from "./pages/Home/Home.jsx"

const App = () => {

  return (

    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/resume-templates' element={<ResumeTemplates/>}></Route>
        <Route path='/cover-letters' element={<CoverLetters/>}></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default App
