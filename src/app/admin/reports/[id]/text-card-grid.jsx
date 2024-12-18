import TextCard from "./text-card";

export default function TextCardGrid({ report }) {
  return (
    <>
      <TextCard title="Harasser Details" text={report.harasserDetails} />
      <TextCard title="Additional Information" text={report.additionalInfo} />
    </>
  );
}
