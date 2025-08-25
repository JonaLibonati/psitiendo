import { WhatsappButton } from "./components/global/whatsapp/WhatsappButton"
import heroBg from "./assets/hero_background.jpg"
import heroPortrait from "./assets/hero_portrait.png"
import heroheadline from "./assets/hero_headline.png"
import { HeroButton } from "./components/hero/HeroButton"

export const Landing = () => {
  return(
    <>
    <section id="hero" className="flex justify-center" >
      <div className="relative z-50 w-[960px] mt-[80px]">
        <div className="w-[600px] mb-[56px]">
          <img className="max-w-[430px]" src={heroheadline} alt="psintiendo al mundo"/>
          <h1 className="headline"><span className="block font-normal text-2xl pl-[2px]">LIC.</span> DAIANA TELESCA FARLEY</h1>
          <h2 className="subheadline max-w-[400px] mt-4">PSICÓLOGA CLÍNICA Y&nbsp;DE&nbsp;MIGRACIÓN</h2>
        </div>
        <HeroButton />
      </div>
      <div className="absolute w-dvw h-[700px] flex">
        <img className="absolute size-full object-cover" src={heroBg} alt/>
        <img className="relative self-end object-cover w-full min-h-[559px]" src={heroPortrait} alt="Imagen de la psicóloga Daiana Telesca Farley sonriendo"/>
      </div>
    </section>
    <WhatsappButton />
    </>
  )
}

