import './App.css';
import About from './components/About';
import Headers from './components/Headers';
import Home from './components/Home';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';

import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
