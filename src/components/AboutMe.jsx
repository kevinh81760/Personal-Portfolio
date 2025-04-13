import React from 'react';
import Me from '../assets/kevin.jpg'
import FadeInOnScroll from '../components/FadeInOnScroll'

function AboutMe() {
    return (
        <div>
            <div className="relative bottom-75">
                <FadeInOnScroll>
                    <h1 className="text-[34px] font-bold ml-20">About me</h1>
                </FadeInOnScroll>
            </div>

            <div className="relative bottom-65">
                <FadeInOnScroll>
                    <p className="text-[30px] ml-20">
                        I'm Kevin Ha, a third-year <br />
                        Computer Science student at <br />
                        SJSU. I specialize in full-stack <br />
                        development, AI agents, and <br />
                        scalable systems. Proficient using <br />
                        MERN, Java, and Python. Outside <br />
                        of coding, I love photography and <br />
                        staying active in the gym.
                    </p>
                </FadeInOnScroll>
            </div>

            <div className="relative bottom-170 left-220 justify-end">
                <FadeInOnScroll>
                    <img 
                        src={Me} 
                        alt="picture" 
                        className="w-100 rounded-xl"
                    />
                </FadeInOnScroll>
            </div>
        </div>
    )
}

export default AboutMe;
