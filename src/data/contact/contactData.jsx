
import { FbIcon } from "../../components/global/icons/FbIcon";
import { IgIcon } from "../../components/global/icons/IgIcon";
import { LinkedInIcon } from "../../components/global/icons/LinkedInIcon";
import { WhatsappIcon } from "../../components/global/icons/WhatsappIcon";

const whatsapp = {
  name: "whatsapp",
  icon: <WhatsappIcon className="size-6" />,
  href: "https://api.whatsapp.com/send?phone=5491141794563&text=Hola!%20Quiero%20agendar%20una%20sesión.%20%F0%9F%98%84",
}

const instagram = {
  name: "instagram",
  icon: <IgIcon className="size-6" />,
  href: "https://www.instagram.com/psintiendoelmundo/",
}

const linkedin = {
  name: "linkedin",
  icon: <LinkedInIcon className="size-6" />,
  href: "https://www.linkedin.com/in/daianatelescafarley/",
}

const facebook = {
  name: "facebook",
  icon: <FbIcon className="size-6" />,
  href: "https://www.facebook.com/PSIntiendoElMundo/",
}

export const contactData = {
  telefonos: {
    label: "Telefonos",
    movil: "11‑4179‑4563",
    rawMovil: "5491141794563",
  },
  correo: {
    label: "Correo electrónico",
    direccion: "daianatelesca@gmail.com",
  },
  sitioWeb: {
    label: "Sitio Web",
    url: "www.psintiendoelmundo.com"
  },
  instagram,
  facebook,
  linkedin,
  whatsapp,
  socialMedia: [
    { ...instagram },
    { ...facebook },
    { ...linkedin },
    { ...whatsapp },
  ],
};

export const contactDataList = [
  {
    label: contactData.telefonos.label,
    movil: contactData.telefonos.movil,
  },
  {
    label: contactData.correo.label,
    direccion: contactData.correo.direccion,
  },
  {
    label: contactData.sitioWeb.label,
    url: contactData.sitioWeb.url,
  },
]

