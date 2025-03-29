"use client"

import React from 'react';
import Image from 'next/image';
import RegisterIMG from '@/public/registerimg.jpg';
import Logo from '@/public/logo dark.png';
import RegistrationForm from '@/components/forms/registration';
import { Link } from 'lucide-react';
import { SignUp, useUser } from '@clerk/nextjs'
const Register = () => {
  const { user } = useUser();
  return (
    <div className='flex justify-center h-screen max-h-screen w-full'>
        <section className='container my-auto'>
            <div className='mx-auto flex size-full flex-col px-2 py-10 w-full lg:max-w-[496px]'>
              {/* sm:max-w-[496px] */}
              <div className='flex items-center gap-2 mb-12 h-10 w-fit'>
                <Image src={Logo} alt='viralboostapp logo' width={50} height={50}/>
                <h1 className='text-2xl font-bold text-white animate-pulse transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>Viralboost<span className='text-primary'>App</span></h1>
              </div>
              <RegistrationForm/>
              
              <div className='mt-20 lg:mt-13 flex justify-between'>
                <p className='justify-items-end text-gray-400 xl:text-center'>© 2025 ViralboostApp</p>
              </div>
            </div>
        </section>
        <Image src={RegisterIMG} alt='ViralboostApp Registration page image' className='w-0 h-0 lg:w-[50%] lg:min-h-screen  lg:max-w-[50%]'/>
        {/* className='sm:max-w-[50%]' height={1000} width={1000}*/}
    </div>
  )
}

export default Register