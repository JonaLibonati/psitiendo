import { useEffect, useState } from "react";
import { Section } from "../primitives/Section"
import { ChevronLeftIcon } from "../global/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../global/icons/ChevronRightIcon";
import { TestimonialData } from "./TestimonialData";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialButton } from "./TestimonialButton";
import { TestimonialPlayStop } from "./TestimonialPlayStop";
import bg from "../../assets/testimonios_background.webp";


export const TestimonialSection = () => {

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reset, setReset] = useState(true);

  const useResetLoadingBar = () => {
    setReset(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setReset(false);
      });
    })
  }

  const next = () => setIndex((prev) => (prev + 1) % TestimonialData.length);
  const prev = () => setIndex((prev) => (prev - 1 + TestimonialData.length) % TestimonialData.length);

  const duration = 5000

  // autoplay each 5s;
  useEffect(() => {
    if (!isPlaying) return
    useResetLoadingBar()
    const interval = setInterval(() => {
      if (isPlaying) useResetLoadingBar();
      next()
    }, duration);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <Section id="testimonios" headline={"TESTIMONIOS"} subheadline={"Lee la experiencia de quienes ya confiaron en este espacio, en sus propias palabras."}>
      <img src={bg} className="absolute top-[-130px] right-[-40px] w-[300px] md:top-[-80px] md:right-0 lg:w-[340px]" loading="lazy" alt="Imagen decorativa de dibujo plano sobre testimonios positivos"/>
      <div className="flex flex-wrap justify-center items-center w-full overflow-hidden">
        <div className="order-1 md:order-2 w-fit flex justify-center pb-4">
          <div className="relative flex items-center h-[440px] md:h-[400px] lg:h-[340px]">
            {TestimonialData.map((item, i) => <TestimonialCard {...item} i={i} index={index} key={i} />)}
          </div>
        </div>

        <TestimonialButton
          icon={<ChevronLeftIcon className={"size-6"} />}
          ariaLabel={"Testimonio Anterior"}
          onClick={() => {
            setIsPlaying(false);
            prev();
          }}
          className="mt-2 md:mt-0 mx-2 lg:mx-8"
          order="order-2 md:order-1"
        />

        <TestimonialButton
          icon={<ChevronRightIcon className={"size-6"} />}
          ariaLabel={"Testimonio Siguiente"}
          onClick={() => {
            setIsPlaying(false);
            next();
          }}
          className="mt-2 md:mt-0 mx-2 lg:mx-8"
          order="order-3 md:order-3"
        />

        <TestimonialPlayStop
          reset={reset}
          isPlaying={isPlaying}
          onClick={() => {
            setIsPlaying(prev => {
              if (!prev) useResetLoadingBar();
              return !prev
            })
          }}
        />
      </div>
    </Section>
  )
}
