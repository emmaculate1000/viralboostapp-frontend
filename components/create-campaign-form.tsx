import React from 'react';
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
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
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Tags from '@/components/tags';
import IMG from '@/public/pic.jpg'

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
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
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
                 Each Platform Has It's Format
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="platform">Select Format</Label>
                        <Select>
                            <SelectTrigger id="platform" aria-label="Select A Format For Your Campaign">
                                <SelectValue placeholder="Select A Format For Your Campaign" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="youtube-short-video">Youtube Short Form Video</SelectItem>
                                <SelectItem value="youtube-long-video">Youtube Long Form Video</SelectItem>
                                <SelectItem value="instagram-reels-story">Instagram Story Reals</SelectItem>
                                <SelectItem value="instagram-reels-feed">Instagram Feed Reals</SelectItem>
                                <SelectItem value="instagram-story-pictures">Instagram Story Pictures</SelectItem>
                                <SelectItem value="instagram-feed-pictures">Instagram Feed Pictures</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            </Card>
            <Card
            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
            >
            <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src={IMG}
                    width="300"
                />
                <div className="grid grid-cols-3 gap-2">
                    <button>
                    <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src={IMG}
                        width="84"
                    />
                    </button>
                    <button>
                    <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src={IMG}
                        width="84"
                    />
                    </button>
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    <span className="sr-only">Upload</span>
                    </button>
                </div>
                </div>
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
        <Button size="sm">Save Product</Button>
        </div>
  </div>
  )
}

export default CreateCampaignForm;