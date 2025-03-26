import React from 'react';
import Me from '../assets/kevin.jpg'

function AboutMe() {
    return (
        <div>
            <h1 className="text-[34px] font-bold relative bottom-75 ml-20">About me</h1>
            <p className="text-[30px] relative bottom-65 ml-20">I'm Kevin Ha, a third-year <br /> Computer Science student at <br /> SJSU. I specialize in full-stack <br /> development, AI agents, and <br /> scalable systems. Proficient using <br /> MERN, Java, and Python. Outside <br /> of coding, I love photography and <br /> staying active in the gym.</p>
            <div className="justify-end">
                <img src={Me} alt="picture" className="w-100 relative bottom-170 left-220 rounded-xl "/>
            </div>
        </div>
    )
}

export default AboutMe;