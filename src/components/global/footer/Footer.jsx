


import logo from "../../../assets/logo.png"
import { contactData } from "../../../data/contact/contactData"
import { Column } from "../../primitives/column"
import { SocialMediaAnchor } from "../socialMedia/SocialMediaAnchor"

export const Footer = () => {
  return (
    <footer className="bg-owl-gray text-black font-poppins">
      <Column className={"flex flex-wrap pt-12 m-auto"}>
        <picture className="w-full" >
          <img
            className="object-contain w-[300px] m-auto"
            src={logo}
            alt="Imagen de psintiendo al mundo"
          />
        </picture>
        {/* <div className="footer__menu">
          <div className="footer__item footer__item--second">
            <h2 className="footer__h2"><a className="footer__link" href="/#home">home</a></h2>
          </div>
        </div> */}
        <div className="w-full py-4">
          <div className="w-fit m-auto flex gap-4">
            {contactData.socialMedia.map((item, i) => <SocialMediaAnchor icon={item.icon} href={item.href} />) }
          </div>
        </div>
        <div className="w-full text-center py-4 font-normal">
          <h2 >{new Date().getFullYear()} &#169; Psintiendo el mundo. Lic.&nbsp;Daiana&nbsp;Telesca&nbsp;Farley.</h2>
          <p>Todos los derechos reservados</p>
        </div>
        <div className="w-full text-center pb-12 text-sm">
          <h4 ><a className="" href="https://www.linkedin.com/in/jlibonati/?locale=en_US">Website created by Jonathan Libonati</a></h4>
        </div>
      </Column>
    </footer>
  )
}
