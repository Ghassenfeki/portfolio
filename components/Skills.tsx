import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import img from "./logo.png";
import img1 from "./logohtml.png";
import img2 from "./logocss.png";
import img3 from "./logojavascript.png";
import img4 from "./logonodejs.png";
import img5 from "./logomongo.png";
import img6 from "./logonpm.png";
import img7 from "./logofirebase.png";
import img8 from "./logogithub.png";


type Props = {
  directionLeft?:boolean;
}

export default function Skills({directionLeft}: Props) {
  return (
    <motion.div  initial={{
      x:directionLeft ? -200 : 200,
      opacity: 0 }}
      transition ={{duration:1}}
      whileInView={{opacity:1,x:0}}  className='h-screen flex relative flex-col text-center md:text:left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>hover over a skill for currency profieciency</h3>
        <div className='group relative flex cursor-pointer' >
        
       
              <Image src={img}    width={150} height={150} className="object-contain md:object-scale-down rounded-md opacity-40 absolute " />
              <Image src={img1}   width={150} height={150} className="object-contain md:object-scale-down rounded-md opacity-40 absolute" />
              <Image src={img2}   width={150} height={150} className="object-contain md:object-scale-down  rounded-md opacity-40 absolute" />
              <Image src={img3}   width={150} height={150} className="object-contain md:object-scale-down rounded-md opacity-40 absolute" />
              <Image src={img4}   width={150} height={150} className="object-contain md:object-scale-down rounded-full opacity-40 absolute" />
              <Image src={img5}   width={150} height={150} className="object-contain md:object-scale-down rounded-full opacity-40 absolute" />    
              <Image src={img6}   width={150} height={150} className="object-contain md:object-scale-down rounded-full opacity-40 absolute" />    
              <Image src={img7}   width={150} height={150} className="object-contain md:object-scale-down rounded-full opacity-40 absolute" />    
              <Image src={img8}   width={150} height={150} className="object-contain md:object-scale-down rounded-full opacity-100 absolute" />
        </div>    
       
        
        
        </motion.div>
  )
}