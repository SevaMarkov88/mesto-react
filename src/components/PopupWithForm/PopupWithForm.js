function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className="popup__main-container">
        <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={props.onClose}/>
        <div className="popup__container">
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PopupWithForm;
