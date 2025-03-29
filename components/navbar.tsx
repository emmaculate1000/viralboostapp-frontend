import React from 'react';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import { Button } from './ui/button';
import { ThemeToggle } from './themeToggle';
import { PlusIcon } from 'lucide-react';
PlusIcon
const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between py-5'>
          <Link href="/dashboard" className='flex items-center gap-2'>
            <Image src={Logo} alt='viralboostapp logo' width={40} height={40}/>
            <h1 className='text-2xl font-bold'>Viralboost<span className='text-primary'>App</span></h1>
          </Link>
          <div className="flex items-center gap-2 lg:gap-4">
            <ThemeToggle/>
             <Button className=''>
               <Link href='/create-campaign' className='flex items-center'>
                  <PlusIcon className="size-6 text-white"/>
                  <span className='text-base text-white'> Create Campaign</span>
                </Link>
            
             </Button>
          </div>
      </nav>
  )
}

export default Navbar