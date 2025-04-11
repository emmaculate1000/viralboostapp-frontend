"use client"
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VideoPlayer from '@/components/campaign-video-player';

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};
export function DropzoneFileBrowser(props) {
  const [files, setFiles] = useState([]);
  const [isVideo,setIsVideo]=useState(true);
  const [videoURL,setVideoURL]=useState("https://www.youtube.com/watch?v=Z4mSBypzQsI");
  const {getRootProps, getInputProps, acceptedFiles,
    fileRejections,} = useDropzone({
    accept: {
      'image/*': [],
      'video/*':[],
    },
    maxFiles:4,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles)
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      setVideoURL(URL.createObjectURL(acceptedFiles[0]));
    }
  });
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
   return (
     <li key={file.path} className='text-primary'>
          {/* {file.path} - {file.size} bytes */}
          <ul>
            {errors.map(e => <li key={e.code}>{e.message}</li>)}
         </ul>

     </li>
   ) 
  });
  
  const thumbs = files.map(file => (
    <div key={file.name} className='inline-flex w-100 h-100 p-4 box-border border-2 border-gray-400 mb-8 mr-8'>
      <div className='flex min-w-0 overflow-hidden'>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));
  const newThumbnails= files.map((file) => (
    <figure key={file.name} className="shrink-0">
      <div className="overflow-hidden rounded-md w-60 h-75">
        <Image
          src={file.preview}
          alt={file.name}
          className="aspect-[3/4] h-fit w-fit object-cover"
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
          width={60}
          height={75}
        />
      </div>
      {/* <figcaption className="pt-2 text-xs text-muted-foreground">
        Photo by{" "}
        <span className="font-semibold text-foreground">
          {file.name}
        </span>
      </figcaption> */}
    </figure>
  ));
useEffect(() => {
  // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  return () => files.forEach(file => URL.revokeObjectURL(file.preview));
}, [files]);


  return (
    <div className="container items-center">
      {files.length==0?( <div {...getRootProps({className: 'dropzone'})} className='border-2 border-dashed border-gray-400 py-4 px-4 text-center'>
        <input {...getInputProps()} />
        <p className='my-4'>Drag 'n' drop some file(s) here, or click to select files</p>
        <Button>
          <CloudUploadIcon className='size-8'/> Open File Dialog
        </Button>
        <aside>
         {/* error messages */}
          <ul>{fileRejectionItems}</ul>
        </aside>
       
      </div>):(
        isVideo?(
          <VideoPlayer url={videoURL}/>
        ):(
          <div className='max-h-75'>
            <ScrollArea className="border-1 max-h-80 whitespace-nowrap rounded-md">
              <div className="flex w-max space-x-4 p-2">
                {newThumbnails}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            
            {/* {thumbs} */}
          </div>
        )
      )}
    </div>
  );
}