import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import Work from './views/Work';
import './app.css';


function App() {



    return (
        <div className="App">
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/work" element={<Work />} /> 
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
                
            </div>
        </div>
    );
}

export default App;
