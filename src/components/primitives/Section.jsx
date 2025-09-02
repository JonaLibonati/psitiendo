
import { Column } from './column'

export const Section = ({id, children}) => {
  return (
    <section id={id}>
      <Column className={"my-[200px]"}>
        { children }
      </Column>
    </section>
  )
}
