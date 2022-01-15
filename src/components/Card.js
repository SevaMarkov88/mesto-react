import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button type="button" aria-label="Удалить карточку" className="element__trash"/>
      <img className="element__image" alt={props.card.name} src={props.card.link} onClick={handleCardClick}/>
      <div className="element__text">
        <h2 className="element__title">{props.card.name}</h2>
        <button className="element__like" aria-label="Поставить лайк" type="button"/>
        <p className="element__counter">{props.card.likes.length}</p>
      </div>
    </article>
  )
}

export default Card;
