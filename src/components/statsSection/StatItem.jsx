
export const StatItem = ({ value, text }) => {
  return (
    <li className="flex items-center py-8 last:py-0 first:py-0">
      <h5 className='block headline pt-1 text-right min-w-[105px] md:min-w-auto'>{value}</h5>
      <p className='block pl-2 w-fit'>{text}</p>
    </li>
  )
}
