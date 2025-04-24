"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { InfluencersSidebarFilter } from "@/components/influencers-sidebar-filter";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {InfluencerSuggestionHeader} from "@/components/influencers-suggestions-header";
import data from "@/constants/influencers.json";
import { InfluencerTable } from '@/components/influencers-table';

const SHEET_SIDES = ["bottom"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function AiCampaignInfluencerSuggestions() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button size="default" className='cursor-pointer'>
                <SupervisedUserCircleIcon className='size-6'/>
                Influencers
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="dashboard-scrollar max-h-[100%]">
            <ScrollArea className="h-[100%]">
              <SidebarProvider className="border-2">
                  <InfluencersSidebarFilter variant="inset" />
                  <SidebarInset>
                    <InfluencerSuggestionHeader/>
                    <div className="flex flex-1 flex-col min-h-[130%] border-2">
                      <div className="@container/main flex flex-1 flex-col gap-2 min-h-[100%] overflow-y-auto">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 ">
                          <InfluencerTable data={data} />
                        </div>
                      </div>
                    </div>
                  </SidebarInset>
              </SidebarProvider>
            </ScrollArea>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
