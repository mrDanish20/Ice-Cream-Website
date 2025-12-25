import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Banner from './Components/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Flavors from './Components/Flavors';
import Specials from './Components/Specials';
import About from './Components/About';

function App() {
  return (
     <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Flavors' element={<Flavors />}/>
      <Route path='/Specials' element={<Specials />}/>
      <Route path='/About' element={<About />}/>
</Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;
