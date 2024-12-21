"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", "Verbal Abuse": 222, "Bullying": 150 },
  { date: "2024-04-01", "Verbal Abuse": 342, "Bullying": 200 },
  { date: "2024-04-02", "Verbal Abuse": 97, "Bullying": 180 },
  { date: "2024-04-03", "Verbal Abuse": 167, "Bullying": 120 },
  { date: "2024-04-04", "Verbal Abuse": 242, "Bullying": 260 },
  { date: "2024-04-05", "Verbal Abuse": 373, "Bullying": 290 },
  { date: "2024-04-06", "Verbal Abuse": 301, "Bullying": 340 },
  { date: "2024-04-07", "Verbal Abuse": 245, "Bullying": 180 },
  { date: "2024-04-08", "Verbal Abuse": 409, "Bullying": 320 },
  { date: "2024-04-09", "Verbal Abuse": 59, "Bullying": 110 },
  { date: "2024-04-10", "Verbal Abuse": 261, "Bullying": 190 },
  { date: "2024-04-11", "Verbal Abuse": 327, "Bullying": 350 },
  { date: "2024-04-12", "Verbal Abuse": 292, "Bullying": 210 },
  { date: "2024-04-13", "Verbal Abuse": 342, "Bullying": 380 },
  { date: "2024-04-14", "Verbal Abuse": 137, "Bullying": 220 },
  { date: "2024-04-15", "Verbal Abuse": 120, "Bullying": 170 },
  { date: "2024-04-16", "Verbal Abuse": 138, "Bullying": 190 },
  { date: "2024-04-17", "Verbal Abuse": 446, "Bullying": 360 },
  { date: "2024-04-18", "Verbal Abuse": 364, "Bullying": 410 },
  { date: "2024-04-19", "Verbal Abuse": 243, "Bullying": 180 },
  { date: "2024-04-20", "Verbal Abuse": 89, "Bullying": 150 },
  { date: "2024-04-21", "Verbal Abuse": 137, "Bullying": 200 },
  { date: "2024-04-22", "Verbal Abuse": 224, "Bullying": 170 },
  { date: "2024-04-23", "Verbal Abuse": 138, "Bullying": 230 },
  { date: "2024-04-24", "Verbal Abuse": 387, "Bullying": 290 },
  { date: "2024-04-25", "Verbal Abuse": 215, "Bullying": 250 },
  { date: "2024-04-26", "Verbal Abuse": 75, "Bullying": 130 },
  { date: "2024-04-27", "Verbal Abuse": 383, "Bullying": 420 },
  { date: "2024-04-28", "Verbal Abuse": 122, "Bullying": 180 },
  { date: "2024-04-29", "Verbal Abuse": 315, "Bullying": 240 },
  { date: "2024-04-30", "Verbal Abuse": 454, "Bullying": 380 },
  { date: "2024-05-01", "Verbal Abuse": 165, "Bullying": 220 },
  { date: "2024-05-02", "Verbal Abuse": 293, "Bullying": 310 },
  { date: "2024-05-03", "Verbal Abuse": 247, "Bullying": 190 },
  { date: "2024-05-04", "Verbal Abuse": 385, "Bullying": 420 },
  { date: "2024-05-05", "Verbal Abuse": 481, "Bullying": 390 },
  { date: "2024-05-06", "Verbal Abuse": 498, "Bullying": 520 },
  { date: "2024-05-07", "Verbal Abuse": 388, "Bullying": 300 },
  { date: "2024-05-08", "Verbal Abuse": 149, "Bullying": 210 },
  { date: "2024-05-09", "Verbal Abuse": 227, "Bullying": 180 },
  { date: "2024-05-10", "Verbal Abuse": 293, "Bullying": 330 },
  { date: "2024-05-11", "Verbal Abuse": 335, "Bullying": 270 },
  { date: "2024-05-12", "Verbal Abuse": 197, "Bullying": 240 },
  { date: "2024-05-13", "Verbal Abuse": 197, "Bullying": 160 },
  { date: "2024-05-14", "Verbal Abuse": 448, "Bullying": 490 },
  { date: "2024-05-15", "Verbal Abuse": 473, "Bullying": 380 },
  { date: "2024-05-16", "Verbal Abuse": 338, "Bullying": 400 },
  { date: "2024-05-17", "Verbal Abuse": 499, "Bullying": 420 },
  { date: "2024-05-18", "Verbal Abuse": 315, "Bullying": 350 },
  { date: "2024-05-19", "Verbal Abuse": 235, "Bullying": 180 },
  { date: "2024-05-20", "Verbal Abuse": 177, "Bullying": 230 },
  { date: "2024-05-21", "Verbal Abuse": 82, "Bullying": 140 },
  { date: "2024-05-22", "Verbal Abuse": 81, "Bullying": 120 },
  { date: "2024-05-23", "Verbal Abuse": 252, "Bullying": 290 },
  { date: "2024-05-24", "Verbal Abuse": 294, "Bullying": 220 },
  { date: "2024-05-25", "Verbal Abuse": 201, "Bullying": 250 },
  { date: "2024-05-26", "Verbal Abuse": 213, "Bullying": 170 },
  { date: "2024-05-27", "Verbal Abuse": 420, "Bullying": 460 },
  { date: "2024-05-28", "Verbal Abuse": 233, "Bullying": 190 },
  { date: "2024-05-29", "Verbal Abuse": 78, "Bullying": 130 },
  { date: "2024-05-30", "Verbal Abuse": 340, "Bullying": 280 },
  { date: "2024-05-31", "Verbal Abuse": 178, "Bullying": 230 },
  { date: "2024-06-01", "Verbal Abuse": 178, "Bullying": 200 },
  { date: "2024-06-02", "Verbal Abuse": 470, "Bullying": 410 },
  { date: "2024-06-03", "Verbal Abuse": 103, "Bullying": 160 },
  { date: "2024-06-04", "Verbal Abuse": 439, "Bullying": 380 },
  { date: "2024-06-05", "Verbal Abuse": 88, "Bullying": 140 },
  { date: "2024-06-06", "Verbal Abuse": 294, "Bullying": 250 },
  { date: "2024-06-07", "Verbal Abuse": 323, "Bullying": 370 },
  { date: "2024-06-08", "Verbal Abuse": 385, "Bullying": 320 },
  { date: "2024-06-09", "Verbal Abuse": 438, "Bullying": 480 },
  { date: "2024-06-10", "Verbal Abuse": 155, "Bullying": 200 },
  { date: "2024-06-14", "Verbal Abuse": 426, "Bullying": 380 },
  { date: "2024-06-15", "Verbal Abuse": 307, "Bullying": 350 },
  { date: "2024-06-16", "Verbal Abuse": 371, "Bullying": 310 },
  { date: "2024-06-17", "Verbal Abuse": 475, "Bullying": 520 },
  { date: "2024-06-18", "Verbal Abuse": 107, "Bullying": 170 },
  { date: "2024-06-19", "Verbal Abuse": 341, "Bullying": 290 },
  { date: "2024-06-20", "Verbal Abuse": 408, "Bullying": 450 },
  { date: "2024-06-21", "Verbal Abuse": 169, "Bullying": 210 },
  { date: "2024-06-22", "Verbal Abuse": 317, "Bullying": 270 },
  { date: "2024-06-23", "Verbal Abuse": 480, "Bullying": 530 },
  { date: "2024-06-24", "Verbal Abuse": 132, "Bullying": 180 },
  { date: "2024-06-25", "Verbal Abuse": 141, "Bullying": 190 },
  { date: "2024-06-26", "Verbal Abuse": 434, "Bullying": 380 },
  { date: "2024-06-27", "Verbal Abuse": 448, "Bullying": 490 },
  { date: "2024-06-28", "Verbal Abuse": 149, "Bullying": 200 },
  { date: "2024-06-29", "Verbal Abuse": 103, "Bullying": 160 },
  { date: "2024-06-30", "Verbal Abuse": 446, "Bullying": 400 }
]

