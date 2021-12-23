import React from 'react'

export default function Title() {
    return (
        <div className="flex flex-col">
            <nav className="w-full py-2 shadow-md mb-5">
                <div className="container mx-auto px-2">
                    <h2 className="text-2xl font-bold uppercase">Firegram</h2>
                </div>
            </nav>

            <div className="container mx-auto px-2">
                <h1 className="text-center font-bold text-4xl">Start Uploading New Images!</h1>
            </div>
        </div>
    )
}
