"use client"

import {
  FolderIcon,
  MoreHorizontalIcon,
  ShareIcon,
  type LucideIcon,
} from "lucide-react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AcUnitIcon from '@mui/icons-material/AcUnit';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavDocuments({
  items,
  heading
}: {
  items: {
    name: string
    url: string
    icon: React.ReactNode
  }[],
  heading:string
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{heading}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
              <Link href={item.url}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
              </SidebarMenuButton>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="rounded-sm data-[state=open]:bg-accent"
                >
                  <MoreHorizontalIcon />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <FolderIcon />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShareIcon />
                  <span>Share</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </SidebarMenuItem>
        ))}
        {/* <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontalIcon className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  )
}
