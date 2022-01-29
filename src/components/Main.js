import React from "react";
import EditAvatar from "../images/profile_photo_edit.svg"
import {api} from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((newCard) => {
        setCards((state) => state.filter((c) => c._id === card._id ? newCard : c))
      })
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then(cardsFromServer => setCards(cardsFromServer))
  }, [])

  return (
    <main className="main">

      <section className="profile">
        <div className="profile__popup" onClick={props.onEditAvatar}>
          <img src={EditAvatar} alt="Редактировать профиль"/>
        </div>
        <img src={currentUser.avatar} alt="Фото профиля" className="profile__image"/>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button className="profile__button-edit" aria-label="Редактировать профиль" type="button"
                  onClick={props.onEditProfile}/>
        </div>
        <button className="profile__button-add" aria-label="Добавить профиль" type="button"
                onClick={props.onAddPlace}/>
      </section>


      <section className="elements">
        {cards.map((item, index) => {
          return (
            <Card
              card={item}
              cardIndex={index}
              key={item._id}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )
        })}
      </section>

    </main>
  )
}

export default Main;
