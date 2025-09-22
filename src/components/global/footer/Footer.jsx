


import logo from "../../../assets/logo.webp"
import { contactData } from "../../../data/contact/contactData"
import { Column } from "../../primitives/column"
import { SocialMediaAnchor } from "../socialMedia/SocialMediaAnchor"

export const Footer = () => {
  return (
    <footer className="bg-camel text-black font-poppins">
      <div className={"flex flex-wrap pt-12"}>
        <Column className={"border-b-1 border-stone-400 pb-4"}>
          <p className="text-xs text-stone-600">Este espacio no reemplaza una atención de emergencia. Si necesitas ayuda urgente contáctate inmediatamente con las lineas de Prevención de suicidio y Peligro de tu país.</p>
        </Column>
        <picture className="w-full pt-10" >
          <img
            className="object-contain w-[300px] m-auto"
            src={logo}
            alt="Imagen de psintiendo al mundo"
          />
        </picture>
        <div className="w-full py-4">
          <div className="w-fit m-auto flex gap-4">
            {contactData.socialMedia.map((item, i) => <SocialMediaAnchor icon={item.icon} href={item.href} key={i} />)}
          </div>
        </div>
        <div className="w-full text-center py-4 font-normal">
          <h2 >{new Date().getFullYear()} &#169; Psintiendo el mundo. Lic.&nbsp;Daiana&nbsp;Telesca&nbsp;Farley.</h2>
          <p>Todos los derechos reservados</p>
        </div>
        <div className="w-full text-center pb-12 text-sm">
          <h4 ><a className="" href="https://www.linkedin.com/in/jlibonati/?locale=en_US">Website created by Jonathan Libonati</a></h4>
        </div>
      </div>
    </footer>
  )
}
