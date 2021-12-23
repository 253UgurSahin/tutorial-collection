import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/jpeg', 'image/png']

    function handleFileState(e) {
        let selected = e.target.files[0];

        setError('');

        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('Please select an image (png or jpeg)');
        }
    }

    return (
        <form className="mt-5">
            <div className="flex w-full flex-col items-center justify-center bg-grey-lighter">
                <label className="mb-3 flex p-3 items-center bg-white text-blue rounded-full shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-300">
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <input type='file' className="hidden" onChange={handleFileState} />
                </label>

                { error && <p className="text-red-500">{ error }</p> }
                { file && <p className="font-bold text-gray-600">{ file.name }</p> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}
