import React, { useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FetchData from './pages/FetchData';
import Page404 from './pages/Page404';
import Navbar from './components/Navbar';
import './App.css'
import { ThemeContextCreated } from './pages/ThemeContext';
import { ToastContainer } from 'react-toastify';

const App = () => {
  // To use the context here in app.js
  const {theme, toggleTheme} = useContext(ThemeContextCreated);
  return (
    <div className={`App ${theme}`}>     
      <div className="">
        <BrowserRouter>
        <Navbar/>
        <ToastContainer/>
            <Routes>
            <Route path='/' element={<FetchData/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About heading="This is about Page" subheading="This is passed value in app.js"/>} />
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
        <div className="text-center p-3 bg-light shadow mt-3">
        <button className='btn btn-dark theme ' onClick={toggleTheme}>Change Theme</button>
        </div>
        </div>
    </div>
    )
  }

export default App