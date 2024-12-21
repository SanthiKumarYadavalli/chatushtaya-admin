"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const reports = [
  { month: "January", count: 186},
  { month: "February", count: 290 },
  { month: "March", count: 237 },
  { month: "April", count: 73 },
  { month: "May", count: 209 },
  { month: "June", count: 214 },
  { month: "July", count: 212 },
  { month: "August", count: 204 },
  { month: "September", count: 241 },
  { month: "October", count: 222 },
  { month: "November", count: 190 },
  { month: "December", count: 280 },
]

const chartConfig = {
  count: {
    label: "Reports",
    color: "hsl(var(--chart-1))",
  }
}

export default function LineChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports Trend</CardTitle>
        <CardDescription>January - December</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className=" w-full h-32 " config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={reports}
          >
            <CartesianGrid vertical={false}/>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="count"
              type="natural"
              stroke="var(--color-count)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-count)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
        <TrendingUp className="h-4 w-4" /> Increased by up to 5% this month 
        </div>
        <div className="leading-none text-muted-foreground">
          Highest Number of reports in January
        </div>
      </CardFooter>
    </Card>
  )
}
