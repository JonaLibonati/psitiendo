import { WhatsappButton } from "./components/global/whatsapp/WhatsappButton"
import heroBg from "./assets/hero_background.webp"
import heroPortrait from "./assets/hero_portrait.webp"
import heroPortraitMobile from "./assets/hero_portrait_mobile.webp"
import heroheadline from "./assets/hero_headline.webp"
import { HeroButton } from "./components/hero/HeroButton"
import { Footer } from "./components/global/footer/Footer"
import { Column } from "./components/primitives/column"
import { Section } from "./components/primitives/Section"
import { FocusSection } from "./components/focusSection/FocusSection"
import { TestimonialSection } from "./components/testimonialSection/TestimonialSection"
import { ServicesSection } from "./components/servicesSection/servicesSection"
import { AboutMeSection } from "./components/aboutMe/AboutMeSection"
import { StatsSection } from "./components/statsSection/StatsSection"

export const Landing = () => {
  return (
    <>
      <section id="hero" className="flex justify-center h-[1000px] md:h-[700px] max-w-full" >
        <Column className={"mt-[50px] md:mt-[80px]"}>
          <div className="md:w-[600px] mb-[40px] md:mb-[83px] lg:mb-[56px]">
            <img className="mb-6 md:mb-0 md:max-w-[430px]" src={heroheadline} alt="psintiendo al mundo" />
            <h1 className="headline"><span className="block font-normal text-2xl pl-[2px]">LIC.</span> DAIANA TELESCA FARLEY</h1>
            <h2 className="subheadline max-w-[400px] mt-4 pr-[70px]">PSICÓLOGA CLÍNICA Y DE&nbsp;MIGRACIÓN</h2>
          </div>
          <HeroButton />
        </Column>
        <div className="absolute flex h-[inherit] w-full">
          <img className="absolute size-full object-cover" src={heroBg} alt="Imagen de psintiendo al mundo" />
          <picture className="relative self-end ml-auto mr-auto">
            <source media="(max-width: 767px)" srcSet={heroPortraitMobile} />
            <img
              className="object-cover w-full min-h-[300px] md:min-h-[559px]"
              src={heroPortrait}
              alt="Imagen de la psicóloga Daiana Telesca Farley sonriendo"
            />
          </picture>
        </div>
      </section>

      <StatsSection />

      <AboutMeSection />

      <FocusSection />

      <ServicesSection />

      <TestimonialSection />

      <Footer />
      <WhatsappButton />
    </>
  )
}

