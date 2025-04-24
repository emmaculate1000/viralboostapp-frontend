"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allRoutes } from "@/constants";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"

const RouteDetector=(props)=>{
  //const currentRoute=allRoutes.filter((route)=>route.url===path);
  const currentRoute=allRoutes.find((item)=>item.url===props.path);
  return(
    <h1 className="text-base font-medium capitalize">{currentRoute?.name}</h1>
  )
}

export function InfluencerSuggestionHeader() {
  const path=usePathname();
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-4 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-4 px-4 lg:gap-2 lg:px-4 left-1">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="relative flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                  />
          </div>
        </div>
      </div>
    </header>
  )
}
