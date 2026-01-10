import React from 'react';
import HomeHeroText from '../components/home/HomeHeroText';
import HomeBottomText from '../components/home/HomeBottomText';
import Video1 from '../components/home/Video1';

const Home = () => {
  return (
    <div>

    <div className='h-screen w-screen fixed'>
        <Video1 />
    </div>
    <div className='h-screen w-screen relative flex flex-col'>
        <HomeHeroText />
        <HomeBottomText />

    </div>
    </div>
  )
}

export default Home