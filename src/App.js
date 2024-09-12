import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (mssg, type) => {
    setAlert({
      message: mssg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode is enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'darkslategrey';
      document.body.style.color = 'bisque';
      showAlert("Dark Mode is enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform heading="Enter text to analyze" mode={mode} alert={showAlert} />} />
          </Routes>
      </div>
      </Router>
   
  );
}

export default App;
