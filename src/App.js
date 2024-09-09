import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] =useState('light');

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color='black';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor= 'darkslategrey';
      document.body.style.color='bisque';
    }

  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode = {toggleMode} />
      <div className='container my-3'>
      <Textform heading='Enter your text to analyze below' mode={mode} />
      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
