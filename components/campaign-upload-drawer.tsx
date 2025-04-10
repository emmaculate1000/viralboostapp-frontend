"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DropzoneFileBrowser } from "./campaign-drop-zone-file-browser"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function CampaignUploadDrawer(props) {
  const [goal, setGoal] = React.useState(350);
  const {media}=props;

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm" className='cursor-pointer'>
            <CloudUploadIcon className='size-6'/>Select Media File
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex items-center gap-2 p-2 right-2 flex-row-reverse">
          <Button>Proceed</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="px-4 py-1 pb-0">
            
            <div className="mt-3 h-[700px]">
              <ResponsiveContainer width="100%" height="100%">
                <div>
                  <DropzoneFileBrowser media={media}/>
                </div>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
