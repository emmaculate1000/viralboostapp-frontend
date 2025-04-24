"use client";
import React, { useState, useRef } from "react";
import Select from 'react-select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Button } from "@/components/ui/button";
import { campaignFormats,campaignGoals,keywords,niches,selectedInfluencers} from '@/constants';
import { SelectPills } from './ui/select-pills';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
// imports for select pills
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Minus, Plus,X} from "lucide-react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CampaignFileDialog from "./campaign-file-dialog";
// ===================
// imports for date picker
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker";
 
import { cn } from "@/lib/utils"
// ===========================
//import for slider
import { Badge } from "@/components/ui/badge";
import * as SliderPrimitive from "@radix-ui/react-slider";
//===================
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropzoneFileBrowser } from "@/components/campaign-drop-zone-file-browser";
  import CarouselWithFooter from "@/components/carousel";
import img from "@/public/pic.jpg";
import { ClassNames } from "@emotion/react";

const selectedPlatforms_budget_data= [
    {
      label: "Instagram Reels",
      hint: "Yes. It adheres to the WAI-ARIA design pattern.",
      icon: InstagramIcon,
      budget:<BudgetSlider/>,
      tabs:[
        {
          name: "Reels video",
          value: "instagram_reels_video",
          content: "pnpm dlx shadcn@latest add tabs",
          component:<CampaignFileDialog buttonTitle="Upload Reels Video" dialogTitle="Upload Instagram Reels Video" hint="Video should not be more than 3 minutes and must be in any of the following formats:JPG,PNG,JPEG"/>,
        },
        {
          name: "Video poster",
          value: "reels_video_poster",
          content: "npx shadcn@latest add tabs",
          component:<CampaignFileDialog buttonTitle="Upload Reels Poster" dialogTitle="Upload Instagram Reels Poster" hint="Video should not be more than 3 minutes and must be in any of the following formats:JPG,PNG,JPEG"/>,
          dialogTitle:"Upload Reels Poster",
          hint:"Image file should not be more than 3MB"
        },
        
      ]
    },
    {
      label: "Facebook Reels",
      hint:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
      icon: FacebookIcon,
      budget:<BudgetSlider/>,
      tabs:[
        {
          name: "Reels video",
          value: "instagram_reels_video",
          content: "pnpm dlx shadcn@latest add tabs",
          component:<CampaignFileDialog buttonTitle="Upload Reels Video" dialogTitle="Upload Instagram Reels" hint="Video should not be more than 3 minutes and must be in any of the following formats:JPG,PNG,JPEG"/>,
        },
        {
          name: "Video poster",
          value: "reels_video_poster",
          content: "npx shadcn@latest add tabs",
          component:<CampaignFileDialog buttonTitle="Upload Reels Video" dialogTitle="Upload Instagram Reels" hint="Video should not be more than 3 minutes and must be in any of the following formats:JPG,PNG,JPEG"/>,
        },
        
      ]
    },
    {
      label: "Youtube Short",
      hint:
        "Yes. It's animated by default, but you can disable it if you prefer.",
      icon: YouTubeIcon,
      budget:<BudgetSlider/>,
      tabs:[
        {
          name: "Reels video",
          value: "instagram_reels_video",
          content: "pnpm dlx shadcn@latest add tabs",
          component:<CampaignFileDialog buttonTitle="Upload Reels Video" dialogTitle="Upload Instagram Reels" hint="Video should not be more than 3 minutes and must be in any of the following formats:JPG,PNG,JPEG"/>,
        },
        {
          name: "Video poster",
          value: "reels_video_poster",
          content: "npx shadcn@latest add tabs",
          component:<CampaignFileDialog buttonTitle="Upload Reels Video" dialogTitle="Upload Instagram Reels" hint="Video should not be more than 3 minutes and must be in any of the following formats:JPG,PNG,JPEG"/>,
        },
        
      ]
    },
  ];
  
  function BudgetPerPlatform() {
    return (
      <Accordion
        defaultValue="item-0"
        type="single"
        collapsible
        className="max-w-lg my-4 w-full"
      >
        {selectedPlatforms_budget_data.map(({ label, hint, icon: Icon,budget }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <div className="flex items-start gap-3">
                <Icon />
                {label}
              </div>
            </AccordionTrigger>
            <AccordionContent>
                {hint}
                <div className='my-4'>
                   {budget}
                </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  

function BudgetSlider() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="relative w-full flex flex-col items-center max-w-sm">
      <SliderPrimitive.Root
        defaultValue={progress}
        max={100}
        step={1}
        onValueChange={setProgress}
        className="relative flex w-full touch-none select-none items-center"
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className=" bg-blue block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          {/* Sticky label */}
          <Badge className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-5">
            <span>${progress[0]}</span>
            {/* Arrow */}
            <div className="absolute z-50 top-full border-t-primary border-[6px] left-1/2 bg-black -translate-x-1/2 border-transparent "/>
          </Badge>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}


//campaign goal
export function CampaignGoal() {
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
     <Card x-chunk="dashboard-07-chunk-1">
        <CardHeader>
            <CardTitle>Set Campaign Goal</CardTitle>
            <CardDescription>
              What metric will you measure on this campaign?
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-6 pb-2">
                <div className="grid gap-3">
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={campaignGoals}
                        placeholder="Select campaign goal"
                    />
                </div>
            </div>
        </CardContent>
 </Card>
  );
}
//platform list
export function PlatformList() {
    const [selectedOption, setSelectedOption] = useState(null);
  
    return (
       <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
              <CardTitle>Campaign Formats</CardTitle>
              <CardDescription>
                Where should your campaign be published?
              </CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid gap-6 pb-2">
                  <div className="grid gap-3">
                      <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={campaignFormats}
                          isMulti
                          placeholder="Select platforms"
                      />
                  </div>
              </div>
          </CardContent>
   </Card>
    );
  }
  //campaign details
  export function CampaignDetails(){
    return(
        <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
                <CardDescription>
                    Provide details about your campaign
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Title</Label>
                        <Input
                        id="name"
                        type="text"
                        className="w-full"
                        defaultValue="Provide a post title"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                        id="description"
                        defaultValue="Type your post or description here!"
                        className="min-h-32"
                        />
                    </div>
                <div className='md:right-4'>
                    <Button className="animate-pulse cursor-pointer"><AutoFixHighIcon className="size-5"/>Optimize With A.I</Button>
                </div>
                </div>
            </CardContent>
        </Card>
    )
  }
//   keywords component
const FormSchema = z.object({
    keyword: z.array(z.string()).min(1, "Please select at least one keyword"),
  });
   
  type FormSchema = z.infer<typeof FormSchema>;
   
  export const Keywords = () => {
    const form = useForm<FormSchema>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        keyword: ["red-500"],
      },
    });
   
    function onSubmit(data: FormSchema) {
      toast.success(`Selected colors: ${data.keyword.join(", ")}`);
    }
   
    return (
      <>
        <Card className="preview-card">
          <CardHeader>
            <CardTitle>Select Keywords</CardTitle>
            <CardDescription>
              Our A.I has generated a few SEO optimized keywords to help your content rank better
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="keyword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <SelectPills
                          data={keywords}
                          value={field.value}
                          onValueChange={field.onChange}
                          placeholder="Search colors eg. orange-500"
                        />
                      </FormControl>
                      <FormDescription>
                        A minimum of 10 keywords recommended for better performance
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>
          </CardContent>
        </Card>
      </>
    );
  };
  //campaign budget
  export function CampaignBudget(){
     const [goal, setGoal] = React.useState(350)
    
      function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
      }
    return(
        <Card x-chunk="dashboard-07-chunk-10">
            <CardHeader>
                <CardTitle>Campaign Budget</CardTitle>
                <CardDescription>
                  Set a budget for your Campaign
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div></div>
                <div className="flex items-center justify-center">
                    <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(-10)}
                    disabled={goal <= 200}
                    >
                      <Minus />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                        <div className="text-4xl font-bold tracking-tighter">
                            ${goal}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground my-2">
                            Campaign Lifetime Budget
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                        >
                        <Plus />
                        <span className="sr-only">Increase</span>
                    </Button>
                </div>
                <CardTitle>Set budget per platform</CardTitle>
                <div className="flex items-center justify-center">
                  <BudgetPerPlatform/>
                </div>
            </CardContent>
        </Card>
    )
  }
  export function CampaignDuration({
    className,
  }: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 20),
    })
    return(
        <Card x-chunk="dashboard-07-chunk-10">
            <CardHeader>
                <CardTitle>Campaign Duration</CardTitle>
                <CardDescription>
                  How long should your campaign run
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div></div>
                <div className={cn("grid gap-2", className)}>
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Pick a date</span>
                            )}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                        />
                        </PopoverContent>
                    </Popover>
                    </div>
            </CardContent>
        </Card>
    )
  }
