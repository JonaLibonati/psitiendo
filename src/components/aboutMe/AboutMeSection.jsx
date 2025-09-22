import { Section } from "../primitives/Section";
import paper from "../../assets/paper_background.webp";
import { useState } from "react";
import { AboutMeData } from "./AboutMeData";
import { AboutMePostIt } from "./AboutMePostIt";

export const AboutMeSection = () => {

  const [selected, setSelected] = useState(AboutMeData[0]);
  const [postItLeft, setPostItleft] = useState(AboutMeData[1]);
  const [postItRight, setPostItRight] = useState(AboutMeData[2]);

  const handlePostItclick = (postIt, side) => {
    const currentSelected = selected;
    setSelected(postIt);
    if (side === "left") setPostItleft(currentSelected);
    if (side === "right") setPostItRight(currentSelected);
  } 

  return (
    <Section id="sobre-mi" headline={"SOBRE MÍ"} subheadline={"Conoce quién soy, mi camino y lo que me inspira a acompañar"} pBottom="pb-0" >
      <div className="relative flex flex-wrap justify-center">
        <div className="absolute flex justify-center">
          <img src={paper} className="m-auto h-[910px] md:max-h-[760px] md:w-[1000px] max-w-none object-fill" />
        </div>
        <div className="relative pt-[120px] md:pt-[100px] italic h-[650px] md:h-[460px] md:px-[100px] lg:px-[230px]" >
          {selected.content}
        </div>
        <div className="relative flex w-full md:pb-[50px]">
          <AboutMePostIt img={postItLeft.imgLeft} onClick={() => handlePostItclick(postItLeft, "left")} justify="md:justify-end" />
          <AboutMePostIt img={postItRight.imgRight} onClick={() => handlePostItclick(postItRight, "right")} justify="md:justify-start" />
        </div>
      </div>
    </Section>

  )
}
