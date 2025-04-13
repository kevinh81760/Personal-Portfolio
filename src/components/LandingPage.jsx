import React from 'react';
import phoneImage from '../assets/phone.png';
import FadeInOnScroll from '../components/FadeInOnScroll';
import TypingAnimation from '../components/TypingAnimation';

function LandingPage() {
    return (
        <div>
            {/* Heading with Fade In */}
            <div className="relative top-35 -right-20">
                <FadeInOnScroll>
                    <h1 className="text-[65px] font-bold">
                        Hey, I'm Kevin.
                    </h1>
                </FadeInOnScroll>
            </div>

            {/* Static "I'm a" + Typing "developer!" */}
            <div className="relative top-45 -right-21 flex items-center space-x-2">
                <h2 className="text-[40px] font-bold">
                    I'm a
                </h2>
                <TypingAnimation 
                    text="developer!" 
                    speed={80} 
                    className="text-[40px] font-bold"
                />
            </div>

            {/* Phone Image (no animation) */}
            <div className="flex justify-end mb-85">
                <img 
                    src={phoneImage} 
                    alt="Phone" 
                    className="w-85 flex relative -top-23 -left-55 mb-20"
                />
            </div>
        </div>
    );
}

export default LandingPage;
