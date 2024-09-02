import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
function App() {

  return (
    <>
      <Navbar title='TextUtils'/>
      <div className='container my-3'>
      <Textform heading='Enter your text to analyze below' />
      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
