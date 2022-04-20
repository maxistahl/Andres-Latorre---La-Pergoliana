import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/logo"
//uso de categorias en un array para que puedan ser dinamicas en un futuro. irian en la NavBar ej: traerlas de una base de datos

/*
*/

export const NavBar = () => {
  const categories = [
    { id: '1000', address: '/', text: 'Productos' },
    { id: '1001', address: '/category/kimono', text: 'kimono' },
    { id: '1002', address: '/category/bata', text: 'bata' },
    { id: '1003', address: '/category/panuelo', text: 'pañuelo' },
    { id: '1004', address: '/', text: 'Tabla de medidas' },
    { id: '1005', address: '/', text: 'nosotras' },
    { id: '1006', address: '/', text: 'contactanos' }
  ];

  return (
    <div className="logo-navbar">
      <Link to={`/`}>
          <div className="container-logo">
              <img src={Logo} alt="Logo" className="logo"/>
          </div>
      </Link>
      <section style={{ background: 'lightgray' }}>
        {categories.map((cat) => {
          return (
            <div className="links" key={cat.id}>
              <NavLink
                to={cat.address}
                className={({ isActive }) => (isActive ? 'activeClass' : '')}
              >
                {cat.text}
              </NavLink>

            </div>
          );
        })}
      </section>
    </div>
  );
};