import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  ChartBarBigIcon,
} from "lucide-react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male",
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
export const navbarMenuItems={
  user: {
    name: "emmaculateakem",
    email: "akemshowbiz@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/business-dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Manage Campaigns",
      url: "/manage-campaigns",
      icon: ListIcon,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChartIcon,
    },
    {
      title: "Competitor Analysis",
      url: "/competitor-analysis",
      icon: FolderIcon,
    },
    {
      title: "Influencer Marketplace",
      url: "/influencers",
      icon: UsersIcon,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: HelpCircleIcon,
    },
    {
      title: "Customer Support",
      url: "/support",
      icon: SearchIcon,
    },
  ],
  contentCreation: [
    {
      name: "Youtube Video",
      url: "/create-channel",
      icon: <YouTubeIcon/>,
    },
    {
      name: "Facebook Posts",
      url: "/channels",
      icon: <FacebookIcon/>,
    },
    {
      name: "Instagram Post",
      url: "/channels",
      icon: <InstagramIcon/>,
    },
    {
      name: "Tiktok Video",
      url: "/channels",
      icon: <ClipboardListIcon/>,
    },
  ],
  businessChannels: [
    {
      name: "Create Channel",
      url: "/create-channel",
      icon: <DatabaseIcon/>,
    },
    {
      name: "My Channels",
      url: "/channels",
      icon: <ClipboardListIcon/>,
    },
  ],
}

export const allRoutes=[
  {
    name: "Dashboard",
    url: "/business-dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    name: "Manage Campaigns",
    url: "/manage-campaigns",
    icon: ListIcon,
  },
  {
    name: "Business Analytics",
    url: "/analytics",
    icon: BarChartIcon,
  },
  {
    name: "Competitor Analysis",
    url: "/competitor-analysis",
    icon: FolderIcon,
  },
  {
    name: "Create Content",
    url: "/create-content",
    icon: UsersIcon,
  },
  {
    name: "Settings",
    url: "/settings",
    icon: SettingsIcon,
  },
  {
    name: "Get Help",
    url: "/help",
    icon: HelpCircleIcon,
  },
  {
    name: "Customer Support",
    url: "/support",
    icon: SearchIcon,
  },
  {
    name: "Create Channel",
    url: "/create-channel",
    icon: DatabaseIcon,
  },
  {
    name: "My Channels",
    url: "/channels",
    icon: ClipboardListIcon,
  },
  {
    name: "Edit Campaign",
    url: "/manage-campaigns/edit-campaign",
    icon: ClipboardListIcon,
  },

];