import { useRef, useState } from "react"
import { Section } from "../primitives/Section"
import { ServicesCard } from "./ServicesCard"
import { ServicesTab } from "./ServicesTab";
import { ServicesData } from "./ServicesData";
import { useClickOutside } from "../../hooks/useClickOutside";
import stickersMobile from "../../assets/stickers_mobile.webp";
import stickersDesktop from "../../assets/stickers_desktop.webp";

export const ServicesSection = () => {

  const [currentIndex, setCurrentIndex] = useState(-1);

  const folder = useRef(null);

  useClickOutside(folder, () => setCurrentIndex(-1));

  return (
    <Section id="terapias" headline={"TERAPIAS"} subheadline={"Conoce las terapias online que brindo."}>
      <div ref={folder} className="relative max-w-[660px] m-auto text-white">
        <div className={`relative ${currentIndex === -1 ? "z-50 tab-pop" : "z-100"}`}>
          <div className="relative">
            {ServicesData.map((item, i) => <ServicesTab onClick={() => setCurrentIndex(i)} index={i} currentIndex={currentIndex} item={item} />)}
          </div>
          <ul className="relative h-[540px] md:h-[460px]">
            {ServicesData.map((item, i) => <ServicesCard onClick={() => setCurrentIndex(i)} index={i} currentIndex={currentIndex} item={item} />)}
          </ul>
        </div>
        <div className="absolute bottom-0 w-[110%] translate-x-[calc(-1/1.1*5%)] h-[81%] md:h-[77%] bg-[#95A2C8] z-80 rounded-2xl shadow-lg">
          <picture className="relative">
            <source media="(max-width: 767px)" srcSet={stickersMobile} />
            <img
              className="object-cover w-full"
              src={stickersDesktop}
              alt="Imagen de sticker de psicologia y migración"
            />
          </picture>
        </div>
        <div className="absolute bottom-0 w-[106%] translate-x-[calc(-1/1.1*3%)] h-[90%] md:h-[85%] bg-brown z-0 rounded-2xl"></div>
      </div>
    </Section>
  )
}
