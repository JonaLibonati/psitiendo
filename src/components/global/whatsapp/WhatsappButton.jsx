import { contactData } from "../../../data/contact/contactData"
import { WhatsappIcon } from "../icons/WhatsappIcon"

export const WhatsappButton = () => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${contactData.telefonos.rawMovil}&text=Hola!%20Quiero%20agendar%20una%20sesión.%20%F0%9F%98%84`}
      className="fixed bottom-0 right-0 m-4 z-[100] bg-whatsapp-green rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
      target="blank"
    >
      <WhatsappIcon className={"size-10 text-white"} />
    </a>
  )
}
