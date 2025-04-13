import React, { useState, useEffect } from 'react';

function TypingAnimation({ text = '', speed = -50, className = '' }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false); // ✅ Track if typing done

    useEffect(() => {
        if (!text) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index >= text.length) {
                clearInterval(interval);
                setIsTypingComplete(true); // ✅ Mark typing done
                return;
            }

            const nextChar = text[index];
            setDisplayedText(prev => prev + nextChar);
            index++;
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div className={className}>
            {displayedText}
            {/* ✅ Blinking cursor */}
            <span className="animate-blink">
                |
            </span>
        </div>
    );
}

export default TypingAnimation;
