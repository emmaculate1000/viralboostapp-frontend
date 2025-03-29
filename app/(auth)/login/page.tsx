"use client"

import React from 'react';
import Image from 'next/image';
import RegisterIMG from '@/public/registerimg.jpg';
import Logo from '@/public/logo dark.png';
import LoginForm from '@/components/forms/loginForm';
import { Link } from 'lucide-react';

const Login = () => {
  return (
    <div className='flex justify-center h-screen max-h-screen w-full px-2'>
        <section className='container my-auto w-full lg:max-w-[496px]'>
            <div className='mx-auto flex size-full flex-col py-10 lg:max-w-[496px]'>
              <div className='flex items-center gap-2 mb-12 h-10 w-fit'>
                <Image src={Logo} alt='viralboostapp logo' width={40} height={40}/>
                <h1 className='text-2xl font-bold'>Viralboost<span className='text-primary'>App</span></h1>
              </div>
              <LoginForm/>
              
              <div className='mt-20 flex justify-between'>
                <p className='justify-items-end text-gray-400 xl:text-left'>© 2025 ViralboostApp</p>
              </div>
            </div>
        </section>
        <Image src={RegisterIMG} alt='ViralboostApp Registration page image' height={1000} width={1000} className='max-w-[50%]'/>
    </div>
  )
}

export default Login