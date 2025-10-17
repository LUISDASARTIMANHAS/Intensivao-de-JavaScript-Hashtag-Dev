import React from "react";
import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";

const Cards = ({numCategoriaSelecionada}) => {
  const itensCategorias = [pratosPrincipais, sobremesas, bebidas];
  const cartegoriaSelecionada = itensCategorias[numCategoriaSelecionada];
  return (
    <div className="cards">
      {cartegoriaSelecionada.map((produto) => (
        <Card
          titulo={produto.nome}
          descricao={produto.descricao}
          preco={produto.preco}
          img={produto.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
