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
      url: "",
      icon: ListIcon,
      items:[
        {
          title: "Create Campaign",
          url:  "/business-dashboard/manage-campaigns/create-campaign",
        },
        {
          title: "Active Campaigns",
          url:  "/business-dashboard/manage-campaigns/active-campaigns",
        },
        {
          title: "Pending Campaigns",
          url:  "/business-dashboard/manage-campaigns/pending-campaigns",
        },
        {
          title: "Archived Campaigns",
          url:  "/business-dashboard/manage-campaigns/archived-campaigns",
        },
      ]
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChartIcon,
      items:[
        {
          title: "Overview",
          url: "/business-dashboard/analytics/overview",
        },
        {
          title: "Audience Insights",
          url: "/business-dashboard/analytics/audience-insights",
        },
        {
          title: "Campaign Performance",
          url: "/business-dashboard/analytics/campaign-performance",
        },
        {
          title: "Competitor Analysis",
          url: "/business-dashboard/analytics/competitor-analysis",
        },
        {
          title: "Influencer Performance",
          url: "/business-dashboard/analytics/influencer-performance",
        },
        {
          title: "Growth & Forecasting",
          url: "/business-dashboard/analytics/growth-and-forecasting",
        },
  
      ]
    },
    {
      title: "Competitor Analysis",
      url: "/business-dashboard/competitor-analysis",
      icon: FolderIcon,
    },
    {
      title: "Influencer Marketplace",
      url: "/business-dashboard/influencers",
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
      url: "/business-dashboard/settings",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "/business-dashboard/help",
      icon: HelpCircleIcon,
    },
    {
      title: "Customer Support",
      url: "/business-dashboard/support",
      icon: SearchIcon,
    },
  ],
  contentCreation: [
    {
      name: "Youtube Video",
      url: "/business-dashboard/youtube-video",
      icon: <YouTubeIcon/>,
    },
    {
      name: "Facebook Posts",
      url: "/business-dashboard/facebook-post",
      icon: <FacebookIcon/>,
    },
    {
      name: "Instagram Post",
      url: "/business-dashboard/instagram-post",
      icon: <InstagramIcon/>,
    },
    {
      name: "Tiktok Video",
      url: "business-dashboard/tiktok-video",
      icon: <ClipboardListIcon/>,
    },
  ],
  businessChannels: [
    {
      name: "Create Channel",
      url: "/business-dashboard/create-channel",
      icon: <DatabaseIcon/>,
    },
    {
      name: "My Channels",
      url: "/business-dashboard/channels",
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
    url: "/business-dashboard/manage-campaigns",
    icon: LayoutDashboardIcon,
  },
  {
    name: "Create Campaign",
    url: "/business-dashboard/manage-campaigns/create-campaign",
    icon: LayoutDashboardIcon,
  },
  {
    name: "Overview",
    url: "/business-dashboard/analytics/overview",
  },
  {
    name: "Audience Insights",
    url: "/business-dashboard/analytics/audience-insights",
  },
  {
    name: "Campaign Performance",
    url: "/business-dashboard/analytics/campaign-performance",
  },
  {
    name: "Competitor Analysis",
    url: "/business-dashboard/analytics/competitor-analysis",
  },
  {
    name: "Influencer Performance",
    url: "/business-dashboard/analytics/influencer-performance",
  },
  {
    name: "Growth & Forecasting",
    url: "/business-dashboard/analytics/growth-and-forecasting",
  },

  {
    name: "Campaigns",
    url: "/business-dashboard/manage-campaigns",
    icon: ListIcon,
  },
  {
    name: "Competitor Analysis",
    url: "/business-dashboard/competitor-analysis",
    icon: FolderIcon,
  },
  {
    name: "Create Content",
    url: "/business-dashboard/create-content",
    icon: UsersIcon,
  },
  {
    name: "Settings",
    url: "/business-dashboard/settings",
    icon: SettingsIcon,
  },
  {
    name: "Get Help",
    url: "/business-dashboard/help",
    icon: HelpCircleIcon,
  },
  {
    name: "Customer Support",
    url: "/business-dashboard/support",
    icon: SearchIcon,
  },
  {
    name: "Create Channel",
    url: "/business-dashboard/create-channel",
    icon: DatabaseIcon,
  },
  {
    name: "My Channels",
    url: "/business-dashboard/channels",
    icon: ClipboardListIcon,
  },
  {
    name: "Edit Campaign",
    url: "/business-dashboard/manage-campaigns/edit-campaign",
    icon: ClipboardListIcon,
  },
  {
    name: "Create Campaign",
    url:  "/business-dashboard/manage-campaigns/create-campaign",
  },
  {
    name: "Active Campaigns",
    url:  "/business-dashboard/manage-campaigns/active-campaigns",
  },
  {
    name: "Pending Campaigns",
    url:  "/business-dashboard/manage-campaigns/pending-campaigns",
  },
  {
    name: "Archived Campaigns",
    url:  "/business-dashboard/manage-campaigns/archived-campaigns",
  },
  {
    name: "AI Content Optimization",
    url:  "/business-dashboard/ai-content-optimization",
  },

];
export const KPIs =[
  {
    KPITitle:"Total Reach",
    KPIAmount:'20,000 People',
    KPIGrowthRate:-10,
    KPIName:"Total Reach For Past 6 Months",
  },
  {
    KPITitle:"Engagement Rate",
    KPIAmount:'70%',
    KPIGrowthRate:80,
    KPIName:"Engagement Rate For Past 6 Months",
  },
  {
    KPITitle:"Conversion Rate",
    KPIAmount:'20%',
    KPIGrowthRate:8,
    KPIName:"Conversion Rate For Past 6 Months",
  },
  // {
  //   KPITitle:"ROI (Return on Investment)",
  //   KPIAmount:'$20,000',
  //   KPIGrowthRate:8,
  //   KPIName:"ROI (Return on Investment) For Past 6 Months"
  // },
  {
    KPITitle:"Ad Spend vs. ROI (Return on Investment)",
    KPIAmount:'$10,000:$30,000',
    KPIGrowthRate:8,
    KPIName:"Ad Spend vs. Revenue For Past 6 Months",
    KPIUnit:'$'
  }
];