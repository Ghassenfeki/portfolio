import React from 'react'
import {PhoneIcon,MapIcon,EnvelopeIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject:string;
    message:string;
  };
export default function Contacts({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) =>{
        window.location.href=`mailto:ghassenfeki821@gmail.com?subject=${formData.subject}&body=Hi,may name is ${formData.name}.${formData.message} (${formData.email})`
    };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-0 justify-evenly mx-auto items-center'>
      <h3 className='relative -top-96 left-96 uppercase tracking-[20px] text-gray-500 text-2xl'>Contacts</h3>
      <div className='flex flex-col space-y-10'>
       
        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+51803839</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>ghassenfeki821@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>tunisie,sfax</p>
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className='contactInput'  type="text" />
                <input {...register('email')}  placeholder='Email' className='contactInput'  type="text" />
            </div>
            <input {...register('subject')} placeholder='subject' className='contactInput' type="text" />
            
            <textarea {...register('message')} placeholder='Message' className='contactInput' />
            <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-full text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
        </div>
  )
}