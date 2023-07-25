import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { IconGithub, IconHome, LinkedInIcon, MailIcon, IconPhoneMessageOutline, SkillManIcon, ProjectIcon, SvgComponent, IconWhatsapp, AboutIcon } from './Icons';


const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-1 rounded inline-block bg-white -bottom-0.5 w-0 absolute right-0
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className=' font-medium flex items-center justify-around w-full py-5  text-White  bg-pink-800 md:justify-center md:z-30 md:sticky md:top-96 md:rounded-full   md:backdrop-blur-sm md:border-2  md:bg-transparent md:w-max md:m-auto 
    md:p-2'>
      <div className='flex flex-row justify-around w-full items-center sm:hidden sm:py-2'>
        <nav>
          <CustomLink href="/" title="Home" className='ml-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4' />
          <CustomLink href="/contact" title="Contact" className='mx-4' />
        </nav>
        <nav className='flex flex-row  hover:cursor-pointer items-center   '>

          <Link href='https://www.linkedin.com/in/sayantan-kabri-9907b7238/' className='mr-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' target='_blank'><LinkedInIcon /> </Link>
          <Link href='/contact' className='mr-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' target='_blank'><MailIcon /> </Link>
          <Link href='https://www.linkedin.com/in/sayantan-kabri-9907b7238/' className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><IconGithub /> </Link>
        </nav>
      </div>
      <div className='flex flex-row items-center mx-2 2xl:hidden  sm:inline-flex   '>
        <Link href="/" className='mr-4 '><IconHome/></Link>
        <Link href="/about"  className='mr-4 '><AboutIcon/></Link>
        <Link href="/projects"  className='mr-4'><ProjectIcon/></Link>
        <Link href="/contact" ><IconWhatsapp/></Link>

      </div>
      
    </header>
  )
}
export default Navbar

