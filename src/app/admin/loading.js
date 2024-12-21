import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin"><Loader2 /></div>
    </div>
  )
};

export default Loading;