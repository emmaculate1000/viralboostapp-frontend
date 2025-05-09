"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", youtube: 222, mobile: 150 },
  { date: "2024-04-02", youtube: 97, mobile: 180 },
  { date: "2024-04-03", youtube: 167, mobile: 120 },
  { date: "2024-04-04", youtube: 242, mobile: 260 },
  { date: "2024-04-05", youtube: 373, mobile: 290 },
  { date: "2024-04-06", youtube: 301, mobile: 340 },
  { date: "2024-04-07", youtube: 245, mobile: 180 },
  { date: "2024-04-08", youtube: 409, mobile: 320 },
  { date: "2024-04-09", youtube: 59, mobile: 110 },
  { date: "2024-04-10", youtube: 261, mobile: 190 },
  { date: "2024-04-11", youtube: 327, mobile: 350 },
  { date: "2024-04-12", youtube: 292, mobile: 210 },
  { date: "2024-04-13", youtube: 342, mobile: 380 },
  { date: "2024-04-14", youtube: 137, mobile: 220 },
  { date: "2024-04-15", youtube: 120, mobile: 170 },
  { date: "2024-04-16", youtube: 138, mobile: 190 },
  { date: "2024-04-17", youtube: 446, mobile: 360 },
  { date: "2024-04-18", youtube: 364, mobile: 410 },
  { date: "2024-04-19", youtube: 243, mobile: 180 },
  { date: "2024-04-20", youtube: 89, mobile: 150 },
  { date: "2024-04-21", youtube: 137, mobile: 200 },
  { date: "2024-04-22", youtube: 224, mobile: 170 },
  { date: "2024-04-23", youtube: 138, mobile: 230 },
  { date: "2024-04-24", youtube: 387, mobile: 290 },
  { date: "2024-04-25", youtube: 215, mobile: 250 },
  { date: "2024-04-26", youtube: 75, mobile: 130 },
  { date: "2024-04-27", youtube: 383, mobile: 420 },
  { date: "2024-04-28", youtube: 122, mobile: 180 },
  { date: "2024-04-29", youtube: 315, mobile: 240 },
  { date: "2024-04-30", youtube: 454, mobile: 380 },
  { date: "2024-05-01", youtube: 165, mobile: 220 },
  { date: "2024-05-02", youtube: 293, mobile: 310 },
  { date: "2024-05-03", youtube: 247, mobile: 190 },
  { date: "2024-05-04", youtube: 385, mobile: 420 },
  { date: "2024-05-05", youtube: 481, mobile: 390 },
  { date: "2024-05-06", youtube: 498, mobile: 520 },
  { date: "2024-05-07", youtube: 388, mobile: 300 },
  { date: "2024-05-08", youtube: 149, mobile: 210 },
  { date: "2024-05-09", youtube: 227, mobile: 180 },
  { date: "2024-05-10", youtube: 293, mobile: 330 },
  { date: "2024-05-11", youtube: 335, mobile: 270 },
  { date: "2024-05-12", youtube: 197, mobile: 240 },
  { date: "2024-05-13", youtube: 197, mobile: 160 },
  { date: "2024-05-14", youtube: 448, mobile: 490 },
  { date: "2024-05-15", youtube: 473, mobile: 380 },
  { date: "2024-05-16", youtube: 338, mobile: 400 },
  { date: "2024-05-17", youtube: 499, mobile: 420 },
  { date: "2024-05-18", youtube: 315, mobile: 350 },
  { date: "2024-05-19", youtube: 235, mobile: 180 },
  { date: "2024-05-20", youtube: 177, mobile: 230 },
  { date: "2024-05-21", youtube: 82, mobile: 140 },
  { date: "2024-05-22", youtube: 81, mobile: 120 },
  { date: "2024-05-23", youtube: 252, mobile: 290 },
  { date: "2024-05-24", youtube: 294, mobile: 220 },
  { date: "2024-05-25", youtube: 201, mobile: 250 },
  { date: "2024-05-26", youtube: 213, mobile: 170 },
  { date: "2024-05-27", youtube: 420, mobile: 460 },
  { date: "2024-05-28", youtube: 233, mobile: 190 },
  { date: "2024-05-29", youtube: 78, mobile: 130 },
  { date: "2024-05-30", youtube: 340, mobile: 280 },
  { date: "2024-05-31", youtube: 178, mobile: 230 },
  { date: "2024-06-01", youtube: 178, mobile: 200 },
  { date: "2024-06-02", youtube: 470, mobile: 410 },
  { date: "2024-06-03", youtube: 103, mobile: 160 },
  { date: "2024-06-04", youtube: 439, mobile: 380 },
  { date: "2024-06-05", youtube: 88, mobile: 140 },
  { date: "2024-06-06", youtube: 294, mobile: 250 },
  { date: "2024-06-07", youtube: 323, mobile: 370 },
  { date: "2024-06-08", youtube: 385, mobile: 320 },
  { date: "2024-06-09", youtube: 438, mobile: 480 },
  { date: "2024-06-10", youtube: 155, mobile: 200 },
  { date: "2024-06-11", youtube: 92, mobile: 150 },
  { date: "2024-06-12", youtube: 492, mobile: 420 },
  { date: "2024-06-13", youtube: 81, mobile: 130 },
  { date: "2024-06-14", youtube: 426, mobile: 380 },
  { date: "2024-06-15", youtube: 307, mobile: 350 },
  { date: "2024-06-16", youtube: 371, mobile: 310 },
  { date: "2024-06-17", youtube: 475, mobile: 520 },
  { date: "2024-06-18", youtube: 107, mobile: 170 },
  { date: "2024-06-19", youtube: 341, mobile: 290 },
  { date: "2024-06-20", youtube: 408, mobile: 450 },
  { date: "2024-06-21", youtube: 169, mobile: 210 },
  { date: "2024-06-22", youtube: 317, mobile: 270 },
  { date: "2024-06-23", youtube: 480, mobile: 530 },
  { date: "2024-06-24", youtube: 132, mobile: 180 },
  { date: "2024-06-25", youtube: 141, mobile: 190 },
  { date: "2024-06-26", youtube: 434, mobile: 380 },
  { date: "2024-06-27", youtube: 448, mobile: 490 },
  { date: "2024-06-28", youtube: 149, mobile: 200 },
  { date: "2024-06-29", youtube: 103, mobile: 160 },
  { date: "2024-06-30", youtube: 446, mobile: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  youtube: {
    label: "Youtube Views",
    color: "#E66313",
  },
  mobile: {
    label: "Youtube Subscribers",
    color: "#3b82f6",
  },
} satisfies ChartConfig

export default function ChannelAudienceGrowth() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("youtube")

  const total = React.useMemo(
    () => ({
        youtube: chartData.reduce((acc, curr) => acc + curr.youtube, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["youtube", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
