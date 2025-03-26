import React from 'react';

import AboutMe from '../components/AboutMe'
import Gallery from '../components/Gallery'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

function Portfolio() {
    return (
        <>
            <Navbar />

            <div id="home">
                <LandingPage />
            </div>

            <div id="about" className="scroll-mt-90">
                <AboutMe />
            </div>

            <div id="projects" className="scroll-mt-110">
                <Projects />
            </div>

            <Gallery />
        </>
    );
}

export default Portfolio;
