'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section id="home">
            <div className="flex flex-col md:flex-row text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-3/5 order-1">
                    <h1 className="text-5xl font-bold mt-6 md:mt-0 md:text-7xl transition ease-in-out">Hi, I&#39;m Eleni!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a <span className="font-semibold text-pink-600">front-end developer </span>
                        based in Malmö, Sweden.
                    </p>
                </div>
                <div className="md:mt-2 md:w-1/2 align-center flex md:items-center md:justify-center">
                    <Image src="/eleni.png" alt="Picture of me" width={300} height={300} className="rounded-full shadow-xl shadow-slate-500/50" style={{ width: '200px', height: '200px' }} />
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center">
                <Link href="#about">
                    <HiArrowDown size={40} className="animate-bounce border-1 rounded-full" />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
