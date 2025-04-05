import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link";

export function KPICard({KPIs}:{KPIs:{
    KPITitle:string,
    KPIAmount:string,
    KPIGrowthRate:number,
    KPIName:string,
  }[]}) {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      {KPIs.map((kpi)=>(
        <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{kpi.KPITitle}</CardDescription>
          <CardTitle className="@[250px]/card:text-xl text-xl font-semibold tabular-nums">
            {kpi.KPIAmount}
          </CardTitle>
          <div className="absolute right-4 top-4">
          {kpi.KPIGrowthRate>0?(
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs animate-bounce">
            <TrendingUpIcon className="size-3" />
            +{kpi.KPIGrowthRate}%
          </Badge>
          ):(<Badge variant="outline" className="flex gap-1 rounded-lg text-xs animate-bounce">
            <TrendingDownIcon className="size-3" />
            {kpi.KPIGrowthRate}%
          </Badge>)}
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {kpi.KPIGrowthRate>0?(
                <span>Trend up by {`+${kpi.KPIGrowthRate}`}% throughout this period <TrendingUpIcon className="size-4" /></span>
            ):(
                <span>Trend down by {`${kpi.KPIGrowthRate}`}% throughout this period <TrendingDownIcon className="size-4" /></span>)}
          </div>
          <div className="w-full text-muted-foreground gap-2 flex items-center justify-between">
            <div>{kpi.KPIName}</div>
            <div className="right-1">{kpi.KPIGrowthRate<0?(
              <Link href="/business-dashboard/ai-content-optimization">
                <Button className="animate-pulse cursor-pointer"><AutoFixHighIcon className="size-5"/></Button>
              </Link>
            ):null}</div>
          </div>
        </CardFooter>
      </Card>
      ))}
    </div>
  )
}
