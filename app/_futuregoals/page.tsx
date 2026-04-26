"use client"
import { motion } from "framer-motion"
import { Progress } from "@heroui/progress"
import { Button } from "@heroui/button"
import Link from "next/link"

export default function FutureGoals() {
    return (
        <section id="futuregoals" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/4 min-h-screen py-12 sm:py-16">

            <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>

            <div className="relative py-10 z-40 flex flex-col min-h-screen justify-center items-center gap-6 sm:gap-8 md:gap-10">

                {/* Badge */}
                <div className="flex shadow-xl text-xs sm:text-sm justify-center items-center gap-2 bg-[#f45a3315] px-4 py-2 rounded-full ring-1 ring-[#f45a33]">
                    <img width="20" height="20" src="https://img.icons8.com/sf-regular/48/f45a33/rocket.png" alt="rocket" />
                    <span className="text-[#f45a33]" style={{ fontWeight: "500" }}>Vision</span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-4" style={{ fontWeight: "600" }}>
                    Future{" "}
                    <span
                        className="bg-clip-text text-transparent font-bold"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #22C3AD 0%, #248CF3 55%, #8347EA 100%)",
                            fontWeight: "600"
                        }}
                    >
                        Goals
                    </span>
                </h1>

                <div className="text-sm sm:text-base md:text-lg text-gray-500 text-center px-6">
                    Where I'm heading and the skills I'm actively developing.
                </div>

                {/* Goal Cards */}
                <div className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] flex flex-wrap gap-6 justify-center">

                    {/* CARD 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, y: -50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="shadow-lg hover:scale-105 transition-all duration-100 hover:cursor-pointer flex justify-center items-center w-full md:w-[45%] bg-white px-5 py-8 sm:py-10 rounded-2xl ring-2 ring-[#f45a3340]"
                    >
                        <div className="w-[15%] sm:w-[12%] md:w-[20%] xl:w-[10%] h-full flex items-start">
                            <div className="bg-[#f45a3315] p-3 rounded-xl">
                                <img width="40" height="40" src="https://img.icons8.com/ios/50/f45a33/brain--v1.png" alt="brain--v1" />
                            </div>
                        </div>

                        <div className="w-[85%] sm:w-[88%] md:w-[90%] px-4 sm:px-5 flex flex-col justify-start h-full gap-4 sm:gap-5">
                            <div className="flex justify-between items-center flex-wrap gap-2">
                                <div className="text-lg sm:text-xl font-bold text-[#f45a33]">Machine Learning</div>
                                <div className="px-3 sm:px-4 py-1 bg-[#f45a33] rounded-xl text-white text-xs sm:text-sm">In Progress</div>
                            </div>
                            <div className="text-sm sm:text-base text-gray-500">
                                Applying ML techniques to real-world projects like recommendation systems, fraud detection, and predictive analytics.
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, y: -50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="shadow-lg hover:scale-105 transition-all duration-100 hover:cursor-pointer flex justify-center items-center w-full md:w-[45%] bg-white px-5 py-8 sm:py-10 rounded-2xl ring-2 ring-[#22c3ad40]"
                    >
                        <div className="w-[15%] sm:w-[12%] md:w-[20%] xl:w-[10%] h-full">
                            <div className="bg-[#22c3ad15] p-3 rounded-xl">
                                <img width="40" height="40" src="https://img.icons8.com/ios/50/22c3ad/serial-tasks--v1.png" alt="serial-tasks--v1" />
                            </div>
                        </div>

                        <div className="w-[85%] sm:w-[88%] md:w-[90%] px-4 sm:px-5 flex flex-col justify-start h-full gap-4 sm:gap-5">
                            <div className="flex justify-between items-center flex-wrap gap-2">
                                <div className="text-lg sm:text-xl font-bold text-[#22c3ad]">Deep Learning</div>
                                <div className="px-3 sm:px-4 py-1 bg-[#22c3ad] rounded-xl text-white text-xs sm:text-sm">Learning</div>
                            </div>
                            <div className="text-sm sm:text-base text-gray-500">
                                Expanding expertise with PyTorch and advanced architectures, focusing on multimodal models and reinforcement learning.
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="shadow-lg hover:scale-105 transition-all duration-100 hover:cursor-pointer flex justify-center items-center w-full md:w-[45%] bg-white px-5 py-8 sm:py-10 rounded-2xl ring-2 ring-[#8347EA40]"
                    >
                        <div className="w-[15%] sm:w-[12%] md:w-[20%] xl:w-[10%] h-full">
                            <div className="bg-[#8347EA15] p-3 rounded-xl">
                                <img width="40" height="40" src="https://img.icons8.com/ios/50/8347ea/bard.png" alt="bard" />
                            </div>
                        </div>

                        <div className="w-[85%] sm:w-[88%] md:w-[90%] px-4 sm:px-5 flex flex-col justify-start h-full gap-4 sm:gap-5">
                            <div className="flex justify-between items-center flex-wrap gap-2">
                                <div className="text-lg sm:text-xl font-bold text-[#8347EA]">Generative AI</div>
                                <div className="px-3 sm:px-4 py-1 bg-[#8347EA] rounded-xl text-white text-xs sm:text-sm">Exploring</div>
                            </div>
                            <div className="text-sm sm:text-base text-gray-500">
                                Building end-to-end GenAI applications with agentic workflows, integrating LLMs into production systems for practical use cases.
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4 */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="shadow-lg hover:scale-105 transition-all duration-100 hover:cursor-pointer flex justify-center items-center w-full md:w-[45%] bg-white px-5 py-8 sm:py-10 rounded-2xl ring-2 ring-[#ED5EA540]"
                    >
                        <div className="w-[15%] sm:w-[12%] md:w-[20%] xl:w-[10%] h-full">
                            <div className="bg-[#ED5EA515] p-3 rounded-xl">
                                <img width="40" height="40" src="https://img.icons8.com/ios/50/ed5ea5/electronics.png" alt="electronics" />
                            </div>
                        </div>

                        <div className="w-[85%] sm:w-[88%] md:w-[90%] px-4 sm:px-5 flex flex-col justify-start h-full gap-4 sm:gap-5">
                            <div className="flex justify-between items-center flex-wrap gap-2">
                                <div className="text-lg sm:text-xl font-bold text-[#ED5EA5]">MLOps & Deployment</div>
                                <div className="px-3 sm:px-4 py-1 bg-[#ED5EA5] rounded-xl text-white text-xs sm:text-sm">Goal</div>
                            </div>
                            <div className="text-sm sm:text-base text-gray-500">
                                Designing scalable pipelines with CI/CD, containerization, and monitoring to ensure reliable AI deployment in production.
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Learning Roadmap */}
                <div className="bg-white w-[95%] sm:w-[85%] md:w-[70%] lg:w-[50%] px-4 sm:px-6 justify-center items-center relative rounded-2xl shadow-xl ring-2 ring-[#00000015] flex flex-col gap-10 sm:gap-12 py-8">

                    <div className="text-lg sm:text-xl md:text-2xl font-bold mt-2">Learning Roadmap</div>

                    <div className="w-[85%] flex justify-center items-center relative">
                        <div
                            className="w-full h-[6px] rounded-full"
                            style={{ background: "linear-gradient(to right, #f45a33, #22c3ad, #8347ea, #ed5ea5)" }}
                        ></div>

                        {/* Number Indicators */}
                        <div className="absolute w-full flex justify-between items-center">
                            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-md text-base sm:text-xl md:text-2xl font-bold text-white bg-[#f45a33]">1</div>
                            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-md text-base sm:text-xl md:text-2xl font-bold text-white bg-[#22c3ad]">2</div>
                            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-md text-base sm:text-xl md:text-2xl font-bold text-white bg-[#8347ea]">3</div>
                            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-md text-base sm:text-xl md:text-2xl font-bold text-white bg-[#ed5ea5]">4</div>
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="w-[90%] flex justify-between items-center text-xs sm:text-sm md:text-base font-semibold">
                        <div className="text-[#f45a33]">DSA</div>
                        <div className="text-[#22c3ad]">MERN</div>
                        <div className="text-[#8347ea]">MLDL</div>
                        <div className="text-[#ed5ea5]">Gen AI</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 text-center px-4">
                    <div className="text-base sm:text-lg md:text-xl mt-6 sm:mt-10 text-gray-600">
                        Ready to build something <span className="text-[#f45a33] font-semibold">Extraordinary</span> together ?
                    </div>

                    <Button
                        as={Link}
                        size={'lg'}
                        className="bg-[#f45a33] text-base sm:text-lg font-semibold text-white shadow-[0_4px_5px_#f45a3370]"
                        style={{ fontWeight: "500" }}
                        href="#contactme"
                    >
                        Let's Connect
                    </Button>
                </div>

            </div>
        </section>
    )
}
