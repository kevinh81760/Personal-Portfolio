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
            <LandingPage />
            <AboutMe />
            <Projects />
            <Gallery />
        </>
    )
}

export default Portfolio;