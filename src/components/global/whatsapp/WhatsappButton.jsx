import { contactData } from "../../../data/contact/contactData"
import { WhatsappIcon } from "../icons/WhatsappIcon"

export const WhatsappButton = () => {
  return (
    <a
      href={contactData.whatsapp.href}
      className="fixed bottom-0 right-0 m-4 z-[100] bg-whatsapp-green rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
      target="blank"
      aria-label="Ir al chat de whatsapp de Daiana Telesca Farley"
    >
      <WhatsappIcon className={"size-10 text-white"} />
    </a>
  )
}
