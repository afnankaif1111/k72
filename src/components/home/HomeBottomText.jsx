import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-2'>
      <div className='text-[3vw] leading-[6vw] border-3 hover:border-lime-300 hover:text-lime-300 border-white rounded-full px-8 py-1 pt-3 pb-0 uppercase'>
      <Link to='/projects ' className='text-[5vw] mt-6' >projects</Link>
      </div>
      
      <div className='text-[3vw] leading-[6vw] border-3 hover:border-lime-300 hover:text-lime-300 border-white rounded-full px-8 py-1 pt-3 pb-0 uppercase'>
      <Link to='/agents' className='text-[5vw] mt-6'>afnan kaif</Link>
      </div>
      
    </div>
  )
}

export default HomeBottomText