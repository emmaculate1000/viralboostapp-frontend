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

export default function BisinessAnalytics() {
  return (
   <div>
      <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 my-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
        <CampaignTrends/>
        <BestPerformingCampaignChannels/>
      </div>
      <div className="*:data-[slot=card]:shadow-xs gap-4 px-4 my-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
        <ChannelAudienceGrowth/>
      </div>
   </div>
  )
}
