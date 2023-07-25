import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/project1.png"
import { IconGithub } from '@/components/Icons'
import TransitionEfffect from '@/components/TransitionEfffect'


const Project = ({ title, summery, img, link, github }) => {
    return (
        <article className='w-ful bg-Ivory p-6 flex flex-col justify-between items-center rounded-3xl border border-solid border-black border-r-8 border-b-8 shadow-2xl xs:p-4 transition hover:-translate-y-1 delay-150 ease-in-out hover:scale-110'>

            <Link href={link} target="_blank" className='cursor-pointer rounded-md'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between'>
                <Link href={link}
                    target='_blank'
                    className=' hover:underline underline-offset-2'>
                    <h2 className=' my-2 w-full text-left text-3xl font-bold ld:text-2xl'>{title}</h2>
                    
                </Link>
               <div className=''>
               <p>{summery}</p>
               </div>
                <div className='flex mt-2 items-center  '>
                    <Link href={link} target='_blank' className=''><IconGithub /></Link>
                    <Link href={github} target='_blank' className='ml-4 bg-black rounded-lg text-white p-1 hover:bg-zinc-700 border-2 border-black hover:font-semibold md:text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>visit project </Link>
                </div>
            </div>

        </article>

    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title> SKbari | project page</title>
                <meta content='project' />
            </Head>
            <TransitionEfffect/>
            <main className='w-full flex flex-col items-center justify-center min-h-screen '>
                <Layout className='pt-16  '>
                 
                  <AnimatedText text="welcome to my project world" className='ld:text-6xl md:text-5xl sm:text-4xl sx:3xl break-words mb-10'/>
                  
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 ld:gap-x-8 sm:gap-x-0'>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="project-1"
                                img={project1}
                                summery="this project is fully made on react node and mongodb"
                                link="/"
                                github='/'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="project-1"
                                img={project1}
                                summery="this project is fully made on react node and mongodb"

                                link="/"
                                github='/'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="project-1"
                                img={project1}
                                summery="this project is fully made on react node and mongodb"

                                link="/"
                                github='/'
                            />
                        </div>
                    </div>
                </Layout>
            </main>

        </>
    )
}

export default projects


