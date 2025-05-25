import { useState } from 'react'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
