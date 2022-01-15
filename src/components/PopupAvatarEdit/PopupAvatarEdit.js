import PopupWithForm from "../PopupWithForm/PopupWithForm";

function PopupAvatarEdit(props) {
  return (
    <PopupWithForm name="avatar-edit" title="Обновить аватар" isOpen={props.isOpen ? "popup_opened" : ""}
                   onClose={props.onClose}>
      <form action="#" className="popup__form form-avatar" noValidate>
        <input type="url" id="input-avatar" className="popup__text popup__text_input-type_link"
               placeholder="Ссылка на картинку" required autoComplete="off" name="link"/>
        <span className="input-avatar-error popup__span-error"/>
        <button className="popup__button" type="submit" aria-label="Сохранить данные">Сохранить</button>
      </form>
    </PopupWithForm>
  )
}

export default PopupAvatarEdit;
