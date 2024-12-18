import { reports } from "../../../../../backend/dummy"
import MetricCardGrid from "./metric-card-grid";
import TextCardGrid from "./text-card-grid";
import MediaCardGrid from "./media-card-grid";
import BackButton from "@/components/back-button";

export default async function page({params}) {
  const id = (await params).id;
  const report = reports.find(report => report.id === parseInt(id));
  return (
    <>
      <BackButton />
      <div className="w-2/3 mx-auto">
        <MetricCardGrid report={report} />
        <TextCardGrid report={report} />
        <MediaCardGrid />
      </div>
    </>
  )
}
