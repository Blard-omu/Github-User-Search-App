import React, { useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FetchData from './pages/FetchData';
import Navbar from './components/Navbar';
import './App.css'
import { ThemeContextCreated } from './pages/ThemeContext';

const App = () => {
  // To use the context here in app.js
  const {theme, toggleTheme} = useContext(ThemeContextCreated);
  return (
    <div className={`App ${theme}`}>
      <div className="">
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
        <div className="text-center p-3 bg-light shadow mt-3">
        <button className='btn btn-dark theme ' onClick={toggleTheme}>Change Theme</button>
        </div>
        </div>
    </div>
    )
  }

export default App