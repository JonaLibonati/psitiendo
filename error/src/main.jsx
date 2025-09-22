import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/index.css'
import { Footer } from '../../src/components/global/footer/Footer'
import { WhatsappButton } from '../../src/components/global/whatsapp/WhatsappButton'
import { Column } from '../../src/components/primitives/column'
import { MainButton } from '../../src/components/global/buttons/mainbutton'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='min-h-[100vh] grid grid-rows-[1fr_min-content]'>
      <Column className="flex flex-wrap place-content-center py-[150px]">
        <p className='pb-10 font-poppins text-6xl text-center block size-fit'>Ups! La pagina no existe.</p>
        <MainButton text={"IR A LA PAGINA"} href={"/"}/>
      </Column>
      <Footer />
    </div>
    <WhatsappButton />
  </StrictMode>,
)
