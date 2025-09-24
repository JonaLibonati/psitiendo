
import arrowTopLeft from "../../../assets/arrows/arrow-top-left.png"
import arrowTopRight from "../../../assets/arrows/arrow-top-right.png"
import arrowBottomLeft from "../../../assets/arrows/arrow-bottom-left.png"
import arrowBottomRight from "../../../assets/arrows/arrow-bottom-right.png"

export const MainButton = ({ text, href, arialabel }) => {
  return (
    <div className="relative w-[300px] h-[146px] lg:w-[430px] lg:h-[200px] flex justify-center">
      <a href={href} aria-label={arialabel} className="cursor-pointer button size-fit self-center px-4 py-3 lg:px-5 lg:py-4 bg-steel-blue rounded-full border border-dark-gray shadow-lg hover:bg-brown transition">
        {text}
      </a>
      <img className="absolute top-[14px] left-[0px] lg:top-[35px] lg:left-[39px] w-[56px] lg:w-[72px]" src={arrowTopLeft} alt="Flecha 1 dibujada a mano apuntando al boton" />
      <img className="absolute top-[0px] right-[-4px] lg:top-[14px] lg:right-[31px] w-[71px] lg:w-[89px]" src={arrowTopRight} alt="Flecha 2 dibujada a mano apuntando al boton" />
      <img className="absolute bottom-[0px] left-[0px] lg:bottom-[17px] lg:left-[34px] w-[60px] lg:w-[75px]" src={arrowBottomLeft} alt="Flecha 3 dibujada a mano apuntando al boton" />
      <img className="absolute bottom-[-4px] right-[-4px] lg:bottom-[12px] lg:right-[31px] w-[52px] lg:w-[64px]" src={arrowBottomRight} alt="Flecha 4 dibujada a mano apuntando al boton" />
    </div>
  )
}