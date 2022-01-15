import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(props) {
    console.log('Profile', props)
    return (
        <PopupWithForm name='edit-profile' title='Редактировать профиль' btn="Сохранить" formName="edit"
                       isOpen={props.isOpen && "popup_opened"}
                       onClose={props.onClose}>
                <input type="text" id="input-name" className="popup__text popup__text_input-type_name" placeholder="Имя"
                       minLength="2" maxLength="40" required autoFocus autoComplete="off" name="name"/>
                <span className="input-name-error popup__span-error"/>
                <input type="text" id="input-job" className="popup__text popup__text_input-type_job"
                       placeholder="О себе"
                       minLength="2" maxLength="200" required autoComplete="off" name="job"/>
                <span className="input-job-error popup__span-error"/>
        </PopupWithForm>
    )
}

export default PopupEditProfile
