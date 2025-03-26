import React from 'react';
import phoneImage from '../assets/phone.png';
import FadeInOnScroll from '../components/FadeInOnScroll';

function LandingPage() {
    return (
        <FadeInOnScroll>
            <div>
                <h1 className="text-[65px] font-bold relative top-35 -right-20">Hey, I'm Kevin.</h1>
                <h2 className="text-[40px] font-bold relative top-45 -right-20">I'm a developer.</h2>
                <div className="flex justify-end mb-85"> 
                    <img src={phoneImage} alt="Phone" className="w-85 flex relative -top-23 -left-55 mb-20"/>
                </div>
            </div>
        </FadeInOnScroll>
    )
}

export default LandingPage;