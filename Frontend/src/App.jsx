 import React from 'react'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import{ BrowserRouter as Router} from 'react-router-dom';
  import './App.css';
 const App = () => {
   return (
     <Router>
       <Navbar/>
        <Hero/>
        <WorkoutSessions/>
        <Gallery/>
        <Pricing/>
        <Contact/>
        <BMICalculator/>
        <Footer/> 
        <ToastContainer position="top-center" autoClose={5000} theme='dark' newestOnTop={false} />
     </Router>
   )
 }
 
 export default App