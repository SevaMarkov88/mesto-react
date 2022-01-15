import React from "react";
import '../index.css';
import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from "./PopupAddCard";
import PopupAvatarEdit from "./PopupAvatarEdit";
import PopupSubmitDelete from "./PopupSubmitDelete";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">

    <div className="page__container">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
    </div>

    <PopupEditProfile
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    />
    <PopupAddCard
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    />
    <PopupAvatarEdit
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    />
    <PopupSubmitDelete/>
    <ImagePopup
      isOpen={isImagePopupOpen}
      card={selectedCard}
      onClose={closeAllPopups}
    />

    </div>
  );
}

export default App;
