import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, time, addres, work }) => {
  const ref=useRef(null);
  return (
    <li ref={ref} className='my-8 flex flex-col first:mt-0 last:mb-0 items-center justify-center w-[60%] md:w-[80%] shadow-2xl'>
      <LiIcon reference={ref}/>
      <div className='p-2'>
        <h3 className='text-white font-semibold'>{position}<a href='' className=' text-yellow-200'>@{company}</a></h3>
        <span className=' text-yellow-100 xs:text-sm'>
          {time} | {addres}
        </span>
        <p className='text-white md:text-sm'>
          {work}
        </p>
      </div>
    </li>

  )
}


const Expreances = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <div className='my-64 md:my-32 sm:my-20 xs:my-10'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-4xl'>Expreances</h2>
      <div ref={ref} className='w-[75%] mx-auto relative ld:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute  left-9 top-0 w-[4px] h-full bg-black rounded-full origin-top md:w-[2px] md-left-[30px] xs:left-[20px]' />
         
        <ul className='w-full flex flex-col items-center justify-center ml-4 xs:ml-2'>
          <Details
            position="web devloper"
            company="Google"
            time="2024-present"
            addres="Noida"
            work="as a web devloper in a fromtent projectorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt libero odio."
          />
          <Details
            position="web devloper"
            company="Facebook"
            time="winter 2023"
            addres="Noida"
            work="as a web devloper in a fromtent projectorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt libero odio."
          />
          <Details
            position="web devloper"
            company="Adobe"
            time="2020-2021"
            addres="Noida"
            work="as a web devloper in a fromtent projectorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt libero odio."
          />
        
        </ul>
      </div>
    </div>
  )
}

export default Expreances 