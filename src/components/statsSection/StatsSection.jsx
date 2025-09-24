import { Section } from "../primitives/Section"
import { StatItem } from "./StatItem"

export const StatsSection = () => {
  return (
    <Section id="estadisticas">
      <h2 className="vhn">Logros e impacto</h2>
      <ul className="grid md:grid-cols-[250px_1fr_1fr] lg:grid-cols-[300px_240px_300px] md:gap-4 place-content-center">
        <StatItem value={"+5"} text={"años brindrando terapias online"}/>
        <StatItem value={"+8"} text={"años de exp. clínica"}/>
        <StatItem value={"+80"} text={"pacientes atendidos"}/>
      </ul>
    </Section>
  )
}
