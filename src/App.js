
import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Performance from './Components/Performance/Performance';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/performance' element={<Performance/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
