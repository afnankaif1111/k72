import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-10 text-center'>
        <div className='text-[6vw] uppercase leading-[6vw]'>
            Manifest.
        </div>
        <div className='text-[6vw] uppercase  flex items-center leading-[6vw]'>
            Obesessi <div className='h-10vw'><Video/></div> n.
        </div>
        <div className='text-[6vw] uppercase leading-[6vw]'>
            Engineer.
        </div>
    </div>
  )
}

export default HomeHeroText