//------------------Niche
const NicheFormSchema = z.object({
    niche: z.array(z.string()).min(1, "Please select at least one keyword"),
  });
  type NicheFormSchema = z.infer<typeof NicheFormSchema>;
export const Niche = () => {
    const form = useForm<NicheFormSchema>({
      resolver: zodResolver(NicheFormSchema),
      defaultValues: {
        niche: ["red-500"],
      },
    });
   
    function onSubmit(data: NicheFormSchema) {
      toast.success(`Selected colors: ${data.niche.join(", ")}`);
    }
   
    return (
      <>
        <Card className="preview-card">
          <CardHeader>
            <CardTitle>Business categories</CardTitle>
            <CardDescription>
              Select every category that describes your niche
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="niche"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <SelectPills
                          data={niches}
                          value={field.value}
                          onValueChange={field.onChange}
                          placeholder="Search niches e.g Digital Marketing"
                        />
                      </FormControl>
                      <FormDescription>
                        Choose the right categories to get the right Influencers
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>
          </CardContent>
        </Card>
      </>
    );
  };
//   selected influencers
interface Influencer{
    id:string,
    name:string
}
export function SelectedInfluencers(){
    const handleInfluencerRemove = (influencerToRemove:Influencer) => {
        const newSelectedInfluencer = selectedInfluencers.filter(
          (influencer) => influencer !== influencerToRemove
        );
        //setSelectedPills(newSelectedPills);
      };
    
   return(
       <Card x-chunk="dashboard-07-chunk-10">
           <CardHeader>
               <CardTitle>Selected Influencers</CardTitle>
               <CardDescription>
                 These are the influencers you have selected to promote your campaign
               </CardDescription>
           </CardHeader>
           <CardContent>
               <div></div>
               <div className="flex flex-wrap gap-2 min-h-12">
                    {selectedInfluencers.map((influencer) => (
                        <Badge
                        key={influencer.id}
                        variant="secondary"
                        onClick={() => handleInfluencerRemove(influencer)}
                        className="hover:cursor-pointer gap-1 group"
                        >
                        {influencer.name}
                        <button
                            onClick={() => handleInfluencerRemove(influencer)}
                            className="appearance-none text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                            <X size={12} />
                        </button>
                        </Badge>
                    ))}
                </div>
           </CardContent>
       </Card>
   )
 }
