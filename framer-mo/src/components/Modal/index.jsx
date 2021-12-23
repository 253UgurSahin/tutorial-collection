import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

export default function index({ handleClose, text }) {    
    const dropIn = {
        hidden: { y: "-100vh", opacity: 0, },
        vissible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: .1,
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
        exit: { y: "100vh", opacity: 0, }
    }

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md mx-auto p-2 rounded-md flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-500"
                variants={dropIn}
                initial="hidden"
                animate="vissible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose} className="rounded bg-gray-900 text-white font-semibold py-1 px-3">Close Me</button>
            </motion.div>
        </Backdrop>
    )
}
