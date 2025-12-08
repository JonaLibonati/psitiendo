import { DotIcon } from "../icons/DotIcon"

export const PopUpListItem = ({message}) => {
  return (
    <li className='flex items-center'><DotIcon />{message}</li>
  )
}
