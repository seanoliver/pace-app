import { Grid } from "@/components/Grid"
import { generateSampleDay } from "@/lib/constants"

export default function Home() {
  return (
    <div>
      <h1>Pace App v0.1</h1>
      <Grid blockGrid={generateSampleDay()} />
    </div>
  )
}
