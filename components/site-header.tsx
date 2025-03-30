"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BellIcon} from 'lucide-react';
import { ThemeToggle } from './themeToggle';
import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allRoutes } from "@/constants";

const RouteDetector=(props)=>{
  //const currentRoute=allRoutes.filter((route)=>route.url===path);
  const currentRoute=allRoutes.find((item)=>item.url===props.path);
  return(
    <h1 className="text-base font-medium capitalize">{currentRoute?.name}</h1>
  )
}

export function SiteHeader() {
  const path=usePathname();
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full justify-between items-center gap-4 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-4 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
         <RouteDetector path={path}/>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 right-1">
            <ThemeToggle/>
             <Button className='rounded-2xl hidden'>
               <Link href='/create-campaign' className='flex items-center'>
                  <BellIcon className="size-6 text-primary"/>
                </Link>
             </Button>
          </div>
      </div>
    </header>
  )
}
