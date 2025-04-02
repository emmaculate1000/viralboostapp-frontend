"use client"

import * as React from "react"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";
import Link from "next/link";
import { navbarMenuItems,allRoutes } from "@/constants";
import { useTheme } from "next-themes";
import LogoWhite from '@/public/logo.png';
import LogoDark from '@/public/logo dark.png';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/business-dashboard" className='flex items-center gap-2'>
                 {theme === "light"?(<Image src={LogoWhite} alt='viralboostapp logo' width={40} height={40}/>):(<Image src={LogoDark} alt='viralboostapp logo' width={40} height={40}/>)}
                 <h1 className='text-xl font-bold'>Viralboost<span className='text-primary'>App</span></h1>
              </Link>
              {/* <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="sidebar-content">
        <NavMain items={navbarMenuItems.navMain} />
        <NavDocuments items={navbarMenuItems.contentCreation} heading="Content Creation" />
        <NavDocuments items={navbarMenuItems.businessChannels} heading="Business Channels" />
        <NavSecondary items={navbarMenuItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navbarMenuItems.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
