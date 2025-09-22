import { Section } from '../primitives/Section'
import { FocusCard } from './FocusCard'
import { FocusData } from './FocusData'

export const FocusSection = () => {

  return (
    <Section id="enfoque" headline={"ENFOQUE"} subheadline={"Descubre mi enfoque para acompañar tu proceso de forma única."}>
      <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {FocusData.map((card, i) => <FocusCard {...card} key={i} index={i} />)}
      </ul>
    </Section>
  )
}
