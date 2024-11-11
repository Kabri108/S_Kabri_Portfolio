import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import aboutPic from '../../public/images/about1.png'
import Skills from '@/components/Skills'
import Expreances from '@/components/Expreances'
import Education from '@/components/Education'
import TransitionEfffect from '@/components/TransitionEfffect'
import TypingEffect from '@/components/TypingEffect'

const about = () => {
  return (
    <>
      <Head>
        <title>SKabri | About page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEfffect />
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-10 md:pt-8 sm:pt-6'>
          <div className='md:flex flex-row sm:flex-col sm:items-center' >

            <Image src={aboutPic} alt='do you want to know about me' className='w-24 h-auto rounded-full 2xl:hidden md:visible md:inline-block md:ml-6 sm:my-2' />

            <TypingEffect text="A little bit About Me" className="!text-5xl xl:!text4xl ld:text-center md:!text-4xl sm:!text-3xl" />
          </div>
          <div className="flex items-center justify-between pt-4 w-full md:flex md:flex-col md:justify-center md:items-center ">
            <div className='w-1/2 md:w-full'>
              <p className='font-medium'>
              I'm a passionate full-stack web developer focused on building impactful web applications. I leverage my strong foundation in JavaScript, HTML, CSS, and React to create dynamic and engaging user interfaces 💻. On the back end, I use Node.js to develop robust and scalable server-side solutions ⚙️. 
              I'm always eager to connect and collaborate on new projects! Feel free to reach out if you're looking for a skilled developer – let's build something great together! 📩 sayantankabri108@gmail.com
                </p>
            </div>
            <div className='w-1/3 md:hidden '>
              <Image src={aboutPic} alt='do you want to know about me' />
            </div>
          </div>
          <Skills />
          <Education />
          <Expreances />
        </Layout>
      </main>
    </>
  )
}

export default about