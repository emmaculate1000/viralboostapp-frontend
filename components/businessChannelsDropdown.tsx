import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    ChevronUp,
  } from "lucide-react"
  
  import Pic from '@/public/pic.jpg';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import AppsIcon from '@mui/icons-material/Apps';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import WebIcon from '@mui/icons-material/Web';
  import Image from "next/image";
  
  export default function BusinessChannelsDropdown() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
           <div className='flex items-center py-4 gap-2 h-14 w-fit'>
              <AppsIcon className="size-8"/>
              <div className="cursor-pointer">
                <h3 className="text-sm text-sidebar-text hover:text-sidebar-text-hover">Your Business Channels</h3>
                <button className="text-xs text-sidebar-text hover:text-sidebar-text-hover">Customers are here!</button>
              </div>
              <MoreVertIcon className="size-4 cursor-pointer text-sidebar-text hover:text-sidebar-text-hover"/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Business Channels</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <InstagramIcon />
              <span>Instagram</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FacebookIcon />
              <span>Facebook</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LinkedInIcon />
              <span>LinkedIn</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <YouTubeIcon/>
              <span>Youtube</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <WebIcon />
              <span>Business Website</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Plus />
              <span>Add Channel</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  