import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

export default function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div className="relative pt-1">
            <div className="w-64 overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                <div style={{ width: progress + '%' }} className="transition-all ease-in shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
            </div>
        </div>
    )
}
