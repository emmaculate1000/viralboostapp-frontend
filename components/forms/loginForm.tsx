"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button"
import { LockIcon,MailIcon } from "lucide-react";
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
    PASSWORD='password',
    EMAIL='email',
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const LoginForm=()=> {
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
           <h1 className="text-2xl font-medium">Hi There 👋</h1>
           <p className="text-sm"> Welcome To ViralboostApp!</p>
        </section>
        <CustomFormField control={form.control}
              fieldType={FormFieldType.INPUT}
              name="Email"
              label="Email Address"
              placeholder="info@viralboostapp.com"
              icon={<MailIcon className="ml-2 size-6 my-auto text-primary"
              />}
        />
        <CustomFormField control={form.control}
              fieldType={FormFieldType.PASSWORD}
              name="Password"
              label="Password"
              placeholder="viralboost"
              icon={<LockIcon className="ml-2 size-6 my-auto text-primary"/>}
        />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}
 export default LoginForm;