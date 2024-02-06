import { useState } from 'react'
import './App.css'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSighup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Componets/Footer/Footer';
import men_banner from './Componets/Assets/banner_mens.png'
import women_banner from './Componets/Assets/banner_women.png'
import Navbar from './Componets/Navbar/Navbar';
import kid_banner from './Componets/Assets/banner_kids.png';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div> 
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path="/product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter> 
    </div>
  );
}

export default App;