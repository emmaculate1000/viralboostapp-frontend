"use client"

import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form'
import { Input } from '../ui/input';
import { Control } from 'react-hook-form';
import { FormFieldType } from './loginForm';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


interface CustomProps{
  control:Control<any>,
  fieldType:FormFieldType,
  name:string,
  label?:string,
  icon?:React.ReactNode,
  description?:string,
  placeholder?:string,
  disabled?:boolean,
  dateFormat?:string,
  showTimeSelect?:boolean,
  children?:React.ReactNode,
  renderSkeleton?:(field:any)=>React.ReactNode
}
const RenderField =({field,props}:{field:any,props:CustomProps})=>{
  const {fieldType,placeholder,icon}=props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return(
        <div className='flex rounded-md border py-2 lg:p-1 outline-0 border-gray-400 bg-blend-darken lg:max-w-[80%]'>
          {icon && (
            icon
          )}
          <FormControl>
            <Input placeholder={placeholder} 
            {...field}
            className='text-white'
            style={{border:'none',outline:'none'}}
            />
          </FormControl>
        </div>
      )
      case FormFieldType.EMAIL:
      return(
        <div className='flex rounded-md border py-2 lg:p-1 outline-0 border-gray-400 bg-blend-darken lg:max-w-[80%]'>
          {icon && (
            icon
          )}
          <FormControl>
            <Input placeholder={placeholder} 
            {...field}
            className='text-white'
            style={{border:'none',outline:'none'}}
            />
          </FormControl>
        </div>
      )
      case FormFieldType.PASSWORD:
      return(
        <div className='flex rounded-md border py-2 lg:p-1 outline-0 border-gray-400 bg-blend-darken lg:max-w-[80%]'>
          {icon && (
            icon
          )}
          <FormControl>
            <Input placeholder={placeholder} 
            {...field}
            className=''
            type="password"
            style={{border:'none',outline:'none'}}
            />
          </FormControl>
        </div>
      )
      case FormFieldType.PHONE_INPUT:
        return(
          <FormControl>
               <PhoneInput 
                country='US'
                placeholder={placeholder}
                value={field.value}
                onChange={field.onChange}
                inputStyle={{width:'80%',paddingTop:'20px',paddingBottom:'20px'}}
               />
          </FormControl>
        )
    default:
      break;
  }
}
const CustomFormField = (props:CustomProps) => {
  const {control,fieldType,name,label}=props
  
  return (
    
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className='flex-1'>
            {fieldType!==FormFieldType.CHECKBOX && label &&(
              <FormLabel className='text-white'>{label}</FormLabel>)}
              <RenderField field={field} props={props}/>
              <FormMessage className='shad-error'/>
          </FormItem>
        )}
      />
  )
}

export default CustomFormField