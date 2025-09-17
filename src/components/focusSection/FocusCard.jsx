import { useState } from "react";
import { PlusIcon } from "../global/icons/PlusIcon"
import { DashIcon } from "../global/icons/DashIcon";

export const FocusCard = ({ img, headline, text }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <li className="relative bg-charcoal h-[450px] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => setToggle(prev => !prev)}>
      <div className="relative size-full">
        <img src={img} className={`absolute size-full object-cover transition duration-800 ${toggle ? "opacity-0" : "opacity-100"}`} />
        <div className="absolute bg-charcoal z-30 size-full opacity-20"></div>
        <button className="absolute z-50 bg-white rounded-full right-0 bottom-0 m-4 shadow-lg cursor-pointer">
          {
            toggle ?
              <DashIcon className={"size-10 text-charcoal"} /> :
              <PlusIcon className={"size-10 text-charcoal"} />
          }

        </button>
        <div className="relative z-60 px-4 py-6">
          <h3 className="headline w-fit mb-5">
            {headline}
          </h3>
          <p className={`transition duration-800 ${toggle ? "opacity-100" : "opacity-0"} `}>
            {text}
          </p>
        </div>
      </div>
    </li>
  )
}