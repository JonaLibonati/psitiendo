
import { Column } from './column'

export const Section = ({id, headline, subheadline, pBottom = "pb-10", children}) => {
  return (
    <section id={id}>
      <Column className={"py-[100px]"}>
        {headline && <h2 className='headline pb-10'>{headline}</h2>}
        {subheadline && <p className={`subheadline ${pBottom}`}>{subheadline}</p>}
        { children }
      </Column>
    </section>
  )
}
