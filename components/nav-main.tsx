"use client"

import { ChevronRight, MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroupContent
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <Link href="/business-dashboard/manage-campaigns/create-campaign">
              <SidebarMenuButton
                tooltip="Quick Create"
                className="min-w-8 px-2 bg-primary text-primary-foreground cursor-pointer duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
              >
                <ArrowDropDownCircleIcon />
                <span>Create Campaign</span>
              </SidebarMenuButton>
            </Link>
            <Button
              size="icon"
              className="h-9 cursor-pointer w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      <SidebarGroupLabel>Business Growth</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <Link href={item.url}>
                  <SidebarMenuButton tooltip={item.title} isActive={item.url===pathname?true:false}>
                    {item.icon && <item.icon className={item.url===pathname?"size-20 text-primary":"size-20"}/>}
                    <span className={item.url===pathname?"text-primary text-sm":"text-sidebar-text text-sm hover:text-sidebar-text-hover"}>{item.title}</span>
                    {item.items?(<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />):null}
                  </SidebarMenuButton>
                </Link>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={subItem.url===pathname?true:false}>
                          <Link href={subItem.url} >
                           <span className={subItem.url===pathname?"text-primary text-sm":"text-sidebar-text text-sm hover:text-sidebar-text-hover"}>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
