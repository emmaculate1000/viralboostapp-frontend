"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import { User2Icon,MailIcon,PhoneCallIcon} from "lucide-react";
import SubmitButton from "./submitButton";
import {
  Form
} from "@/components/ui/form";
import CustomFormField from "./customFormField";

export enum FormFieldType{
    INPUT='input',
    TEXTAREA='textarea',
    CHECKBOX='checkbox',
    PHONE_INPUT='phoneInput',
    DATE_PICKER='datePicker',
    SELECT='select',
    SKELETON='skeleton',
    EMAIL='email',
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const RegistrationForm=()=> {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
           <h1 className="text-2xl font-medium text-white animate-bounce">Hi There 👋</h1>
           <p className="text-sm text-white">
           Welcome To ViralboostApp!
           </p>
        </section>
      <CustomFormField control={form.control}
              fieldType={FormFieldType.INPUT}
              name="Name"
              label="Full Name"
              placeholder="Akem Ronalto"
              icon={<User2Icon className="ml-2 size-6 my-auto text-primary"/>}
        />
         {/* <CustomFormField control={form.control}
              fieldType={FormFieldType.PHONE_INPUT}
              name="phone"
              label="Phone Number"
              placeholder="Phone Number"
              icon={<PhoneCallIcon className="ml-2 size-6 my-auto text-primary"
              />}
        /> */}
        <CustomFormField control={form.control}
              fieldType={FormFieldType.EMAIL}
              name="Email"
              label="Email Address"
              placeholder="info@viralboostapp.com"
              icon={<MailIcon className="ml-2 size-6 my-auto text-primary"
              />}
        />
      <SubmitButton isLoading={true}>Register</SubmitButton>
    </form>
  </Form>
  )
}
 export default RegistrationForm;