import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './assets/pages/About'
import Skills from './assets/pages/Skills'
import Projects from './assets/pages/Projects'
import Contact from './assets/pages/Contact'
import Home from './assets/pages/Home'
import PageNotFound from './assets/pages/PageNotFound'
import NabarComp from './components/NabarComp'
import LoginPage from './assets/pages/LoginPage'
const App = () => {
  return (
    <>
      
    <BrowserRouter>
      <NabarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      
        <Route path='*' element={<PageNotFound/>}/>
       

      

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App