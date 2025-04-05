import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CampaignTrends from "./campaign-trends";
import BestPerformingCampaignChannels from "./campaign-best-performing-channels";
import ChannelAudienceGrowth from "./channel-audience-growth";
import { KPIs } from "@/constants";
import { KPICard } from "@/components/KPICard";
import AnalyticsOverviewTrends from "@/components/analytics-overview-trends"
import AnalyticsOverviewTopPerformingPlatforms from "@/components/analytics-top-performing-platforms";

export default function AnalyticsOverview() {
  return (
    
   <div>
      <KPICard KPIs={KPIs}/>
      <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 my-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
          <AnalyticsOverviewTrends/>
          <AnalyticsOverviewTopPerformingPlatforms/>
      </div>
   </div>
  )
}
