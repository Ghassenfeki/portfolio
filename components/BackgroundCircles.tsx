import React from 'react'
import {motion} from "framer-motion";

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:1,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0]
    }}
    transition={{
      duration:2.5
    }}
    
    className='relative top-72 flex justify-center items-center'>
        <div className='border border-[#333333] rounded-full h-[200px] w-[200px] absolute mt-52 animate-ping'/>
        <div className='border [#333333] rounded-full h-[300px] w-[300px] absolute mt-52 '/>
        <div className='border [#333333] rounded-full h-[500px] w-[500px]  absolute mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20'/>
        <div />
    </motion.div>
  )
}