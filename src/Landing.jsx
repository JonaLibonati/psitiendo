
import heroBg from "./assets/hero_background.webp"
import heroPortrait from "./assets/hero_portrait.webp"
import heroPortraitMobile from "./assets/hero_portrait_mobile.webp"
import heroheadline from "./assets/hero_headline.webp"
import { HeroButton } from "./components/hero/HeroButton"
import { Footer } from "./components/global/footer/Footer"
import { Column } from "./components/primitives/column"
import { FocusSection } from "./components/focusSection/FocusSection"
import { ServicesSection } from "./components/servicesSection/servicesSection"
import { AboutMeSection } from "./components/aboutMe/AboutMeSection"
import { StatsSection } from "./components/statsSection/StatsSection"
import { lazy, Suspense } from "react";
import { useScrollTo } from "./hooks/useScrollTo"
import { CookieConsent } from "./components/global/CookieConsent/CookieConsent"

const TestimonialSection = lazy(() => import("./components/testimonialSection/TestimonialSection").then(module => ({ default: module.TestimonialSection })))
const WhatsappButton = lazy(() => import( "./components/global/whatsapp/WhatsappButton").then(module => ({ default: module.WhatsappButton })))

export const Landing = ({ scrollTo }) => {

  useScrollTo(scrollTo)

  return (
    <>
      <CookieConsent />
      <section id="hero" className="flex justify-center h-[1000px] md:h-[700px] max-w-full" >
        <Column className={"mt-[50px] md:mt-[80px]"}>
          <div className="md:w-[600px] mb-[40px] md:mb-[83px] lg:mb-[56px]">
            <img className="mb-6 md:mb-0 md:max-w-[430px]" src={heroheadline} alt="Imagen de psintiendo al mundo logo" />
            <h2 className="headlineH1"><span className="block font-normal text-2xl pl-[2px]">LIC.</span> DAIANA TELESCA FARLEY</h2>
            <h3 className="subheadline max-w-[400px] mt-4 pr-[70px]">PSICÓLOGA CLÍNICA Y DE&nbsp;MIGRACIÓN</h3>
          </div>
          <HeroButton />
        </Column>
        <div className="absolute flex h-[inherit] w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
          <picture className="relative self-end ml-auto mr-auto">
            <source media="(max-width: 767px)" srcSet={heroPortraitMobile} />
            <source srcSet={heroPortrait} type="image/webp" />
            <img
              className="object-cover w-full min-h-[300px] md:min-h-[559px]"
              src={heroPortrait}
              alt="Psicóloga Daiana Telesca Farley sonriendo"
              sizes="100vw"
            />
          </picture>
        </div>
      </section>
      
      <StatsSection />

      <AboutMeSection />

      <FocusSection />

      <ServicesSection />

      <Suspense fallback={<></>}>
        <TestimonialSection scrollTo={scrollTo}/>
      </Suspense>

      <Footer />

      <Suspense fallback={<></>}>
        <WhatsappButton />
      </Suspense>
    </>
  )
}

