import ReportsPage from "./report-page";

export default async function Page({params}) {
  const id = (await params).id;
  return <ReportsPage id={id} />
}
