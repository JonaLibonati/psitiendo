import { CheckIcon } from "../icons/CheckIcon";
import { PopUpModel } from "./PopUpModel"

export const ConfirmationPopUp = ({ message, handleClose, onConfirm }) => {

  const handleConfirm = () => {
    onConfirm();
  }
  return (
    <PopUpModel bgColor={'bg-gray-light'} borderColor={'border-gray-light'} message={message} handleClose={handleClose} >
      <button onClick={handleConfirm} className="mr-4 rounded-full hover:outline">
        <CheckIcon className={'size-7'} />
      </button>
    </PopUpModel>
  )
}
