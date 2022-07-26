import './App.css';
import Topnav from "./Components/Topnav"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  return (
      <BrowserRouter>
        <Topnav/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
