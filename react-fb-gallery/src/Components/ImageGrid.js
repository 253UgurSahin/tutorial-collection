import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';


export default function ImageGrid({ setSrc, setAlt }) {
    const { docs } = useFirestore('images');
    console.log(docs)

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {
                docs && docs.map(doc => (
                    <motion.div layout className="w-full md:w-2/3 xl:w-2/5 cursor-pointer" key={doc.id} onClick={() => { setSrc(doc.url); setAlt(doc.name); }}>
                        <motion.img src={doc.url} alt={doc.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                ))
            }
        </div>
    )
}
