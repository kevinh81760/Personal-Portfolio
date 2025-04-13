import React from 'react';
import project1 from '../assets/jiggy.jpg';
import project2 from '../assets/EC2.png';
import project3 from '../assets/budgetwise.png';
import FadeInOnScroll from '../components/FadeInOnScroll'

function Projects() {
    return (
        <div>
            <div className="relative bottom-100"> 
                <FadeInOnScroll> 
                    <h1 className="text-[45px] font-bold ml-15">My Projects.</h1>
                </FadeInOnScroll>
            </div>


            <div className="ml-25 relative bottom-80">
            <FadeInOnScroll> 
                <div className="flex space-x-6 relative mb-40">
                    <img src={project1} alt="Your Image" className="w-110 rounded-xl shadow-lg mr-15" />
                    <div className="">
                        <h1 className="text-[25px] font-semibold">Google Calendar AI Agent</h1>
                        <p1 className="relative top-4 text-[23px] font-semibold">Jiggy is an AI-powered scheduling <br/>assistant built on the MERN stack<br/>that syncs with Google Calendar to<br/>auto-optimize events, reschedule with <br/>smart suggestions, and adjust plans via<br/>simple commands. 🚀</p1>
                    </div>
                </div>
            </FadeInOnScroll> 

            <FadeInOnScroll> 
                <div className="flex space-x-6">
                    <img src={project2} alt="Your Image" className="w-110 rounded-xl shadow-lg mb-40 mr-15" />
                    <div className="f">
                        <h1 className="text-[25px] font-semibold">EC2</h1>
                        <p1 className="relative top-4 text-[23px] font-semibold">A CSGO trading chatbot deployed on <br/> AWS EC2. It scrapes the top five trading<br/> sites in real time and uses RAG to generate<br/> market-based responses. Built with MERN <br/>for fast and dynamic interaction.</p1>
                    </div>
                </div>
            </FadeInOnScroll> 

            <FadeInOnScroll> 
                <div className="flex space-x-6">
                    <img src={project3} alt="Your Image" className="w-110 rounded-xl shadow-lg mr-15" />
                    <div className="">
                        <h1 className="text-[25px] font-semibold">BudgetWise</h1>
                        <p1 className="relative top-4 text-[23px] font-semibold">BudgetWise is a budgeting application <br/> built with React and Flask. It allows users <br/> to track income, expenses, and budget goals<br/> through an intuitive interface, with real-time<br/> handling and inuitive design</p1>
                    </div>
                </div>
            </FadeInOnScroll> 

            </div>
        </div>
    )
}

export default Projects;