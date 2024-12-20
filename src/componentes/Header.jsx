import React, { useState } from "react";
import Menu from "./Menu";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery); 
  };

  return (
    <header className="header">
      <h1>⋅˚₊‧ ୨ Gatitos Adorables ୧ ‧₊˚ ⋅</h1>
      <Menu /> 
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Busca un gatito..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </header>
  );
}

export default Header;
