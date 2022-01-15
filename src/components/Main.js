import React from "react";
import EditAvatar from "../images/profile_photo_edit.svg"
import api from "../utils/utils"
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(({name, about, avatar, _id}) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar)
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then(cardsFromServer => setCards(cardsFromServer))
  }, [])

  return (
    <main className="main">

      <section className="profile">
        <div className="profile__popup">
          <img src={EditAvatar} alt="Редактировать профиль" onClick={props.onEditAvatar}/>
        </div>
        <img src={userAvatar} alt="Фото профиля" className="profile__image"/>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
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
            />
          )
        })}
      </section>

    </main>
  )
}

export default Main;
