import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card'

export default function TextCard({ title, text }) {
    return (
      <Card className="my-5">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-extralight text-primary font-poppins">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-light font-poppins">{(text) ? text : "Not submitted."}</p>
        </CardContent>
      </Card>
    )
  }