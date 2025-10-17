import React from "react";
const Card = ({titulo,descricao,preco,img}) => {
  return (
    <div className="card">
      <div className="card__textos">
        <h2 className="card__titulo">{titulo}</h2>
        <p>
          {descricao}
        </p>
        <p className="card_preco">{preco}</p>
      </div>

      <div className="card__img">
        <img src={img} alt="burguer-picanha" />
      </div>
    </div>
  );
};

export default Card;
