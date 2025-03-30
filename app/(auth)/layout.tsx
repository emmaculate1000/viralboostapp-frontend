import { Sidebar } from 'lucide-react'
import React, { Children } from 'react'
import Navbar from '@/components/navbar';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from '@/lib/utils';
import RegisterIMG from '@/public/registerimg.jpg';
import Image from 'next/image';
import { url } from 'inspector';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='overflow-hidden'>
      <main>
        <div className=''>
          {/* <Navbar/> */}
          {children}
        </div>
      </main>
    </div>
  )
}