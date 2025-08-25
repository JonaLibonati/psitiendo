import { servicesCards } from "../services/servicesData"

const servicesLinks = [
  {
    label: "Ver todos",
    path: "/servicios/",
  },
  ...servicesCards.map(elem => {
    return {
      label: elem.title,
      path: elem.link,
    }
  })
]

export const linksData = [
  {
    label: "Inicio",
    path: "/#header",
    subPaths: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Quiénes somos",
        path: "/#about-us",
      },
      {
        label: "Servicios",
        path: "/#services",
      },
      {
        label: "ALEA",
        path: "/#alea",
      },
      {
        label: "Asociate",
        path: "/#join",
      },
      {
        label: "Contacto",
        path: "/#contact",
      }
    ],
  },
  {
    label: "Quiénes somos",
    path: "/#about-us",
    subPaths: [{
      label: "Conocer más",
      path: "/quienes-somos/",
    }],
  },
  {
    label: "Servicios",
    path: "/#services",
    subPaths: servicesLinks,
  },
  {
    label: "ALEA",
    path: "/#alea",
    subPaths: [],
  },
  {
    label: "Asociate",
    path: "/#join",
    subPaths: [
      {
        label: "Terminos y condiciones",
        path: "/asociate/",
      },
      {
        label: "Formulario",
        path: "/pdfs/solicitud_de_socio_cooperativa.pdf",
        target: "_blank",
      }
    ],
  },
  {
    label: "Contacto",
    path: "/#contact",
    subPaths: [],
  },
  {
    label: "Preguntas frecuentes",
    path: "/preguntas-frecuentes/",
    subPaths: [],
  },
]




