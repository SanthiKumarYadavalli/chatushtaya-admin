import { Card, CardContent } from "@/components/ui/card"

export function MetricCard({ Icon, value, label, classes }) {
  return (
    <Card className={`overflow-hidden ` + classes}>
      <CardContent className="flex items-center p-6 h-full">
        <div className="flex items-center space-x-4 my-auto">
          <div className="p-2 bg-primary/10 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-poppins font-extralight">{label}</p>
            <p className="text-2xl font-poppins font-light">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

