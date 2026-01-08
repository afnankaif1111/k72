import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-10 text-center'>
        <div className='text-[6vw] uppercase justify-center flex items-center leading-[6vw]'>
            Manifest.
        </div>
        <div className='text-[6vw] uppercase justify-center flex items-center leading-[6vw]'>
            Obesessi <div className='bg-amber-300 h-[5vw] w-[5vw] -mt-2.5 rounded-full '><Video/></div> n.
        </div>
        <div className='text-[6vw] uppercase justify-center flex items-center leading-[6vw]'>
            Engineer.
        </div>
    </div>
  )
}

export default HomeHeroText