import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './Login';
import Register from './Register';



function App() {
  
  return (
   
     

    <Router>
      <Navbar />
      

      <Routes>

     <Route path='/Login' element={<Login/>}> </Route>
     <Route path='/Register' element={<Register/>} > </Route>
     
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
