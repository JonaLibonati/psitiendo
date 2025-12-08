
import { XIcon } from '../icons/XIcon'

export const PopUpModel = ({ bgColor, borderColor, message, handleClose, children }) => {

  return (
    <div className={`popUp w-vw fixed bottom-10 w-full px-4 z-[9999]`}>
      <div className={`right-0 left-0 m-auto grid grid-cols-[1fr_fit-content(0)_fit-content(0)] max-w-[900px] items-center ${bgColor} p-3 border-2 ${borderColor}  rounded-md text-white transition-all duration-300 ease-in-out transform`}>
        <p className='text-white'>{message}</p>
        {children}
        <button onClick={() => handleClose()} className='rounded-full hover:outline'>
          <XIcon className={'size-7'} />
        </button>
      </div>
    </div>
  )
}
