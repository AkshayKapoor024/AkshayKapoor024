"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Certifications() {

    const slides = [
        { src: "/DSA.jpg", caption: "Data Structures & Algorithms in Java" },
        { src: "/DataScience.jpg", caption: "Data Science Certification" },
        { src: "/MERN.jpg", caption: "MERN Stack Developement Certificate" },
        { src: '/ML DL Certificate.jpeg', caption: "Machine Learning Certificate" },
        { src: '/GEN_AI Certificate.jpg', caption: "Generative AI Certificate" }
    ];

    return (
        <section id="certifications" className="min-h-screen flex justify-center items-center flex-col gap-6 sm:gap-8 md:gap-10 py-16 sm:py-20 bg-gray-100">

            {/* Badge */}
            <div className="gap-2 flex justify-center items-center px-4 py-2 ring-2 ring-[#ed5ea530] rounded-full bg-[#ed5ea515] text-[#ed5ea5] text-xs sm:text-sm">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/ed5ea5/contract.png" alt="contract" />
                Certifications
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4" style={{ fontWeight: "600" }}>
                Verified{" "}
                <span
                    className="bg-clip-text text-transparent font-bold"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #f45a33 0%, #ed5ea5 55%, #8347ea 100%)",
                        fontWeight: "600",
                    }}
                >
                    Credentials
                </span>
            </h1>

            {/* Subtitle */}
            <div className="text-sm sm:text-base md:text-lg text-gray-500 text-center px-6">
                Continuous learning validated by industry-leading certifications.
            </div>

            {/* Swiper */}
            <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[70%]">
                <Swiper
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={6000}
                    slidesPerView={1}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center mx-2 sm:mx-5">

                                <p className="mb-4 sm:mb-5 text-base sm:text-lg md:text-xl text-gray-600 font-bold text-center">
                                    {slide.caption}
                                </p>

                                <img
                                    src={slide.src}
                                    alt={slide.caption}
                                    className="rounded-3xl sm:rounded-4xl shadow-lg max-h-[250px] sm:max-h-[350px] md:max-h-[450px]"
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
}
