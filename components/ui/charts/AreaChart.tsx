"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select"
const chartData = [
  { date: "2024-04-01", Rahba: 9, AbuDhabi: 1 },
  { date: "2024-04-02", Rahba: 5, AbuDhabi: 1 },
  { date: "2024-04-03", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-04-04", Rahba: 4, AbuDhabi: 2 },
  { date: "2024-04-05", Rahba: 5, AbuDhabi: 2 },
  { date: "2024-04-06", Rahba: 8, AbuDhabi: 3 },
  { date: "2024-04-07", Rahba: 6, AbuDhabi: 1 },
  { date: "2024-04-08", Rahba: 2, AbuDhabi: 3 },
  { date: "2024-04-09", Rahba: 5, AbuDhabi: 1 },
  { date: "2024-04-10", Rahba: 7, AbuDhabi: 1 },
  { date: "2024-04-11", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-04-12", Rahba: 2, AbuDhabi: 2 },
  { date: "2024-04-13", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-04-14", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-04-15", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-04-16", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-04-17", Rahba: 4, AbuDhabi: 3 },
  { date: "2024-04-18", Rahba: 3, AbuDhabi: 4 },
  { date: "2024-04-19", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-04-20", Rahba: 8, AbuDhabi: 1 },
  { date: "2024-04-21", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-04-22", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-04-23", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-04-24", Rahba: 3, AbuDhabi: 2 },
  { date: "2024-04-25", Rahba: 2, AbuDhabi: 2 },
  { date: "2024-04-26", Rahba: 7, AbuDhabi: 1 },
  { date: "2024-04-27", Rahba: 3, AbuDhabi: 4 },
  { date: "2024-04-28", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-04-29", Rahba: 3, AbuDhabi: 2 },
  { date: "2024-04-30", Rahba: 4, AbuDhabi: 3 },
  { date: "2024-05-01", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-05-02", Rahba: 2, AbuDhabi: 3 },
  { date: "2024-05-03", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-05-04", Rahba: 3, AbuDhabi: 4 },
  { date: "2024-05-05", Rahba: 4, AbuDhabi: 3 },
  { date: "2024-05-06", Rahba: 4, AbuDhabi: 5 },
  { date: "2024-05-07", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-05-08", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-05-09", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-05-10", Rahba: 2, AbuDhabi: 3 },
  { date: "2024-05-11", Rahba: 3, AbuDhabi: 2 },
  { date: "2024-05-12", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-05-13", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-05-14", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-05-15", Rahba: 4, AbuDhabi: 3 },
  { date: "2024-05-16", Rahba: 3, AbuDhabi: 4 },
  { date: "2024-05-17", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-05-18", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-05-19", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-05-20", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-05-21", Rahba: 8, AbuDhabi: 1 },
  { date: "2024-05-22", Rahba: 8, AbuDhabi: 1 },
  { date: "2024-05-23", Rahba: 2, AbuDhabi: 2 },
  { date: "2024-05-24", Rahba: 2, AbuDhabi: 2 },
  { date: "2024-05-25", Rahba: 2, AbuDhabi: 2 },
  { date: "2024-05-26", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-05-27", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-05-28", Rahba: 2, AbuDhabi: 1 },
  { date: "2024-05-29", Rahba: 7, AbuDhabi: 1 },
  { date: "2024-05-30", Rahba: 3, AbuDhabi: 2 },
  { date: "2024-05-31", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-06-01", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-06-02", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-06-03", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-06-04", Rahba: 4, AbuDhabi: 3 },
  { date: "2024-06-05", Rahba: 8, AbuDhabi: 1 },
  { date: "2024-06-06", Rahba: 9, AbuDhabi: 2 },
  { date: "2024-06-07", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-06-08", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-06-09", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-06-10", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-06-11", Rahba: 9, AbuDhabi: 1 },
  { date: "2024-06-12", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-06-13", Rahba: 8, AbuDhabi: 1 },
  { date: "2024-06-14", Rahba: 4, AbuDhabi: 3 },
  { date: "2024-06-15", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-06-16", Rahba: 3, AbuDhabi: 3 },
  { date: "2024-06-17", Rahba: 4, AbuDhabi: 5 },
  { date: "2024-06-18", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-06-19", Rahba: 3, AbuDhabi: 2 },
  { date: "2024-06-20", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-06-21", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-06-22", Rahba: 3, AbuDhabi: 2 },
  { date: "2024-06-23", Rahba: 4, AbuDhabi: 5 },
  { date: "2024-06-24", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-06-25", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-06-26", Rahba: 4, AbuDhabi: 3 },
  { date: "2024-06-27", Rahba: 4, AbuDhabi: 4 },
  { date: "2024-06-28", Rahba: 1, AbuDhabi: 2 },
  { date: "2024-06-29", Rahba: 1, AbuDhabi: 1 },
  { date: "2024-06-30", Rahba: 4, AbuDhabi: 4 },
]

const chartConfig = {
  visitors: {
    label: "Clients",
  },
  Rahba: {
    label: "Rahba",
    color: "hsl(var(--chart-1))",
  },
  AbuDhabi: {
    label: "Abu Dhabi",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function AreaChartComponent() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Client Bookings</CardTitle>
          <CardDescription>
            Showing total bookings for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRahba" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Rahba)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Rahba)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAbuDhabi" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-AbuDhabi)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-AbuDhabi)"
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
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="AbuDhabi"
              type="natural"
              fill="url(#fillAbuDhabi)"
              stroke="var(--color-AbuDhabi)"
              stackId="a"
            />
            <Area
              dataKey="Rahba"
              type="natural"
              fill="url(#fillRahba)"
              stroke="var(--color-Rahba)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
