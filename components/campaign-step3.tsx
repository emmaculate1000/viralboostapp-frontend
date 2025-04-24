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
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import {PlatformMediaCard} from '@/components/campaign-parts';

const CampaignStep3 = () => {
   
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
                Upload campaign media
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
                New Advert
            </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-1 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-1 lg:gap-8">
               <PlatformMediaCard/>
              </div>
              {/* <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    
                    <Card x-chunk="dashboard-07-chunk-7">
                        <CardHeader>
                            <CardTitle>Upload Campaign</CardTitle>
                            <CardDescription>
                             Upload files appropriate to the platform you want your Advert published to
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div></div>
                            
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-07-chunk-8">
                        
                        <CardHeader>
                            <CardTitle>Video Poster</CardTitle>
                            <CardDescription>
                            Upload files appropriate to the platform you want your Advert published to
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div></div>
                            
                        </CardContent>
                    </Card>
                    
                    <Card
                    className="overflow-hidden" x-chunk="dashboard-07-chunk-9"
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
                </div> */}
            </div>
  </div>
  )
}

export default CampaignStep3;