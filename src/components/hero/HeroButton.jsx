

import { contactData } from "../../data/contact/contactData"
import { MainButton } from "../global/buttons/mainbutton"

export const HeroButton = () => {
  return (
    <MainButton text={"AGENDAR SESIÓN"} href={contactData.whatsapp.href} arialabel={"Agenda sesion Agendar sesión con la psicóloga Daiana Telesca Farley"}/>
  )
}
