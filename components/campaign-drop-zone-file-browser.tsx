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
  const {triggerFileSelected}=props;
  const [files, setFiles] = useState([]);
  const [isVideo,setIsVideo]=useState(false);
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
      //display carousel
      triggerFileSelected(true);
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

useEffect(() => {
  // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  return () => files.forEach(file => URL.revokeObjectURL(file.preview));
}, [files]);


  return (
    <div className="container items-center">
      <div {...getRootProps({className: 'dropzone'})} className='border-2 border-dashed border-gray-400 py-4 px-4 text-center'>
        <input {...getInputProps()} />
        <p className='my-4'>Drag 'n' drop some file(s) here, or click to select files</p>
        <Button>
          <CloudUploadIcon className='size-8'/> Open File Dialog
        </Button>
        <aside>
         {/* error messages */}
          <ul>{fileRejectionItems}</ul>
        </aside>
       
      </div>
    </div>
  );
}