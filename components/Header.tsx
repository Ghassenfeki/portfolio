import React from 'react'
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import Link from 'next/link';
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-20 p-8 flex items-start justify-between max-w-7xl mx-0 z-20  xl:items-center"> 
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5,
        }}
        className="flex flex-row items-center">
        <SocialIcon 
        url="https://github.com/Ghassenfeki" 
        fgColor='gray'
        bgColor='transparent'
        />
        <SocialIcon 
        url="https://www.linkedin.com/in/ghassen-feki-67a846181/" 
        fgColor='gray'
        bgColor='transparent'
        />
         <SocialIcon 
        url="https://www.facebook.com/profile.php?id=100001177441346" 
        fgColor='gray'
        bgColor='transparent'
        />
         <SocialIcon 
        url="https://www.instagram.com/f.ghassen/" 
        fgColor='gray'
        bgColor='transparent'
        />
         </motion.div>
         <Link href="#contacts">
        <motion.div 
                initial={{
                    x:500,
                    opacity:0,
                    scale:0.5
                }}
                animate={{
                    x:0,
                    opacity:1,
                    scale:1
                }}
                transition={{
                    duration:1.5,
                }}     
        
        
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-block text-sm -mr-80 text-gray-400 '>Get in Touch</p>
        </motion.div>
        </Link>
    </header>
  )
}