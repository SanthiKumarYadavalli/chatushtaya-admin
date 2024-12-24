"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {useState, useEffect } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  count: {
    label: "count",
  },
 unreviewed: {
    label: "unreviewed",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "pending",
    color: "hsl(var(--chart-2))",
  },
  completed: {
    label: "completed",
    color: "hsl(var(--chart-3))",
  },
  suspended: {
    label: "suspended",
    color: "hsl(var(--chart-4))",
  },
  deleted: {
    label: "deleted",
    color: "hsl(var(--chart-5))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-6))",
  },
}

export default function Component({chartData}) {
  const [totalCount,setTotalCount] = useState(0);
  const [maxStatus, setMaxStatus] = useState("unreviewed");
  useEffect(()=>{
    let tot=0
    let maxi = chartData[0].count;
    chartData.forEach((row)=>{
      if(row.count > maxi){
        maxi=row.count
        setMaxStatus(row.status);
      }
      tot+=row.count;
    });
    setTotalCount(tot);
  },[])

  return (
    <Card className="flex flex-col border-none w-full h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Report Status - Pie Chart</CardTitle>
        <CardDescription>Previous Year</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Reports
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Maximum Reports are having status as<strong>{maxStatus}</strong>
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Reports status
        </div>
      </CardFooter>
    </Card>
  )
}
