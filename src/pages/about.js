import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import aboutPic from '../../public/images/about.jpeg'
import AnimatedText from '@/components/AnimatedText'
import Skills from '@/components/Skills'
import Expreances from '@/components/Expreances'
import Education from '@/components/Education'
import TransitionEfffect from '@/components/TransitionEfffect'

const about = () => {
  return (
    <>
      <Head>
        <title>SKabri | About page</title>
        <meta name="description" content='any description' />
      </Head>
      <TransitionEfffect />
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-10 md:pt-8 sm:pt-6'>
          <div className='md:flex flex-row sm:flex-col sm:items-center' >

            <Image src={aboutPic} alt='do you want to know about me' className='w-24 h-auto rounded-full 2xl:hidden md:visible md:inline-block md:ml-6 sm:my-2' />

            <AnimatedText text="A little bit about me" className="mb-6 ld:text-6xl md:text-5xl sm:text-4xl sx:3xl break-words" />
          </div>
          <div className="flex items-center justify-between pt-4 w-full md:flex md:flex-col md:justify-center md:items-center ">
            <div className='w-1/2 md:w-full'>
              <p className='font-medium'>"Hello! I am a skilled and dedicated <b>web developer with 1 years of experience</b> in creating dynamic and user-friendly websites. I have a strong passion for technology and a deep understanding of the latest web development trends and best practices.</p>
              <p className='font-medium'>Throughout my career, I have successfully designed and developed numerous websites, ranging from small business sites to large e-commerce platforms. I specialize in front-end development, utilizing HTML, CSS, and JavaScript to bring captivating designs to life. I am also proficient in back-end technologies such as Mongoose and MySQL, allowing me to create robust and secure web applications.</p>
              <p className='font-medium'>If you're looking for a passionate web developer who can transform your ideas into stunning and functional websites, I'd love to hear from you. "Let's collaborate and create something amazing together!"</p>
            </div>
            <div className='w-1/3 md:hidden '>
              <Image src={aboutPic} alt='do you want to know about me' />
            </div>
          </div>
          <Education />
          <Skills />
          <Expreances />
        </Layout>
      </main>
    </>
  )
}

export default about