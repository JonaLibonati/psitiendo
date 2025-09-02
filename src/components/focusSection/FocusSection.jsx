import { Section } from '../primitives/Section'
import { FocusCard } from './FocusCard'
import { FocusData } from './FocusData'

export const FocusSection = () => {

  return (
    <Section id="enfoque">
      <ul className='grid grid-cols-3 gap-5'>
        {FocusData.map((card, i) => <FocusCard {...card} key={i} />)}
      </ul>
    </Section>
  )
}
