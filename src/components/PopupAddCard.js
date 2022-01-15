import PopupWithForm from "./PopupWithForm";

function PopupAddCard(props) {
  return (
    <PopupWithForm name="add-card" title="Новое место" isOpen={props.isOpen ? "popup_opened" : ""}
                   onClose={props.onClose}>
      <form action="#" className="popup__form form-add" noValidate>
        <input type="text" id="input-title" className="popup__text popup__text_input-type_title" placeholder="Название"
               autoFocus minLength="2" maxLength="30" required autoComplete="off" name="title"/>
          <span className="input-title-error popup__span-error"/>
          <input type="url" id="input-link" className="popup__text popup__text_input-type_link"
                 placeholder="Ссылка на картинку" required autoComplete="off" name="link"/>
            <span className="input-link-error popup__span-error"/>
            <button className="popup__button" type="submit" aria-label="Создать карточку">Создать</button>
      </form>
    </PopupWithForm>
  )
}

export default PopupAddCard;
