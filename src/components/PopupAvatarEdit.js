import PopupWithForm from "./PopupWithForm";

function PopupAvatarEdit(props) {
    return (
        <PopupWithForm name="avatar-edit" title="Обновить аватар" btn="Сохранить" formName="avatar"
                       isOpen={props.isOpen && "popup_opened"}
                       onClose={props.onClose}>
                <input type="url" id="input-avatar" className="popup__text popup__text_input-type_link"
                       placeholder="Ссылка на картинку" required autoComplete="off" name="link"/>
                <span className="input-avatar-error popup__span-error"/>
        </PopupWithForm>
    )
}

export default PopupAvatarEdit;
