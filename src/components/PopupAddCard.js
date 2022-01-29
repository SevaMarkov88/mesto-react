import PopupWithForm from "./PopupWithForm";

function PopupAddCard(props) {
    return (
        <PopupWithForm name="add-card" title="Новое место" btn="Создать" formName="add"
                       isOpen={props.isOpen && "popup_opened"}
                       onClose={props.onClose}>
                <input type="text" id="input-title" className="popup__text popup__text_input-type_title"
                       placeholder="Название"
                       autoFocus minLength="2" maxLength="30" required autoComplete="off" name="title"/>
                <span className="input-title-error popup__span-error"/>
                <input type="url" id="input-link" className="popup__text popup__text_input-type_link"
                       placeholder="Ссылка на картинку" required autoComplete="off" name="link"/>
                <span className="input-link-error popup__span-error"/>
        </PopupWithForm>
    )
}

export default PopupAddCard;
