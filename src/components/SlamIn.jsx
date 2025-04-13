import { motion } from 'framer-motion';

function SlamIn({ children }) {
    return (
        <motion.div
            initial={{ scale: 0.8, y: -50, opacity: 0 }}  // <-- start slightly above and smaller
            animate={{ 
                scale: 1, 
                y: 0, 
                opacity: 1,
                transition: { 
                    type: "spring", 
                    stiffness: 300,   // Makes it feel like a slam
                    damping: 30       // No bouncy mess
                }
            }}
        >
            {children}
        </motion.div>
    );
}

export default SlamIn;
