import MetricCardGrid from "./metric-card-grid";
import TextCardGrid from "./text-card-grid";
import MediaCardGrid from "./media-card-grid";
import BackButton from "@/components/back-button";
import PendingButton from "./pending-button";
import ResolveButton from "./resolve-button";
import { fetchAllReports } from "@/backend/utils";
import EditableNotes from "./editable-notes";

export default async function Page({params}) {
  const id = (await params).id;
  const reports = await fetchAllReports();
  const report = reports.find(r => r.id === id);
  return (
    <>
      <BackButton />
      <div className="w-2/3 mx-auto">
        <MetricCardGrid report={report} />
        <TextCardGrid report={report} />
        <MediaCardGrid report={report} />
        <EditableNotes reportId={report.id} initialNotes={report.adminNotes} />
        <div className="flex justify-end gap-5 my-10">
          {(report.status === 'unreviewed') && (<PendingButton reportId={report.id} />)}
          {(report.status !== 'resolved') && (<ResolveButton reportId={report.id} />)}
        </div>
      </div>
    </>
  )
}
