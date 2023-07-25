import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ examname, school, time, grade,subject }) => {
  const ref=useRef(null);
  return (
    <li ref={ref} className='my-8 flex flex-col first:mt-0 last:mb-0 items-center justify-center w-[60%] md:w-[80%] shadow-2xl'>
      <LiIcon reference={ref}/>
      <div className='p-2'>
        <h3 className='text-white font-semibold'>{examname}</h3>
        <span className='  text-yellow-100 xs:text-sm'>
          {time} | {school}
        </span>
        <p className='text-white md:text-sm'>
          {subject}
        </p>
        <p className='text-white md:text-sm '>
          Marks: {grade}
        </p>

      </div>
    </li>

  )
}


const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <div className='my-64 md:my-32 sm:my-20 xs:my-10'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-4xl'> My Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative ld:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute  left-9 top-0 w-[4px] h-full bg-black rounded-full origin-top md:w-[2px] md-left-[30px] xs:left-[20px]' />
         
        <ul className='w-full flex flex-col items-center justify-center ml-4 xs:ml-2'>
          <Details
            examname="Secondary Education"
            school="Garden Reach Mudiali High School (H.S)"
            time="Year:2019"
            subject='Physics, chemistry, Math and Biology are the main subjects.  '
            grade="80.14%"
          />
          <Details
            examname="Higher Secondary (H.S)"
            school="Garden Reach Mudiali High School (H.S)"
            subject='Physics, chemistry, Math and Biology are the main subjects.  '
            time="Year:2021"
            grade="78.6%"
          />
          <Details
           examname="B.Tech (CSE)"
           school="Moulana Abul Kalam Azad Univercity"
           time="Year:2021-2025"
           grade="8.33 cgpa"
          />
         
        </ul>
      </div>
    </div>
  )
}

export default Education 