import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gary-400/20 scrollbar-thumb-[#F7AB0A]/80' >
      <Head>
        <title>Ghassen Feki Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className='snap-start'>
          <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      {/* <section id="experience" className='snap-center'>
        <Experience />
      </section> */}
      {/* Skills */}
      <section id="skills" className='snap-center'>
      <Skills />
     </section>
      {/* Projects */}
      <section id="projects" className='snap-start' ><Projects /></section>
      
      {/* contact me */}
      <section id="contacts" className='snap-start'>
          <Contacts />
      </section>
    </div>
  )
}

export default Home
