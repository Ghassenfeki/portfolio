import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';
import img from "./ph.png";

type Props = {}

export default function About({}: Props) {
  return (
    
   
   <motion.div className='flex relative top-0 h-screen text-center md:text-left md:flex-row max-w-7xl px-20 justify-evenly mx-auto items-center'>
      <h3 className='relative bottom-52 left-52 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.div 
        initial={{
            x:-200,
            opacity:0, 
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        className=' md:mb-0 flex-shrink-0  rounded-full object-cover md:rounded-lg md:w-64 md:h-95' 

      >
       <Image   src={img} alt="" />
    </motion.div>

    <div className=' space-y-10 px-0 md:px-10'>
      <h4 className='text-4xl font-semibold'>Here is a {" "}
      <span className='underline decoration-[#F7AB0A]'>little</span>
      {" "} background
      </h4>
      <p className='text-xl'>
                  I am currently a student in the second year of an engineering cycle 
                  (evening class) in computer science at the International Institute of 
                  Technology Sfax (IIT). I am 
                  A passionate Full Stack Software Developer 🚀 
                  having an experience of building Web and Mobile applications 
                  with JavaScript / React JS_native / Nodejs  and some other cool libraries and frameworks.
      </p>

      </div>
    </motion.div>
  )
}