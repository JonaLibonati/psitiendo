
import { PopUpModel } from './PopUpModel'

export const ErrorPopUp = ({ message, handleClose, duration }) => {
  return (
    <PopUpModel bgColor={'bg-red-500'} borderColor={'border-red-600'} message={message} handleClose={handleClose} duration={duration} />
  )
}
