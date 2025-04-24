"use client"
import React,{useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import {
  ChevronLeft,
  PlusCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { UserProfile,Date,UserPreferences} from '@/components/onboarding-parts';
import {PlatformList,CampaignGoal,CampaignDetails,Keywords,CampaignBudget,CampaignDuration} from '@/components/campaign-parts';
const OnboardingStep1 = () => {
   
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
                Complete Profile
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
                Onboarding
            </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <UserProfile/>
              <Date/>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <UserPreferences/>
            </div>
        </div>
  </div>
  )
}

export default OnboardingStep1;