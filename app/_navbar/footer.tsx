"use client";
import Link from "next/link"
import { useState } from "react"

export default function Footer() {

    const [col, setCol] = useState<string>('c0c0c0')
    const [seccol, setsec] = useState<string>('f45a33')

    return (
        <div className="min-h-[30vh] flex flex-col gap-8 sm:gap-10 justify-center items-center bg-[#000000e9] py-10 px-4">

            {/* Top Section */}
            <div className="text-white flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center w-full lg:w-[60%]">

                {/* Brand */}
                <div className="flex flex-col gap-1 text-center lg:text-left">
                    <div className="font-bold text-xl sm:text-2xl text-[#f45a33]">
                        Akshay <span className="text-white">Kapoor</span>
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">
                        Full Stack AI/ML Engineer
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-gray-400">
                    <div className="hover:cursor-pointer hover:text-[#f45a33] transition-all duration-100 text-sm font-semibold">About</div>
                    <div className="hover:cursor-pointer hover:text-[#f45a33] transition-all duration-100 text-sm font-semibold">Skills</div>
                    <div className="hover:cursor-pointer hover:text-[#f45a33] transition-all duration-100 text-sm font-semibold">Projects</div>
                    <div className="hover:cursor-pointer hover:text-[#f45a33] transition-all duration-100 text-sm font-semibold">Contact</div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 sm:gap-5">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={'https://www.linkedin.com/in/kapoorakshay24'}
                        onMouseEnter={() => setCol('ffffff')}
                        onMouseLeave={() => setCol('c0c0c0')}
                        className="transition-all duration-100 hover:bg-[#248CF3] p-3 sm:p-4 shadow-xl bg-[#222222] rounded-2xl"
                    >
                        <img width={25} height={25} src={`https://img.icons8.com/ios-filled/50/${col}/linkedin.png`} alt="No Image Available" />
                    </Link>

                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={'https://github.com/AkshayKapoor024'}
                        onMouseEnter={() => setCol('ffffff')}
                        onMouseLeave={() => setCol('c0c0c0')}
                        className="transition-all duration-100 hover:bg-[#F45A33] p-3 sm:p-4 shadow-xl bg-[#222222] rounded-2xl"
                    >
                        <img width={25} height={25} src={`https://img.icons8.com/ios/50/${col}/github--v1.png`} alt="No Image Available" />
                    </Link>

                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={'https://img.icons8.com/ios/50/ed5ea5/mail.png'}
                        onMouseEnter={() => setCol('ffffff')}
                        onMouseLeave={() => setCol('c0c0c0')}
                        className="transition-all duration-100 hover:bg-[#ED5EA5] p-3 sm:p-4 shadow-xl bg-[#222222] rounded-2xl"
                    >
                        <img width={25} height={25} src={`https://img.icons8.com/ios/50/${col}/mail.png`} alt="No Image Available" />
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full lg:w-[60%] bg-[#c0c0c040] h-[1px]"></div>

            {/* Bottom Section */}
            <div className="w-full lg:w-[60%] flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center text-center sm:text-left">

                <div className="text-gray-400 text-xs sm:text-sm">
                    © 2026 Akshay Kapoor. Built with ⚙️ and Next.js
                </div>

                <Link
                    href="#hero"
                    onMouseEnter={() => setsec('ffffff')}
                    onMouseLeave={() => setsec('f45a33')}
                    className="px-4 py-2 bg-[#f45a3350] text-[#f45a33] flex gap-2 font-semibold rounded-xl hover:cursor-pointer hover:bg-[#f45a33] hover:text-white transition-all duration-100 w-full sm:w-auto justify-center"
                >
                    Back to Top
                    <img width="25" height="25" src={`https://img.icons8.com/ios/50/${seccol}/left-up2--v2.png`} alt="left-up2--v2" />
                </Link>

            </div>

        </div>
    )
}
