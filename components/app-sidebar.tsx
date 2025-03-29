"use client"
import { usePathname } from "next/navigation";
import Logo from '@/public/logo.png';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "./ui/sidebar";
import {ChevronUp,HomeIcon,LayoutDashboardIcon, User2,MegaphoneIcon,ChartBarIcon,SettingsIcon,Wallet2Icon,PencilIcon, ChevronDown} from "lucide-react";
import logo from './../img/logo.png';
import Link from "next/link";
import Image from "next/image";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
import UserSettingsMenu from './UserSettingsMenu';
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    active:false,
    icon:LayoutDashboardIcon,
    subItems:[],
  },
  {
    title: "Campaigns",
    url: "/",
    active:false,
    icon:MegaphoneIcon,
    subItems:[
    {
      title: "Create Campaign",
      url: "/create-campaign",
    },
    {
      title: "Manage Campaigns",
      url: "/manage-campaigns",  
    },
    {
      title: "Influencer Collaborations",
      url: "/influencer-collaborations",
    }
  ]
  },
  {
    title: "Competitor Analysis",
    url: "#",
    active:false,
    icon:ChartBarIcon,
    subItems:[
      {
        title: "Add Competitor",
        url: "/add-competitor",
      },
      {
        title: "Competitor Insights",
        url: "/competitor-insights",
      }
    ]
  },
  {
    title: "Social Media Posts",
    url: "#",
    active:false,
    icon:PencilIcon,
    subItems:[
      {
        title: "Create Post",
        url: "/create-post", 
      },
      {
        title: "Manage Posts",
        url: "/manage-posts", 
      }
    ]
  },
  {
    title: "Account Wallet",
    url: "/wallet",
    active:false,
    icon:Wallet2Icon,
    subItems:[
      // {
      //   title: "Add Funds",
      //   url: "/add-funds", 
      // },
      // {
      //   title: "Manage Transactions",
      //   url: "/manage-transactions", 
      // }
    ]
  },
  // {
  //   title: "Settings",
  //   url: "/settings",
  //   active:false,
  //   icon:SettingsIcon,
  //   subItems:[]
  // },
]

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="v-side-bar border-r-1 border-gray-200">
       {/* sidebar header */}
       <SidebarHeader>
          <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
       </SidebarHeader>
       
            {/* sidebar content */}
          <SidebarContent className="m-auto sidebar-content pt-1.5" >
              <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url===pathname?true:false}>
                    <Link href={item.url}>
                      <item.icon className={item.active||item.url===pathname?"size-8 text-primary":"size-8"}/>
                      <span className={item.active==true||item.url===pathname?"text-primary":"text-accent-foreground"}>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {item.subItems.map((subItem)=>(
                        <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton isActive={subItem.url===pathname?true:false}>
                              <Link href={subItem.url} className={subItem.url===pathname?"text-primary":"text-accent-foreground"}>
                                {subItem.title}
                              </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}    
              </SidebarMenu>
          </SidebarContent>
          {/* Sidebar footer */}
          <SidebarFooter>
            <UserSettingsMenu/>
            {/* <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton>
                      <SettingsIcon className="ml-auto sidebar-menu-text" /> Settings
                        <ChevronUp className="ml-auto" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      className="w-[--radix-popper-anchor-width] bg-white"
                    >
                      <DropdownMenuItem>
                        <span>Account</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Billing</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu> */}
          </SidebarFooter>
    </Sidebar>
  )
}
