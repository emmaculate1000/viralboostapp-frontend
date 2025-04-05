"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
import { Button } from "./ui/button"
import Link from "next/link";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
const chartData = [
  { month: "January", reach: 186, clicks: 80,conversions:20 },
  { month: "February", reach: 305, clicks: 200,conversions:70 },
  { month: "March", reach: 237, clicks: 120,conversions:40 },
  { month: "April", reach: 73, clicks: 190,conversions:30 },
  { month: "May", reach: 209, clicks: 130,conversions:39 },
  { month: "June", reach: 214, clicks: 140,conversions:80 },
]

const chartConfig = {
  reach: {
    label: "Reach",
    color: "hsl(var(--chart-1))",
  },
  clicks: {
    label: "Clicks",
    color: "hsl(var(--chart-2))",
  },
  conversion: {
    label: "Conversions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function AnalyticsOverviewTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Content performance over the past months
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="reach"
              type="monotone"
              stroke="#E66313"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="clicks"
              type="monotone"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="conversions"
              type="monotone"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2 w-full">
            <div className="flex w-full items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex w-full justify-between items-center gap-2 leading-none text-muted-foreground">
              <span>Showing content performance for the past 6 months</span>
              <div className="right-1">
                <Link href="/business-dashboard/ai-content-optimization">
                  <Button className="animate-pulse cursor-pointer rounded-full"><AutoFixHighIcon className="size-5"/></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
