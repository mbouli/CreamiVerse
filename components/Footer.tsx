import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <Image src="/favicon.png" alt="" className="w-10 h-10" />

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link
                            href="/privacy"
                            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/terms"
                            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                        >
                            Terms & Conditions
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/razod/creamiverse"
                            className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
                            target='_blank'
                        >
                            Source Code
                        </Link>
                    </li>
                </ul>
            </div>
            <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
                Copyright © 2025&nbsp;
                <Link href="/" rel="noreferrer">CreamiVerse</Link>. Not affiliated with Ninja.
            </p>
        </footer>
    )
}

export default Footer