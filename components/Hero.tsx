import React from 'react';
import{Cursor,useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import img from "./ph.png";
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const[text,count]= useTypewriter({
        words:["Hi all, I'm Ghassen",
            "A passionate Full Stack Software Developer ",
           ],
loop:true,
delaySpeed:2000
    })
  return (
    <div>
        <div className='absolute right-0'>
                <BackgroundCircles  />
                </div>

    <div className=' h-screen relative top-60 left-72'>
        <Image src={img} alt='' />
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pt-3 pb-6 tracking-[15px]'>Software Engineer</h2>

        </div>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
        <span  className='mr-3'>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className='pt-5  relative top-28  text-center '>

<Link href="#about"><button className='heroButton'>about</button></Link>
{/* <Link href="#experience"><button className='heroButton'>Experience</button></Link> */}
<Link href="#skills"><button className='heroButton'>Skills</button></Link>
<Link href="#projects"><button className='heroButton'>Projects</button></Link>
<Link href="#contacts"><button className='heroButton'>Contacts</button></Link>
</div> 

    </div>

  
</div>
  )
}