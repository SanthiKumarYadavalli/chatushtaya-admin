import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function SubmitButton({
  text,
  onClick,
  disabled,
  isLoading,
  loadingText = "Please wait",
}) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        text
      )}
    </Button>
  );
}
