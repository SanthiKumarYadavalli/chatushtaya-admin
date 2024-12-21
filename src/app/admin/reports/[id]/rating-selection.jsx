import { Button } from "@/components/ui/button"

export function RatingSelection({ selectedRating, setSelectedRating }) {
  return (
    <div className="flex space-x-2" role="radiogroup" aria-label="Rating selection">
      {[1, 2, 3, 4, 5].map((rating) => (
        <Button
          key={rating}
          variant={selectedRating === rating ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedRating(rating)}
          aria-checked={selectedRating === rating}
          role="radio"
          className={`w-10 h-10 ${
            selectedRating === rating
              ? "bg-primary text-primary-foreground"
              : "hover:bg-primary/10 hover:text-primary"
          }`}
        >
          {rating}
        </Button>
      ))}
    </div>
  )
}