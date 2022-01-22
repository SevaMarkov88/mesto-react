import PopupWithForm from "./PopupWithForm";

function PopupSubmitDelete(props) {
  return (
    <PopupWithForm name="accept-delete" title="Вы уверены?" btn="Да" formName="delete"
                   isOpen={props.isOpen && "popup_opened"}
                   onClose={props.onclose}>
    </PopupWithForm>
  )
}

export default PopupSubmitDelete;
