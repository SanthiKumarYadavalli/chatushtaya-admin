import { MetricCard } from "./metric-card"
import { CircleAlert, MapPin, User2, Clock, Circle } from "lucide-react"
import moment from "moment"

export default function MetricCardGrid({ report }) {
  const iconColor = (report.status === "resolved") ? "green" : (report.status === "pending") ? "yellow" : "red";
  return (
    <div className="grid md:grid-rows-3 md:grid-cols-2 gap-4 auto-rows-min">
      <MetricCard Icon={CircleAlert} value={report.types.join(", ")} label="Type" classes="col-span-full" />
      <MetricCard Icon={MapPin} value={report.location} label="Location" classes="md:row-start-2"/>
      <MetricCard Icon={User2} value={(report.isAnonymous) ? "Anonymous": report.username} label="Reporter" />
      <MetricCard Icon={Clock} value={moment(report.datetime).format("DD/MM/YY, hh:mm a")} label="Date & Time" />
      <MetricCard Icon={Circle} value={report.status} label="Status" iconColor={iconColor}/>
    </div>
  )
}
