import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FetchData from './pages/FetchData';
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/' element={<FetchData/>}/>
            </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
    </div>
    )
  }

export default App