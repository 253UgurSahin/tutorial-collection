import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);

    return (
        <div className="w-full min-h-screen flex flex-nowrap justify-center items-center px-3">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
                className="rounded bg-blue-600 text-white font-semibold py-1 px-3"
                onClick={() => modalOpen ? close() : open()}
            >
                Click Me
            </motion.button>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                // onExitComplete={() => null}
            >            
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}></Modal> }
            </AnimatePresence>
        </div>
    );
}

export default App;
