import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAvatarEdit(props) {
  const avatarRef = React.useRef();
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  return (
    <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        btn="Сохранить"
        formName="avatar"
        isOpen={props.isOpen && "popup_opened"}
        onClose={props.onClose}
        onSubmit={handleSubmit}>
      <input
          type="url"
          id="input-avatar"
          className="popup__text popup__text_input-type_link"
          placeholder="Ссылка на картинку"
          required autoComplete="off"
          name="link"
          value={link || ''}
          onChange={handleLinkChange}
          ref={avatarRef}/>
      <span className="input-avatar-error popup__span-error"/>
    </PopupWithForm>
  )
}

export default PopupAvatarEdit;
