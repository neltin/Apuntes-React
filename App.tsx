import React, { useState } from 'react';
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
  const [nota, setNota] = useState(true);

  return (
    <div>
      <h1>Hola!</h1>
      {nota ? (
        <div>
          <button
            onClick={function () {
              setNota(!nota);
            }}
          >
            x
          </button>
          <p>
            Gracias por la visita, revisen deteniadamente los archivos no hay un
            orden real, se fue haciendo como fui viendo cosas.
          </p>
          <p>
            Entren a la carpeta <strong>Apuntes</strong> esta detallado a mis
            palabras cada punto que me parece importante.
          </p>
        </div>
      ) : (
        <p>
          Visitame en{' '}
          <a href="https://github.com/" target="_blank">
            GitHub
          </a>{' '}
          o{' '}
          <a href="https://www.linkedin.com" target="_blank">
            LinkedIn
          </a>
        </p>
      )}
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
