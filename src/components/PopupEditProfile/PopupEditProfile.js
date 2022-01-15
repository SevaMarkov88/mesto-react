import PopupWithForm from "../PopupWithForm/PopupWithForm";

function PopupEditProfile(props) {
  return (
    <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={props.isOpen && "popup_opened"}
                   onClose={props.onClose}>
      <form action="#" className="popup__form form-edit" noValidate>
        <input type="text" id="input-name" className="popup__text popup__text_input-type_name" placeholder="Имя"
               minLength="2" maxLength="40" required autoFocus autoComplete="off" name="name"/>
        <span className="input-name-error popup__span-error"/>
        <input type="text" id="input-job" className="popup__text popup__text_input-type_job" placeholder="О себе"
               minLength="2" maxLength="200" required autoComplete="off" name="job"/>
        <span className="input-job-error popup__span-error"/>
        <button className="popup__button" type="submit" aria-label="Сохранить данные">Сохранить</button>
      </form>
    </PopupWithForm>
  )
}

export default PopupEditProfile
