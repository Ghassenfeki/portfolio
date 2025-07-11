

import React from 'react';
import Image from 'next/image';
import img from "./platforme1.png";
import { motion } from 'framer-motion';

type Props = { }

export default function Project({}: Props) {
    const projects=[1,2,3];
   const names=['e-commerce','delivery food application','application institute'];
   const description=['web application developed with html/css/js and node js and mongoDB database system',
   'Mobile application developed with react native ','Mobile application developed with react native/redux'];
  return (
    <motion.div 
    initial={{opacity:0}}
      transition={{duration:1.2}}
      whileInView={{opacity:1}}
        className='h-screen  relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
        
            {projects.map((project,i) => (

<>
           <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
            initial={{y:-300,opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            
            >
            <Image src={img} width={250} height={250} className="object-contain md:object-scale-down rounded-md opacity-40 absolute " />
                </motion.div>
            
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>
                        Case Study {i+1} of {projects.length}:
                    </span>{" "} {names[i]} 
                </h4>
                <p className='text-lg text-center md:text-left'>
                    {description[i]}
                </p>
                </div>
                </div>
                </>
                 ))}
            </div>
       <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
       </motion.div>
  );
}