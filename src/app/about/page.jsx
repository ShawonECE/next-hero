"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
    const router = useRouter();
    const goToHistory = () => {
        router.push('/about/history');
    };
    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl">Here is about</h1>
            <button onClick={goToHistory} className='btn'>History</button>
        </div>
    );
};

export default About;