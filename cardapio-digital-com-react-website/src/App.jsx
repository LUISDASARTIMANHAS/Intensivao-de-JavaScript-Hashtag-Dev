import React, { useState } from "react";
import "./App.css";
import Categorias from "./components/Categorias";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
function App() {
  // hooks
  // Variável de estado
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  // Forma correta
  // setNumCategoriaSelecionada(1)
  return (
    <div className="container">
      <Banner />

      <Categorias numCategoriaSelecionada={numCategoriaSelecionada} setNumCategoriaSelecionada={setNumCategoriaSelecionada}/>

      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
}

export default App;
