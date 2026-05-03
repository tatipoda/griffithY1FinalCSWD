// import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import Cardio from './components/pages/Cardio';
import './App.css'

function App() {
  return(
    <div className="root-layout">
    <Header/>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/cardio' element={<Cardio/>}/>
    </Routes>
    <Footer/>
    </div>

  );
}

export default App
