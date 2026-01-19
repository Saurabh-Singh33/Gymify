import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Contact from './Components/Contact'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import WorkoutSessions from './Components/WorkoutSession'
import Gallery from './Components/Gallery'
import BMICalculator from './Components/BMICalculator'

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="dark"
        newestOnTop={false}
      />
    </Router>
  )
}

export default App
