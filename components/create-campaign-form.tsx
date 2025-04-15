"use client"
import React,{useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CampaignImagePreview } from './campaign-image-preview';


import {
  ChevronLeft,
  PlusCircle,
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
import { GoogleLocationSugession } from '@/components/google-location-suggestion';
import { HashTagSugession } from '@/components/hashtag-suggestions';
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Tags from '@/components/tags';
import { campaignFormat } from '@/constants';
import { CampaignUploadDrawer } from './campaign-upload-drawer';
import { CampaignBudgetSetter } from './campaign-budget-setter';
import { CampaignAudienceAgeRange } from './campaign-audience-age-range';
import { AiCampaignInfluencerSuggestions } from './ai-campaign-influencers-suggestions';

const CreateCampaignForm = () => {
    const [selectedPlatform,setSelectedPlatform]=useState(campaignFormat[0]);
    const [metrics,setMetrics]=useState(campaignFormat[0].metrics);
    const [selectedMetric,setSelectedMetric]=useState(campaignFormat[0].metrics[0]);
    const select_platform=(value)=>{
        //set taylored message
        campaignFormat.map((format)=>{
            if( format.value==value){
                setSelectedPlatform(format);
                setMetrics(format.metrics);
                setSelectedMetric(format.metrics[0]);
            }
        })
        
    }
    const select_metric=(value)=>{
        //set taylored message
        metrics.map((metric)=>{
            if( metric.value==value){
               setSelectedMetric(metric);
            }
        })
        console.log(selectedMetric);
        
    }
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
                <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                        <CardTitle>Campaign Format</CardTitle>
                        <CardDescription>
                        Each Platform Has A Format
                        </CardDescription>
                    </CardHeader>
                  <CardContent>
                        <div className="grid gap-6 pb-4">
                            <div className="grid gap-3">
                                <Label htmlFor="platform">Select Format</Label>
                                <ScrollArea className="h-40 w-full rounded-md border p-4">
                                    <RadioGroup onValueChange={(value)=>select_platform(value)} defaultValue={campaignFormat[0].value} className="flex flex-col space-y-1">
                                        {
                                            campaignFormat.map((format,key)=>(
                                                <div className="flex items-center space-x-2" key={format.value}>
                                                  <RadioGroupItem value={format.value} id={format.value} className='size-6'/>
                                                   <Label htmlFor={format.value} className='text-base'>{format.name}</Label>
                                                </div>
                                            ))
                                        }
                                    </RadioGroup>
                                </ScrollArea>
                            </div>
                        </div>
                        <CardDescription className='text-sm py-1.5 text-primary text-center'>
                        {selectedPlatform.tailored}
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                        <CardTitle>Campaign Goal</CardTitle>
                        <CardDescription>
                        What is the goal of your campaign
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 pb-4">
                            <div className="grid gap-3">
                                <Label htmlFor="platform">Select Goal</Label>
                                <ScrollArea className="h-40 w-full rounded-md border p-4">
                                    <RadioGroup onValueChange={(value)=>select_metric(value)} defaultValue="" className='flex flex-col space-y-1'>
                                        {
                                            metrics.map((metric,index)=>(
                                                <div className="flex items-center space-x-2" key={metric.value}>
                                                  <RadioGroupItem value={metric.value} id={metric.value} className='size-6'  checked={selectedMetric.value==metric.value?true:false}/>
                                                   <Label htmlFor={metric.value}>{metric.name}</Label>
                                                </div>
                                            ))
                                        }
                                    </RadioGroup>
                                </ScrollArea>

                            </div>
                        </div>
                        <CardDescription className='text-sm text-primary text-center'>
                            {selectedMetric.description}
                        </CardDescription>
                    </CardContent>
                </Card>
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
                <Card x-chunk="dashboard-07-chunk-3">
                    <CardHeader>
                        <CardTitle>Hash Tags</CardTitle>
                        <CardDescription>
                        Enter a maximum of 30 hash tags
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tags/>
                        <div className="my-2">
                            <HashTagSugession/>
                        </div>
                    </CardContent>
                </Card>
                {/* campaigns that require tags like Youtube */}
                {
                    selectedPlatform.value=="youtube-short-video"||selectedPlatform.value=="youtube-long-video"?(
                        <Card x-chunk="dashboard-07-chunk-4">
                            <CardHeader>
                                <CardTitle>Keywords - Tags</CardTitle>
                                <CardDescription>
                                Our A.I tool helps you generate SEO optimized keywords to help your content rank better
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <Tags/>
                            </CardContent>
                            <CardFooter className="justify-center border-t p-2">
                                <Button size="sm" className="gap-1 cursor-pointer">
                                <PlusCircle className="h-3.5 w-3.5" />
                                Generate with A.I
                                </Button>
                            </CardFooter>
                        </Card>
                    ):null
                }
                {/* set Campaign audience */}
                <Card x-chunk="dashboard-07-chunk-4">
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
                                <CampaignAudienceAgeRange/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <Card x-chunk="dashboard-07-chunk-5">
                        <CardHeader>
                            <CardTitle>Add Influencers</CardTitle>
                            <CardDescription>
                              Choose the right influencers to promote your campaign from our AI suggestions
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div></div>
                            <AiCampaignInfluencerSuggestions/>
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
                    {/* campaigns that require posters */}
                    {selectedPlatform.value==campaignFormat[1].value||selectedPlatform.value==campaignFormat[campaignFormat.length-1].value?(
                        <Card x-chunk="dashboard-07-chunk-6">
                        
                        <CardHeader>
                            <CardTitle>Video Poster</CardTitle>
                            <CardDescription>
                            Upload files appropriate to the platform you want your Advert published to
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div></div>
                            <CampaignUploadDrawer media={{value:'video'}}/>
                        </CardContent>
                    </Card>
                    ):null}
                    
                    <Card
                    className="overflow-hidden" x-chunk="dashboard-07-chunk-7"
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
                    <Card x-chunk="dashboard-07-chunk-8">
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
                    <Card x-chunk="dashboard-07-chunk-9">
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