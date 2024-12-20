import { FileImage } from "lucide-react";
import { MediaCard } from "./media-card";

export default function MediaCardGrid({ report }) {
  return (
    <div className="my-10">
      <div className="flex">
        <FileImage />
        <h3 className="text-lg font-poppins ml-4">Uploaded Media</h3>
      </div>
      {(report.evidence.length > 0) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
          {report.evidence.map((media, index) => (
            <MediaCard key={index} src={media} alt="File" />
          ))}
        </div>
      ) : (
        <p className="text-center my-24 text-muted-foreground">No media uploaded</p>
      )}
    </div>
  )
}
