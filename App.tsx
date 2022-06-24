import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import PageContext from './pages/PageContext';
import Profile from './pages/Profile';
import PageEvent from './pages/PageEvent';
import Productos from './pages/Productos';
import Productos2 from './pages/Productos2';
import ProductoId from './pages/ProductoId';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagecontext" element={<PageContext />} />
          <Route path="/pageevent" element={<PageEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route exact path="/productos/:id" element={<ProductoId />} />
          <Route exact path="/Productos2" element={<Productos2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
