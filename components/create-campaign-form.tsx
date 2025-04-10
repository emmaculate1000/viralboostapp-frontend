import React from 'react';
import Image from "next/image"
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CampaignImagePreview } from './campaign-image-preview';


import {
  ChevronLeft,
  PlusCircle,
  Upload,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GoogleLocationSugession } from '@/components/google-location-suggestion';
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Tags from '@/components/tags';
import IMG from '@/public/pic.jpg'
import { campaignFormat } from '@/constants';
import { CampaignUploadDrawer } from './campaign-upload-drawer';
import { CampaignBudgetSetter } from './campaign-budget-setter';

const CreateCampaignForm = () => {
  return (
    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
        <Link href="/business-dashboard/manage-campaigns">
            <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
        </Link>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Create Campaign
        </h1>
        <Badge variant="outline" className="ml-auto sm:ml-0">
            New Ad.
        </Badge>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
            Discard
            </Button>
            <Button size="sm">Publish</Button>
        </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        <Card x-chunk="dashboard-07-chunk-3">
            <CardHeader>
                <CardTitle>Campaign Goal</CardTitle>
                <CardDescription>
                 What Is The Goal Of Your Campaign
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="platform">Select Goal</Label>
                        <RadioGroup defaultValue="option-one" className='flex items-center gap-2'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="store-visitors" id="store-visitors" />
                                <Label htmlFor="store-visitors">Website Visitors</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="video-views" id="video-views" />
                                <Label htmlFor="video-views">Video Views</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Post Reaction</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="messages" id="messages" />
                                <Label htmlFor="messages">Messages</Label>
                            </div>
                        </RadioGroup>

                    </div>
                </div>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
                <CardDescription>
                    Provide Details About Your Campaign
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                        id="name"
                        type="text"
                        className="w-full"
                        defaultValue="Gamer Gear Pro Controller"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                        id="description"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                        className="min-h-32"
                        />
                    </div>
                   <div className='md:right-4'>
                      <Button className="animate-pulse cursor-pointer"><AutoFixHighIcon className="size-5"/>Optimize With A.I</Button>
                   </div>
                </div>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>
                 Create descriptive tags for better performance
                </CardDescription>
            </CardHeader>
            <CardContent>
               <Tags/>
            </CardContent>
            <CardFooter className="justify-center border-t p-2">
                <Button size="sm" variant="ghost" className="gap-1 cursor-pointer">
                   <PlusCircle className="h-3.5 w-3.5" />
                   Generate Tags
                </Button>
            </CardFooter>
            </Card>
            <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
                <CardTitle>Campaign Audience</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="gap-3">
                    <GoogleLocationSugession/>
                </div>
                <div className="grid gap-6 sm:grid-cols-3 my-4">
                    <div className="grid gap-3">
                        <Label htmlFor="gender">Gender</Label>
                        <div className='flex items-center gap-2'>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" className='size-6'/>
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" className='size-6'/>
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Female
                                </label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                        Age Range
                        </Label>
                    </div>
                </div>
            </CardContent>
            </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
            <CardHeader>
                <CardTitle>Campaign Format</CardTitle>
                <CardDescription>
                 Each Platform Has A Format
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="platform">Select Format</Label>
                        <ScrollArea className="h-40 w-full rounded-md border p-4">
                        <RadioGroup defaultValue="option-one">
                            {
                                campaignFormat.map((format,key)=>(
                                    <div className="flex items-center space-x-2" key={key}>
                                      <RadioGroupItem value={format.value} id={format.value} />
                                      <Label htmlFor={format.value}>{format.name}</Label>
                                    </div>
                                ))
                            }
                        </RadioGroup>
                        </ScrollArea>
                    </div>
                </div>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-5">
                <CardHeader>
                    <CardTitle>Upload Campaign</CardTitle>
                    <CardDescription>
                     Upload files appropriate to the platform you want your Advert published to
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div></div>
                    <CampaignUploadDrawer media={{value:'video'}}/>
                </CardContent>
            </Card>
            <Card
            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
            >
            <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <CampaignImagePreview/>
                </div>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-5">
                <CardHeader>
                    <CardTitle>Campaign Budget</CardTitle>
                    <CardDescription>
                      Set A budget For Your Campaign
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div></div>
                    <CampaignBudgetSetter/>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-5">
            <CardHeader>
                <CardTitle>Archive Product</CardTitle>
                <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div></div>
                <Button size="sm" variant="secondary">
                Archive Product
                </Button>
            </CardContent>
            </Card>
        </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
            Discard
        </Button>
        <Button size="sm">Publish Campaign</Button>
        </div>
  </div>
  )
}

export default CreateCampaignForm;