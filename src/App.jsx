import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Seccion from "./componentes/Seccion";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (query) => {
    setSearchResults(`Resultados de búsqueda para: "${query}"`);
  };

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        {searchResults && <p className="search-results">{searchResults}</p>}
        <Routes>
          <Route
            path="/"
            element={
              <Seccion
                titulo="Inicio"
                descripcion="¡Bienvenido a la página principal!"
                imgSrc="/images/gato1.png"
                textoAdicional="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla leo a neque luctus, a consectetur eros bibendum. Vivamus efficitur, libero vel pharetra accumsan, mi tortor consectetur sapien, at eleifend nulla eros eget velit. Sed nec lectus purus. Nullam convallis est a nulla hendrerit, at tempus nulla iaculis. Maecenas tincidunt nisi vel felis consequat fringilla. Praesent aliquet, lacus id tempor vulputate, enim metus pulvinar libero, in gravida nisl risus sed purus. Aliquam sit amet sapien vel elit convallis aliquam non non purus. In non tellus vitae odio tempus interdum. Nulla facilisi. Cras porta fermentum metus, id sagittis mi scelerisque et. Donec feugiat nisl non ante ullamcorper, vel sodales justo aliquam. Fusce a turpis eu sapien sagittis vestibulum ac nec arcu. Etiam dapibus libero vel urna ullamcorper, at tempus sapien egestas. Nam ut vestibulum neque. Morbi feugiat, elit vel vehicula condimentum, arcu risus scelerisque risus, sit amet fermentum justo arcu at nulla."
                imgSrcAdicional="/images/gato5.jpg"
              />
            }
          />
          <Route
            path="/seccion1"
            element={
              <Seccion
                titulo="Sección 1"
                descripcion="Este es un gatito adorable de la sección 1."
                imgSrc="/images/gato2.jpeg"
                textoAdicional="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla leo a neque luctus, a consectetur eros bibendum. Vivamus efficitur, libero vel pharetra accumsan, mi tortor consectetur sapien, at eleifend nulla eros eget velit. Sed nec lectus purus. Nullam convallis est a nulla hendrerit, at tempus nulla iaculis. Maecenas tincidunt nisi vel felis consequat fringilla. Praesent aliquet, lacus id tempor vulputate, enim metus pulvinar libero, in gravida nisl risus sed purus. Aliquam sit amet sapien vel elit convallis aliquam non non purus. In non tellus vitae odio tempus interdum. Nulla facilisi. Cras porta fermentum metus, id sagittis mi scelerisque et. Donec feugiat nisl non ante ullamcorper, vel sodales justo aliquam. Fusce a turpis eu sapien sagittis vestibulum ac nec arcu. Etiam dapibus libero vel urna ullamcorper, at tempus sapien egestas. Nam ut vestibulum neque. Morbi feugiat, elit vel vehicula condimentum, arcu risus scelerisque risus, sit amet fermentum justo arcu at nulla."
                imgSrcAdicional="/images/gato6.jpeg"
              />
            }
          />
          <Route
            path="/seccion2"
            element={
              <Seccion
                titulo="Sección 2"
                descripcion="Este es un gatito juguetón en la sección 2."
                imgSrc="/images/gato9.png"
                textoAdicional="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla leo a neque luctus, a consectetur eros bibendum. Vivamus efficitur, libero vel pharetra accumsan, mi tortor consectetur sapien, at eleifend nulla eros eget velit. Sed nec lectus purus. Nullam convallis est a nulla hendrerit, at tempus nulla iaculis. Maecenas tincidunt nisi vel felis consequat fringilla. Praesent aliquet, lacus id tempor vulputate, enim metus pulvinar libero, in gravida nisl risus sed purus. Aliquam sit amet sapien vel elit convallis aliquam non non purus. In non tellus vitae odio tempus interdum. Nulla facilisi. Cras porta fermentum metus, id sagittis mi scelerisque et. Donec feugiat nisl non ante ullamcorper, vel sodales justo aliquam. Fusce a turpis eu sapien sagittis vestibulum ac nec arcu. Etiam dapibus libero vel urna ullamcorper, at tempus sapien egestas. Nam ut vestibulum neque. Morbi feugiat, elit vel vehicula condimentum, arcu risus scelerisque risus, sit amet fermentum justo arcu at nulla."
                imgSrcAdicional="/images/gato7.jpg"
              />
            }
          />
          <Route
            path="/seccion3"
            element={
              <Seccion
                titulo="Sección 3"
                descripcion="Estos gatitos están en la sección 3, ¡muy tierno!"
                imgSrc="/images/gato4.jpeg"
                textoAdicional="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla leo a neque luctus, a consectetur eros bibendum. Vivamus efficitur, libero vel pharetra accumsan, mi tortor consectetur sapien, at eleifend nulla eros eget velit. Sed nec lectus purus. Nullam convallis est a nulla hendrerit, at tempus nulla iaculis. Maecenas tincidunt nisi vel felis consequat fringilla. Praesent aliquet, lacus id tempor vulputate, enim metus pulvinar libero, in gravida nisl risus sed purus. Aliquam sit amet sapien vel elit convallis aliquam non non purus. In non tellus vitae odio tempus interdum. Nulla facilisi. Cras porta fermentum metus, id sagittis mi scelerisque et. Donec feugiat nisl non ante ullamcorper, vel sodales justo aliquam. Fusce a turpis eu sapien sagittis vestibulum ac nec arcu. Etiam dapibus libero vel urna ullamcorper, at tempus sapien egestas. Nam ut vestibulum neque. Morbi feugiat, elit vel vehicula condimentum, arcu risus scelerisque risus, sit amet fermentum justo arcu at nulla."
                imgSrcAdicional="/images/gato8.png"
              />
            }
          />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
