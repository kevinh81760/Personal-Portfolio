import React from 'react';
import project1 from '../assets/jiggy.jpg';
import project2 from '../assets/EC2.jpg';
import project3 from '../assets/EC2.jpg';

function Projects() {
    return (
        <div>
            <h1 className="relative bottom-100 text-[45px] font-bold ml-15">My Projects.</h1>
            <div className="ml-25 relative bottom-80">
                <div className="flex space-x-6 relative mb-40">
                    <img src={project1} alt="Your Image" className="w-110 rounded-xl shadow-lg mr-15" />
                    <div className="">
                        <h1 className="text-[25px] font-semibold">Google Calendar AI Agent</h1>
                        <p1 className="relative top-4 text-[23px] font-semibold">Jiggy is an AI-powered scheduling <br/>assistant built on the MERN stack<br/>that syncs with Google Calendar to<br/>auto-optimize events, reschedule with <br/>smart suggestions, and adjust plans via<br/>simple commands. 🚀</p1>
                    </div>
                </div>

                <div className="flex space-x-6">
                    <img src={project2} alt="Your Image" className="w-110 rounded-xl shadow-lg mb-40 mr-15" />
                    <div className="f">
                        <h1 className="text-[25px] font-semibold">Jiggy</h1>
                        <p1 className="relative top-4 text-[23px] font-semibold">Jiggy is an AI-powered scheduling <br/>assistant built on the MERN stack<br/>that syncs with Google Calendar to<br/>auto-optimize events, reschedule with <br/>smart suggestions, and adjust plans via<br/>simple commands. 🚀</p1>
                    </div>
                </div>

                <div className="flex space-x-6">
                    <img src={project3} alt="Your Image" className="w-110 rounded-xl shadow-lg mr-15" />
                    <div className="">
                        <h1 className="text-[25px] font-semibold">Jiggy </h1>
                        <p1 className="relative top-4 text-[23px] font-semibold">Jiggy is an AI-powered scheduling <br/>assistant built on the MERN stack<br/>that syncs with Google Calendar to<br/>auto-optimize events, reschedule with <br/>smart suggestions, and adjust plans via<br/>simple commands. 🚀</p1>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Projects;