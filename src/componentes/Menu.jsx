import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">౨ৎ Inicio</Link></li>
        <li><Link to="/seccion1">౨ৎ Sección 1</Link></li>
        <li><Link to="/seccion2">౨ৎ Sección 2</Link></li>
        <li><Link to="/seccion3">౨ৎ Sección 3</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
