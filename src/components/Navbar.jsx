import React from 'react';

function Navbar() {
    const handleHomeClick = () => {
        alert("Shush is gay");
    };

    const handleAboutClick = () => {
        alert("Shush is gay");
    }

    const handleProjectClick = () => {
        alert("Shush is gay");
    }

    return (
        <div> 
            <button 
                onClick={handleHomeClick}
                className="text-white text-2xl p-3 hover:text-neutral-300"
            >
                Home
            </button>

            <button 
                onClick={handleAboutClick}
                className="text-white text-2xl p-3 hover:text-neutral-300"
            >
                About
            </button>

            <button 
                onClick={handleProjectClick}
                className="text-white text-2xl p-3 hover:text-neutral-300"
                >
                Projects    
            </button>
        </div>
    )
}

export default Navbar;