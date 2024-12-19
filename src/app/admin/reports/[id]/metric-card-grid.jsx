import { MetricCard } from "./metric-card"
import { CircleAlert, MapPin, User2, Calendar, Clock } from "lucide-react"

export default function MetricCardGrid({ report }) {
  return (
    <div className="grid md:grid-rows-3 md:grid-cols-2 gap-4 auto-rows-min">
      <MetricCard Icon={CircleAlert} value={report.type.join(", ")} label="Type" classes="col-span-full" />
      <MetricCard Icon={MapPin} value={report.location} label="Location" classes="md:row-start-2"/>
      <MetricCard Icon={User2} value={(report.isAnonymous) ? "Anonymous": "Jon Snow"} label="Reporter" />
      <MetricCard Icon={Calendar} value={report.date} label="Date" />
      <MetricCard Icon={Clock} value={report.time} label="Time" />
    </div>
  )
}