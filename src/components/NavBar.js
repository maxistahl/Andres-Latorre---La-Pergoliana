import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Cart from './Cart';

import Logo from "../assets/logo.svg"

//carga de navbar de manera dinamica

const NavBar = () => {
  const categories = [
    { id: '1000', address: '/products', text: 'Productos' },
    { id: '1001', address: '/category/kimonos', text: 'kimonos' },
    { id: '1002', address: '/category/batas', text: 'batas' },
    { id: '1003', address: '/category/pañuelos', text: 'pañuelos' },
    { id: '1004', address: '/Size', text: 'Tabla de medidas' },
    { id: '1005', address: '/AboutUs', text: 'nosotras' },
    { id: '1006', address: '/Contact', text: 'contactanos' }
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
      <div className='Cart'>
        <Cart/>
      </div>
    </div>
  );
};

export default NavBar;