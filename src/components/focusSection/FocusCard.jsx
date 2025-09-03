import { PlusIcon } from "../global/icons/PlusIcon"

export const FocusCard = ({img, headline}) => {
  return (
    <li className="relative bg-black h-[450px] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer">
      <div className="relative size-full">
        <div className="absolute size-full bg-charcoal z-20 opacity-30"></div>
        <img src={img} className="absolute size-full object-cover"/>
        <button className="absolute z-50 bg-white rounded-full right-0 bottom-0 m-4 shadow-lg">
          <PlusIcon className={"size-12 text-charcoal"} />
        </button>
        <h3 className="relative headline z-50 w-fit px-4 py-6">
          {headline}
        </h3>
      </div>
    </li>
  )
}