// ======================
//platform media card
export function PlatformMediaCard() {
  const [fileSelected,setFileSelected]=useState(true);
      const media=[
          {url:img,is_video:true},
          {url:"https://www.youtube.com/watch?v=Z4mSBypzQsI",is_video:true},
          {url:img,is_video:false},
      ];
  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
          <CardTitle>Upload Campaign Media</CardTitle>
          <CardDescription>
           Upload files for each format of your campaign
          </CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid gap-6">
            <Accordion
              defaultValue="item-0"
              type="single"
              collapsible
              className="my-4 w-full"
            >
              {selectedPlatforms_budget_data.map(({label,hint, icon: Icon,budget,tabs }, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <div className="flex items-start gap-3">
                      <Icon />
                      {label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex justify-between gap-2 w-ful">
                      <div className='mb-4'>
                        <div className="my-2">{hint}</div>
                        <Tabs defaultValue={tabs[0].value} className="max-w-xs w-full">
                          <TabsList>
                            {tabs.map((tab) => (
                              <TabsTrigger key={tab.value} value={tab.value}>
                                <code className="text-[13px]">{tab.name}</code>
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          {tabs.map((tab) => (
                            <TabsContent key={tab.value} value={tab.value}>
                                {tab.component}
                            </TabsContent>
                          ))}
                        </Tabs>
                      </div>
                      {/* render preview only if file is selected */}
                      <div className="">
                        <Tabs defaultValue={tabs[0].value} className="max-w-xs w-full">
                            <TabsList>
                              {tabs.map((tab) => (
                                <TabsTrigger key={tab.value} value={tab.value}>
                                  <code className="text-[13px]">{tab.name} Preview </code>
                                </TabsTrigger>
                              ))}
                            </TabsList>
                            {tabs.map((tab) => (
                              <TabsContent key={tab.value} value={tab.value}>
                                   {
                                      fileSelected?<CarouselWithFooter media={media}/>:<p>Select a file</p>
                                    }
                              </TabsContent>
                            ))}
                          </Tabs>
                      </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </CardContent>
  </Card>
    
  );
}