"use client";

import dynamic from "next/dynamic";
import { Typewriter } from "react-simple-typewriter";
import {Button} from "@heroui/react";
import Link from "next/link";
import { list, BadgeLink } from "./links";
import { useState } from "react";

export default function Hero() {
    const [link,setLink] = useState<string>("https://img.icons8.com/ios/50/22c3ad/mail.png")

    return (
        <section id={'hero'} className="lg:py-0 py-20 relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-shapes"></div>
            <div className="absolute inset-0 dot-pattern opacity-30"></div>
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-coral/10 blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-teal/10 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-purple/10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full bg-pink/8 blur-3xl"></div>

            <div className="relative z-40 flex items-center justify-center h-[93vh] flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 2xl:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-0 text-center">
                
                <div className="flex justify-center items-center gap-2 bg-[#22C35D15] px-4 sm:px-5 py-2 sm:py-3 rounded-full ring-1 ring-[#22C35D] text-sm sm:text-base 2xl:text-base">
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/22C35D/sparkles.png" alt="sparkles" />
                    <span className="text-[#22C35D]" style={{ fontWeight: "500" }}>
                        Available for Oppurtunities
                    </span>
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl" style={{ fontWeight: "700" }}>
                    Hi , I'm{" "}
                    <span
                        className="bg-clip-text text-transparent font-bold"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #f45a33 0%, #ed5ea5 25%, #8347ea 55%, #22c3ad 100%)",
                            fontWeight: "700",
                        }}
                    >
                        Akshay Kapoor
                    </span>
                </div>

                <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl bg-[#8347ea15] text-[#8347ea] px-4 sm:px-5 py-2 sm:py-3 rounded-xl ring-2 ring-[#8347ea30] flex justify-center items-center" style={{ fontWeight: "700" }}>
                    <ul className="list-disc flex justify-center items-center pl-5">
                        <li></li>
                    </ul>
                    <Typewriter
                        words={[
                        "Full Stack Developer",
                        "MERN & Next.js Specialist",
                        "Machine Learning Engineer",
                        "Deep Learning Practitioner",
                        "Generative AI Innovator",
                        "Agentic AI Explorer"
                        ]}

                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={200}
                        deleteSpeed={50}
                        delaySpeed={100}
                    />
                </div>

                <div className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] text-center text-gray-500">
                Building <span className="text-[#f45a33]" style={{ fontWeight: "600" }}>scalable</span>,{" "}
                <span className="text-[#22c3ad]" style={{ fontWeight: "600" }}>intelligent systems</span>{" "}
                with modern technologies. Passionate about{" "}
                <span className="text-[#8347ea]" style={{ fontWeight: "600" }}>AI innovation</span>{" "}
                and continuous learning.
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-4 sm:gap-5">
                    <Button
                        as={Link}
                        size="lg"
                        className="w-full sm:w-72 md:w-72 lg:w-60 xl:w-60 2xl:w-50 bg-[#f45a33] text-white text-base sm:text-lg 2xl:text-lg"
                        style={{fontWeight:"600"}}
                        href="#projects"
                    >
                        View Projects
                        <img width="25" height="25" src="https://img.icons8.com/windows/32/FFFFFF/down--v1.png" alt="down--v1"/>
                    </Button>

                    <Button
                        as={Link}
                        size="lg"
                        className="w-full sm:w-72 md:w-72 lg:w-60 xl:w-60 2xl:w-50 text-[#22C3AD] ring-[#22C3AD] ring-2 bg-transparent text-base sm:text-lg 2xl:text-lg hover:bg-[#22c3ad] transition duration-100 hover:text-white"
                        style={{fontWeight:"500"}}
                        onMouseEnter={()=>{setLink("https://img.icons8.com/ios/50/ffffff/mail.png")}}
                        onMouseLeave={()=>{setLink("https://img.icons8.com/ios/50/22c3ad/mail.png")}}
                        href="#contactme"
                    >
                        Contact Me
                        <img src={link} width="20" height="20" alt="No Image Available" />
                    </Button>
                </div>

                {/* Social Icons */}
                <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[50%] mt-5 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-5 sm:gap-6 md:gap-6 lg:gap-7 xl:gap-7 2xl:gap-7">
                    {list.map((element: BadgeLink) => (
                        <Link
                            key={element.link}
                            href={element.link}
                            className="h-full rounded-2xl p-4 border-2 hover:scale-110 transition duration-200 flex justify-center"
                            style={{
                                backgroundColor: `${element.colorCode}15`,
                                borderColor:`${element.colorCode}30`,
                            }}
                        >
                            <img width="30" height="30" src={element.icon} alt="No Image Available" />
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-gray-500 relative top-[5vh]">
                    <div>SCROLL</div>
                    <img width="60" height="60" src="https://img.icons8.com/dotty/80/f45a33/generic-mouse.png" alt="generic-mouse" />
                </div>
            </div>
        </section>
    );
}
