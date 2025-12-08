
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import { Landing } from '../src/Landing'

createRoot(document.getElementById('root')).render(
  <Landing scrollTo={"sobre-mi"} />
)
