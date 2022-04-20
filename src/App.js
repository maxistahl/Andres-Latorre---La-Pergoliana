import React from 'react';
import './style.css';

/* IMPORTAMOS DE react-router-dom */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar  from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer  from './components/ItemDetailContainer';
import SizeClothes from "./pages/SizeClothes"
import Contact from "./pages/Contact"
import AboutUs from "./pages/AboutUs"

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
        <Route path="/category/:catId" element={<ItemListContainer greeting={'FILTRADO'}/>}/>
        {/* vista de detalle */}
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        {/*rutas que no existen se redireccionan */}
        <Route path="*" element={<Navigate to="/" />} />
        {/*Tabla de medidas */}
        <Route path="/Size" element={<SizeClothes/>} />
        {/*Contacto */}
        <Route path="/Contact" element={<Contact/>} />
         {/*Contacto */}
        <Route path="/AboutUs" element={<AboutUs/>} />

      </Routes>
    </BrowserRouter>
  );
}
