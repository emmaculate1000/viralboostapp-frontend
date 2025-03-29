import React from 'react'
import { Button } from '../ui/button';
import Loader from '@/public/Loading_icon.gif';
import Image from 'next/image';


interface ButtonProps{
    isLoading:boolean,
    className?:string,
    children:React.ReactNode
}

const SubmitButton = ({isLoading,className,children}:ButtonProps) => {
  return (
    <Button type='submit' disabled={isLoading} className={className}>
        {
            isLoading?(
                <div className='flex items-center gap-4'>
                  {children}
                </div>
            ):children
        }

    </Button>
  )
}

export default SubmitButton