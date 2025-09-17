
import { PlayIcon } from "../global/icons/PlayIcon"
import { StopIcon } from "../global/icons/StopIcon"
import { TestimonialButton } from "./TestimonialButton"

export const TestimonialPlayStop = ({ isPlaying, reset, onClick }) => {
  
  return (
    <div className="order-2 md:order-4 grow md:basis-full flex justify-center">
      <div className="relative rounded-full overflow-hidden">
        <div className={`absolute bg-camel inset-0 ${reset? "translate-x-[-100%]" : "translate-x-0 transition duration-[5200ms] linear "}`}></div>
        <TestimonialButton
          icon={isPlaying ? <StopIcon className={"size-6"} /> : <PlayIcon className={"size-6"} />}
          ariaLabel={isPlaying ? "Detener testimonios" : "Reproducir testimonios"}
          onClick={onClick}
          className="relative z-50"
        />
      </div>
    </div>
  )
}
