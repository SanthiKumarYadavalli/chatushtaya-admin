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

const chartConfig = {
  reports: {
    label: "Reports",
  },
  lineColor: {
    color: "hsl(var(--chart-1))",
  },
}

export default function Component({chartData}) {
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
