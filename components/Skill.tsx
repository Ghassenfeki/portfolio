import React from 'react';
import {motion} from 'framer-motion';
import img from "./logo.png";
import img1 from "./lohohtml.jpg";
import Image from 'next/image';


type Props = {
    directionLeft?:boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>

        <motion.div 
        initial={{
            x:directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition ={{duration:1}}
        whileInView={{opacity:1,x:0}}
        className='rounded-full border border-gray-500 object-cover w-64 h-32 md:w-40 md:h-40 xl:w-40 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'

        
        >
            <Image 
             src={img} className="rounded-full opacity-40 absolute"
            />
            
            
            </motion.div>   
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 wl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-50'>
                    100%
                </p>
            </div>
        </div>
    </div>
  )
}