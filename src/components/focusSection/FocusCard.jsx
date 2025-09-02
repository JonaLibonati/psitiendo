
export const FocusCard = ({img, headline}) => {
  return (
    <li className="relative bg-black h-[450px] w-full rounded-xl overflow-hidden shadow-lg">
      <div className="relative size-full">
        <div className="absolute size-full bg-charcoal z-20 opacity-30"></div>
        <img src={img} className="absolute size-full object-cover"/>
        <h2 className="relative headline z-50 w-fit px-4 py-6">
          {headline}
        </h2>
      </div>
    </li>
  )
}