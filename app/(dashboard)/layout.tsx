import { Sidebar } from 'lucide-react'
import React, { Children } from 'react'
import Navbar from '@/components/navbar';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from '@/components/app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className='w-full px-2 overflow-hidden'>
        <div className='flex w-full gap-1 items-center px-2  md:px-2 lg:px-4 border-b-1 border-b-gray-400'>
          <SidebarTrigger className='mx-0'/>
          <Navbar/>
        </div>
        
        {children}
      </main>
    </SidebarProvider>
  )
}