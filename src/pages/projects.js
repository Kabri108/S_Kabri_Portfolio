import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/project1.png';
import { IconGithub } from '@/components/Icons';
import TransitionEfffect from '@/components/TransitionEfffect';

const Project = ({ title, summery, img, link, github }) => {
  return (
    <article className="w-ful bg-gray-800  flex flex-col justify-between items-center  border border-solid border-white  shadow-2xl xs:p-4 transition hover:-translate-y-1 delay-150 ease-in-out hover:scale-110 overflow-hidden rounded-lg">
      <Link href={link} target="_blank" className="cursor-pointer rounded-md">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between p-6 gap-2">
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2 text-2xl font-bold text-white"
        >
          {title}
        </Link>
          <p className='text-gray-400 line-clamp-3'>{summery}</p>
        <div className="flex mt-4 items-center  ">
          <Link href={github} target="_blank" className="">
            <IconGithub/>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 bg-yellow-500 rounded- text-white px-2 py-1 hover:bg-zinc-700 border-2 border-yellow-300 hover:font-semibold md:text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-md"
          >
            Preview{' '}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> SKbari | project page</title>
        <meta content="project" />
      </Head>
      <TransitionEfffect />
      <main className="w-full flex flex-col items-center justify-center min-h-screen ">
        <Layout className="pt-16">
          <AnimatedText
            text="welcome to my project world"
            className="ld:text-6xl md:text-5xl sm:text-4xl sx:3xl break-words mb-10"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 ld:gap-x-8 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Movie-FI~"
                img={project1}
                summery="this project is fully made on react node and mongodb"
                link="https://movie-fi.vercel.app/"
                github="https://github.com/Kabri108/MovieFi"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PCMT"
                img={project1}
                summery="this project is fully made on react node and mongodbfffffffffffffffffffffffffffffffff"
                link="https://pcmt.vercel.app/"
                github="https://github.com/Kabri108/pcmt"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="project-1"
                img={project1}
                summery="this project is fully made on react node and mongodb"
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
