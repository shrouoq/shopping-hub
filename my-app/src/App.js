import React from 'react'
import './App.css'
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/Home/home';
import NavBar from './components/NavBar/Nav';
import Footer from './components/Footer/footer';
import ItemsContainer from './containers/items';
import SelectedItems from './components/SelectedItems/SelectedItems';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:name' element={<ItemsContainer/>} />
          <Route path='/select' element={<SelectedItems/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
