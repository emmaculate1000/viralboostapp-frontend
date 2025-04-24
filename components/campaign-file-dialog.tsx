import React,{useState} from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { CircleFadingArrowUp, Rocket } from "lucide-react";
  import CloudUploadIcon from '@mui/icons-material/CloudUpload';
  import { DropzoneFileBrowser } from "@/components/campaign-drop-zone-file-browser";
  import CarouselWithFooter from "@/components/carousel";
  import img from "@/public/pic.jpg";
  
  export default function CampaignFileDialog(props) {
    const {buttonTitle,dialogTitle,hint}=props
    const [fileSelected,setFileSelected]=useState(false);
    const media=[
        {url:img,is_video:false},
        {url:"https://www.youtube.com/watch?v=Z4mSBypzQsI",is_video:true},
        {url:img,is_video:false},
    ];

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button className="">
              <CloudUploadIcon/>
              {buttonTitle}
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold tracking-tight">
                <div className="flex items-center mb-2 gap-4">
                    {/* mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 */}
                  <div className="left-0 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                     <CircleFadingArrowUp className="h-[18px] w-[18px] text-primary" />
                  </div>
                  {dialogTitle}
                </div>
            </AlertDialogTitle>
            <AlertDialogDescription className="!mt-3 text-[15px]">
             {hint}
            </AlertDialogDescription>
          </AlertDialogHeader>
            <div className="">
              {
                fileSelected?<CarouselWithFooter media={media}/>:<DropzoneFileBrowser triggerFileSelected={setFileSelected}/>
              }
            </div>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel onClick={()=>setFileSelected(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <Rocket />Save File
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  