
import { Column } from './column'

export const Section = ({id, headline, subheadline, children}) => {
  return (
    <section id={id}>
      <Column className={"py-[100px]"}>
        <h2 className='headline pb-10'>{headline}</h2>
        <p className="subheadline pb-10">{subheadline}</p>
        { children }
      </Column>
    </section>
  )
}
