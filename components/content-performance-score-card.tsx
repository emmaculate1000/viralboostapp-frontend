"use client"

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export default function ContentPerformanceScoreCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Youtube Channel Underperforming</CardTitle>
        <CardDescription>
          In the past 10 months you have gainned only 100 subscribers and 1000 views
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid auto-rows-min gap-2">
          <div className="flex items-baseline justify-between gap-1 font-bold tabular-nums leading-none">
            <div>
                <span className="text-2xl">10 </span>
                <span className="text-sm font-normal text-muted-foreground">
                   Subscribers/Month
                </span>
            </div>
            <div>
               <span className="text-2xl">100 </span>
                <span className="text-sm font-normal text-muted-foreground">
                 Views/Month
                </span>
            </div>
          </div>
          <Progress value={33} />
           <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">Here is what you need to do in order to increase your Youtube channel growth and content performance</AccordionTrigger>
                <AccordionContent>
                  To boost your website's SEO and improve search engine rankings, focus on creating high-quality, user-friendly content, optimize for relevant keywords,
                  ensure a fast and mobile-friendly site, and build a strong link profile. 
                </AccordionContent>
              </AccordionItem>

            </Accordion>

        </div>
      </CardContent>
    </Card>
  )
}
