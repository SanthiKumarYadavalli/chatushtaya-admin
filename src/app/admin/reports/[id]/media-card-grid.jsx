import { FileImage } from "lucide-react";
import { MediaCard } from "./media-card";

export default function MediaCardGrid() {
  return (
    <div className="my-10">
      <div className="flex">
        <FileImage />
        <h3 className="text-lg font-poppins ml-4">Uploaded Media</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
        <MediaCard
          src="	https://cdn.marvel.com/content/1x/019tha_ons_mas_dsk_06.jpg"
          alt="Sample image"
          type="image"
        />
        <MediaCard
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          alt="Sample video"
          type="video"
        />
      </div>
    </div>
  )
}
