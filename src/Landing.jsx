import { WhatsappButton } from "./components/global/whatsapp/WhatsappButton"
import heroBg from "./assets/hero_background.jpg"
import heroPortrait from "./assets/hero_portrait.png"
import heroPortraitMobile from "./assets/hero_portrait_mobile.png"
import heroheadline from "./assets/hero_headline.png"
import { HeroButton } from "./components/hero/HeroButton"

export const Landing = () => {
  return (
    <>
      <section id="hero" className="flex justify-center max-w-full" >
        <div className="relative z-50 w-[300px] md:w-[700px] lg:w-[960px] mt-[50px] md:mt-[80px]">
          <div className="md:w-[600px] mb-[40px] md:mb-[83px] lg:mb-[56px]">
            <img className="mb-6 md:mb-0 md:max-w-[430px]" src={heroheadline} alt="psintiendo al mundo" />
            <h1 className="headline"><span className="block font-normal text-2xl pl-[2px]">LIC.</span> DAIANA TELESCA FARLEY</h1>
            <h2 className="subheadline max-w-[400px] mt-4 pr-[70px]">PSICÓLOGA CLÍNICA Y DE&nbsp;MIGRACIÓN</h2>
          </div>
          <HeroButton />
        </div>
        <div className="absolute h-[1000px] md:h-[700px] flex">
          <img className="absolute size-full object-cover" src={heroBg} alt />
          <picture className="relative self-end">
            <source media="(max-width: 767px)" srcSet={heroPortraitMobile} />
            <img
              className="object-cover w-full min-h-[300px] md:min-h-[559px]"
              src={heroPortrait}
              alt="Imagen de la psicóloga Daiana Telesca Farley sonriendo"
            />
          </picture>
        </div>
      </section>
      <WhatsappButton />
    </>
  )
}

