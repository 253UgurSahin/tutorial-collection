import { motion } from 'framer-motion';

export default function index({ children, onClick }) {
    return (
        <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-20 flex justify-center items-center"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}
