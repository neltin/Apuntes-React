import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/pagecontext">Contextos</NavLink>
          </li>
          <li>
            <NavLink to="/pageevent">Eventos</NavLink>
          </li>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/productos2">Firestore</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>          
        </ul>
      </nav>
    </div>
  );
}
