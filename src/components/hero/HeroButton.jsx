
import arrowTopLeft from "../../assets/arrows/arrow-top-left.png"
import arrowTopRight from "../../assets/arrows/arrow-top-right.png"
import arrowBottomLeft from "../../assets/arrows/arrow-bottom-left.png"
import arrowBottomRight from "../../assets/arrows/arrow-bottom-right.png"

export const HeroButton = () => {
  return (
    <div className="relative w-[430px] h-[200px] flex justify-center">
      <button className="cursor-pointer button size-fit self-center  px-5 py-4 bg-steel-blue rounded-full border border-dark-gray shadow-lg hover:bg-brown transition">
        AGENDAR SESIÓN
      </button>
      <img className="absolute top-[35px] left-[39px]" src={arrowTopLeft} alt />
      <img className="absolute top-[14px] right-[31px]" src={arrowTopRight} alt />
      <img className="absolute bottom-[17px] left-[34px] w-[75px]" src={arrowBottomLeft} alt />
      <img className="absolute bottom-[12px] right-[31px] w-[64px]" src={arrowBottomRight} alt />
    </div>
  )
}
