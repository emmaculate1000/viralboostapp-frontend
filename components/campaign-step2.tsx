"use client"
import React,{useState} from 'react';
import Link from "next/link";


import {
  ChevronLeft,
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
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { CampaignAudienceAgeRange } from './campaign-audience-age-range';
import { AiCampaignInfluencerSuggestions } from './ai-campaign-influencers-suggestions';
import CountryDropdownFormMultiple from '@/components/country-dropdown-form-multiple';
import { Niche,SelectedInfluencers } from '@/components/campaign-parts';
//import LocationDropdown from '@/components/location-dropdown';

const CampaignStep2 = () => {
    const gender=[
        {name:"male",label:"Male"},
        {name:"female",label:"Female"}
    ];
    const [progress, setProgress] = React.useState([30]);
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
                Target Audience & Influencers
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
                New Advert.
            </Badge>
            
            
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-10">
                    <CardHeader>
                        <CardTitle>Locations</CardTitle>
                        <CardDescription>
                         Where are your target audience
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div></div>
                        <CountryDropdownFormMultiple/>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                    <CardHeader>
                        <CardTitle>Audience Demographics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 sm:grid-cols-2 items-center">
                            <div className="grid gap-2">
                                <Label htmlFor="gender">Gender</Label>
                                <div className="flex items-center gap-4 flex-wrap">
                                    {gender.map(({ name, label }) => (
                                    <div key={name} className="flex items-center gap-2">
                                        <Checkbox id={name} />
                                        <label
                                        htmlFor={name}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                        {label}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                                
                            </div>
                            <div className="grid gap-3">
                                {/* <Label htmlFor="subcategory">
                                  Age Range
                                </Label> */}
                                <CampaignAudienceAgeRange/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <SelectedInfluencers/>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    
                    <Niche/>
                    <Card x-chunk="dashboard-07-chunk-6">
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
                </div>
            </div>
        {/* <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
            Discard
        </Button>
        <Button size="sm">Publish Campaign</Button>
        </div> */}
  </div>
  )
}

export default CampaignStep2;