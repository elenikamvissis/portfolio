'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

export interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    { label: 'About me', page: '#about' },
    { label: 'My skills', page: '#skills' },
    { label: 'Contact me', page: '#contact' }
];

const NavBar: React.FC<{}> = () => {
    const [navBar, setNavBar] = useState<boolean>(false);

    return (
        <header className="w-full mx-auto px-4 bg-slate-50 shadow fixed top-0 z-50 xs:px-20">
            <div className="md:flex md:items-center justify-between">
                <div className="flex items-center justify-between py-3 ">
                    <div className="flex flex-row items-center">
                        <Image src="/logo.jpeg" alt="Picture of me" width={50} height={50} className="rounded-full shadow-sm shadow-slate-500/50 mr-2" />
                        <div className="md:py-5 flex flex-row align-middle">
                            <h1 className="text-xl font-bold text-gray-900">Eleni Kamvissis</h1>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setNavBar(!navBar)}>{navBar ? <AiOutlineClose size={28} /> : <RxHamburgerMenu size={28} />} </button>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navBar ? 'block' : 'hidden'}`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-gray-900">
                            {NAV_ITEMS.map((item, index) => {
                                return (
                                    <Link key={index} href={item.page} className={'block lg:inline-block text-gray-900  hover:text-pink-600'} onClick={() => setNavBar(!navBar)}>
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
