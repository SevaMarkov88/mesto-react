import PopupWithForm from "./PopupWithForm";

function PopupSubmitDelete() {
  return (
    <PopupWithForm name="accept-delete" title="Вы уверены?">
      <form action="#" className="popup__form" noValidate>
        <button className="popup__button" type="submit" aria-label="Сохранить данные">Да</button>
      </form>
    </PopupWithForm>
  )
}

export default PopupSubmitDelete;
