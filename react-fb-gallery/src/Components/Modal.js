import React from 'react'

export default function Modal({ src, alt, setSrc }) {
    return (
        <div className="fixed top-0 right-0 w-full h-screen flex justify-center items-center">
            <div className="absolute top-0 right-0 w-full h-screen bg-gray-600 opacity-50" onClick={() => setSrc(null)}></div>
            <img style={{ maxHeight: '90vh' }} className="max-w-screen-xl z-10" src={src} alt={'enlarged' + alt} />
        </div>
    )
}
