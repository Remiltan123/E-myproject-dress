
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCatelog } from './pages/ShopCatelog';
import { Product } from './pages/Product';
import { Loginpage } from './pages/Loginpage';
import { Cart } from './pages/Cart';
import { Shop } from './pages/Shop';
import { Fotter } from './Components/Fotter/Fotter';
import menbanner from "./Components/Assets/banner_mens.png"
import womenbaner from "./Components/Assets/banner_women.png"
import kidsbaner from "./Components/Assets/banner_kids.png"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCatelog category ="men" banner ={menbanner}/>}></Route>
          <Route path='/womens' element={<ShopCatelog category ="women" banner ={womenbaner}/>}></Route>
          <Route path='/kids' element={<ShopCatelog category ="Kid" banner ={kidsbaner}/>}></Route>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}></Route>
          </Route>
          <Route path='/login' element={<Loginpage/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          
        </Routes>
        <Fotter/>

      </BrowserRouter>
      
    </>
  );
}

export default App;
