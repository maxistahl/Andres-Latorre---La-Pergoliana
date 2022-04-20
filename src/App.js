import React from 'react';
import './style.css';

/* IMPORTAMOS DE react-router-dom */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

export default function App() {
  return (
    /* envolvemos todo en BrowserRouter */
    <BrowserRouter>
      {/* La Navbar afuera de Routes para que se muestre en todas las rutas */}
      <NavBar />

      {/* aca empiezan las rutas */}
      <Routes>
        {/* la HOME */}
        <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />

        {/* filtramos por categoria */}
        <Route
          path="/category/:catId"
          element={<ItemListContainer greeting={'FILTRADO'} />}
        />

        {/* vista de detalle */}
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />

        {/* para evitar navegar a rutas que no existen. pueden usar un mensaje de error en vez del navigate que reditecciona */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
