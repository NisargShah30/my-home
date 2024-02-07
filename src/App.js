import React from 'react'
import Header from './Comportant/Header/Header'
import Hero from './Comportant/Hero/Hero'
import './App.css'
import Compni from './Comportant/Compnis/Compni'
import Residense from './Comportant/Residense/Residense'
import Value from './Comportant/Value/Value'
import Contect from './Comportant/Contect/Contect'
import GetStarted from './Comportant/Getstarted/GetStarted'
import Footer from './Comportant/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <div>
      <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <Compni/>
      <Residense/>
      <Value/>
      <Contect/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
