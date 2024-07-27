import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Cart from './component/Cart';
import Nav from './component/Nav';
import { useState } from 'react';
import Admin from './component/Admin';

function App() {

  
  return <div>
    <Nav />
    <Routes>
  
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  </div>
}

export default App;
