import React from 'react';
import Hero from './Hero';
import HomeDescreption from './HomeDescreption';
import HomeAdditionalInfo from './HomeAdditionalInfo';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <HomeDescreption></HomeDescreption>
            <HomeAdditionalInfo></HomeAdditionalInfo>
        </div>
    );
};

export default Home;