const chartConfig = {
  reports: {
    label: "Reports",
  },
  lineColor: {
    color: "hsl(var(--chart-1))",
  },
}

export default function Component() {
  const [type, setType] = React.useState("Verbal Abuse");

  return (
    <Card className="border-none">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Detailed Reports Trend</CardTitle>
          <CardDescription>
            Showing all reports this year
          </CardDescription>
        </div>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Verbal Abuse" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="Verbal Abuse" className="rounded-lg">
              Verbal Abuse
            </SelectItem>
            <SelectItem value="Bullying" className="rounded-lg">
              Bullying
            </SelectItem>
            <SelectItem value="Sexual Harassment" className="rounded-lg">
              Sexual Harassment
            </SelectItem>
            <SelectItem value="Stalking" className="rounded-lg">
              Stalking
            </SelectItem>
            <SelectItem value="Cyber harassment" className="rounded-lg">
              Cyber harassment
            </SelectItem>
            <SelectItem value="Discrimination" className="rounded-lg">
              Discrimination
            </SelectItem>
            <SelectItem value="Abuse of Authority by Staff or Faculty" className="rounded-lg">
              Abuse of Authority by Staff or Faculty
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="95%"
                  stopColor="var(--color-lineColor)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={()=> {return type}}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey={type}
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-lineColor)"
              stackId="a"
            />
            <ChartLegend content={"No.of Reports"} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
