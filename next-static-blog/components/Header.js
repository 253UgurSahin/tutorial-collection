import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full shadow-md mb-5 py-2">
            <div className="container">
                <Link href="/" className="cursor-pointer">
                    <h2 className="text-2xl font-bold">HOME</h2>
                </Link>
            </div>
        </header>
    )
}
