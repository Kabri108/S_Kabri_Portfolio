import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "../../public/Images/ProfilePic.jpeg"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { DownloadIcon, HelloHandIcon } from "@/components/Icons";
import Head from "next/head";
import TransitionEfffect from "@/components/TransitionEfffect";

export default function Home() {
  return (
    <>
    <Head>
      <title>S Kabri Portfolio</title>
      <meta name="description" content="Generated by Sayantan Kabri"/>
    </Head>
    <TransitionEfffect/>
    <main className='flex items-center text-Dark_gray w-full min-h-screen '>
      <Layout className="pt-8 md:pt-4 sm:pt-2 xs:pt-1">
        <div className="flex items-center justify-between w-full md:flex md:flex-col md:justify-center md:items-center ">
          <div className="w-1/3 rounded-full bg-rose-300 md:bg-rose-300 md:rounded-full  md:w-56">
            <Image src={ProfilePic} alt="S Kabri" className="w-full h-auto rounded-full md:w-full sm:w-full xs:w-full" />
          </div>
          <div className="w-1/2  md:justify-center md:items-center self-center ld:w-full md:w-full">
            <AnimatedText text="Sayantan Kabri~" className="!text-5xl xl:!text4xl ld:text-center md:!text-4xl sm:!text-3xl" />
            <article className="flex flex-row  items-baseline">
              <HelloHandIcon  />
              <p className="my-4 text-base text-Off_white font-medium ">
                I am a full-stack devloper, I am dedicated to turning ideas into innovative web application.
                Explore my latest projects and ideas.
              </p>
            </article>
            <div className="flex items-center md:justify-center mt-2 md:self-center ld:self-center">
              <Link href="/resume.pdf" target={"_blank"} className="flex items-center bg-Charcoal text-white p-2 px-4 text-lg font-semibold rounded-lg hover:bg-transparent border-2 hover:border-Charcoal mr-2 md:p-2 md:px-2 md:text-base shadow-lg"
                download={true}>Resume<DownloadIcon className={"w-6 h-6 ml-1 "} /></Link>
              <Link href="/contact" target={"_blank"}
                className="flex font-medium bg-gray-600 text-white hover:bg-transparent hover:font-semibold border-2 border-gray-50  p-2 px-4 rounded-lg hover:border-gray-600 shadow-2xl "
              > Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
    </>
  )
}
