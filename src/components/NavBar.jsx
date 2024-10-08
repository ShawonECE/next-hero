"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const goToLogin = () => {
        router.push('/login');
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link className={pathName === '/' ? 'text-teal-600' : ''} href={'/'}>Home</Link></li>
                        <li><Link className={pathName === '/about' ? 'text-teal-600' : ''} href={'/about'}>About</Link></li>
                        <li><Link className={pathName === '/contact' ? 'text-teal-600' : ''} href={'/contact'}>Contact</Link></li>
                        <li><Link className={pathName === '/blogs' ? 'text-teal-600' : ''} href={'/blogs'}>Blogs</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className={pathName === '/' ? 'text-teal-600' : ''} href={'/'}>Home</Link></li>
                    <li><Link className={pathName === '/about' ? 'text-teal-600' : ''} href={'/about'}>About</Link></li>
                    <li><Link className={pathName === '/contact' ? 'text-teal-600' : ''} href={'/contact'}>Contact</Link></li>
                    <li><Link className={pathName === '/blogs' ? 'text-teal-600' : ''} href={'/blogs'}>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn" onClick={goToLogin}>Log in</button>
            </div>
        </div>
    );
};

export default NavBar;