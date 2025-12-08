
import { PopUpModel } from './PopUpModel'

export const SuccessPopUp = ({ message, handleClose, duration }) => {
  return (
    <PopUpModel bgColor={'bg-green-500'} borderColor={'border-green-600'} message={message} duration={duration} handleClose={handleClose}/>
  )
}
