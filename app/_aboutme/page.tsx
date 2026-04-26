"use client"
import { motion } from "framer-motion"

export default function AboutMe() {
    return (
        <section
            id={'aboutme'}
            className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/4 min-h-screen py-10"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>

            <div className="relative bgz-40 flex flex-col min-h-screen justify-center items-center gap-10">

                <div className="flex shadow-xl text-xs sm:text-sm justify-center items-center gap-2 bg-[#22C3AD15] px-3 sm:px-4 py-2 rounded-full ring-1 ring-[#22C3AD]">
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/22c3ad/like--v1.png" alt="like--v1" />
                    <span className="text-[#22C3AD]" style={{ fontWeight: "500" }}>About me</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-center px-4" style={{ fontWeight: "600" }}>
                    The Developer Behind <span className="bg-clip-text text-transparent font-bold" style={{ backgroundImage: "linear-gradient(90deg, #f45a33 0%, #ed5ea5 55%, #8347ea 100%)", fontWeight: "600" }}>The Code</span>
                </h1>

                <section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] h-auto flex flex-col xl:flex-row justify-center items-center gap-10">

                    <div className="w-full lg:w-[100%] 2xl:w-[50%] flex flex-col justify-center items-center p-4 sm:p-5 gap-8">

                        <div className="w-full lg:w-[95%] 2xl:w-[95%] rounded-2xl flex flex-col gap-5 p-5 sm:p-6 md:p-8 lg:p-10 2xl:p-10 shadow-2xl text-gray-600">
                            <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl flex gap-2 items-center text-black" style={{ fontWeight: "600" }}>
                                <img width="30" height="30" src="https://img.icons8.com/external-outline-juicy-fish/60/f45a33/external-power-vehicle-mechanics-outline-outline-juicy-fish-3.png" alt="external-power-vehicle-mechanics-outline-outline-juicy-fish-3" />
                                My Story
                            </div>

                            <p className="text-sm sm:text-base">
                                I’m a BTech student who discovered web development early on and never looked back. What began as curiosity about how websites work turned into a passion for building <span className="text-[#F45A33]" style={{ fontWeight: "600" }}>scalable , production-ready systems</span>.
                            </p>

                            <p className="text-sm sm:text-base">
                                Working deeply with the MERN stack taught me that good code isn’t just functional — it’s maintainable, well-structured, and built to scale. Alongside this, I’ve expanded into <span className="text-[#22C3AD]" style={{ fontWeight: "600" }}>Machine Learning , Deep Learning , and Generative AI</span>, exploring models and agentic workflows beyond simple implementations.
                            </p>

                            <p className="text-sm sm:text-base">
                                I’m driven by complex problems — from real-time communication to authentication flows, API optimization, and intelligent pipelines — and I enjoy building systems that are <span className="text-[#8347EA]" style={{ fontWeight: "600" }}>robust , efficient , and ready</span> for the real world.
                            </p>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">

                            <div className="w-full sm:w-[30%] 2xl:w-[30%] py-4 bg-[#f45a3325] ring-2 ring-[#f45a3350] rounded-2xl flex flex-col items-center">
                                <div className="text-[#f45a33] text-xl sm:text-2xl 2xl:text-2xl" style={{ fontWeight: "600" }}>5+</div>
                                <div className="text-gray-600 text-sm sm:text-base">Projects</div>
                            </div>

                            <div className="w-full sm:w-[30%] 2xl:w-[30%] py-4 bg-[#22C3AD25] ring-2 ring-[#22C3AD50] rounded-2xl flex flex-col items-center">
                                <div className="text-[#22C3AD] text-xl sm:text-2xl 2xl:text-2xl" style={{ fontWeight: "600" }}>15+</div>
                                <div className="text-gray-600 text-sm sm:text-base">Technologies</div>
                            </div>

                            <div className="w-full sm:w-[30%] 2xl:w-[30%] py-4 bg-[#8347EA25] ring-2 ring-[#8347EA50] rounded-2xl flex flex-col items-center">
                                <div className="text-[#8347EA] text-xl sm:text-2xl 2xl:text-2xl" style={{ fontWeight: "600" }}>2+</div>
                                <div className="text-gray-600 text-sm sm:text-base">Years coding</div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full lg:w-[100%] 2xl:w-[60%] flex flex-row items-start gap-5 lg:pl-20 2xl:pl-20">

                        <div className="w-[4px] sm:w-[5px] 2xl:w-[5px] h-[68vh] md:h-[80vh] lg:h-[80vh] 2xl:h-[80vh] flex flex-col justify-between md:justify-evenly lg:justify-evenly xl:justify-start 2xl:justify-start gap-10 lg:gap-[14vh] 2xl:gap-[14vh]"
                            style={{ background: "linear-gradient(to bottom, #f45a33, #22c3ad, #8347ea, #ed5ea5)" }}>

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-12 sm:w-12 lg:w-14 2xl:w-14 py-2 sm:py-3 bg-[#f45a3325] ring-2 ring-[#f45a3350] rounded-2xl flex flex-col items-center">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/f45a33/user-male-circle--v1.png" alt="user-male-circle--v1" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-12 sm:w-12 lg:w-14 2xl:w-14 py-2 sm:py-3 bg-[#22C3AD25] ring-2 ring-[#22C3AD50] rounded-2xl flex flex-col items-center">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/22c3ad/code--v1.png" alt="source-code" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-12 sm:w-12 lg:w-14 2xl:w-14 py-2 sm:py-3 bg-[#8347EA25] ring-2 ring-[#8347EA50] rounded-2xl flex flex-col items-center">
                                <img width="30" height="30" src="https://img.icons8.com/sf-regular/48/8347ea/rocket.png" alt="rocket" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-12 sm:w-12 lg:w-14 2xl:w-14 py-2 sm:py-3 bg-[#ED5EA525] ring-2 ring-[#ED5EA550] rounded-2xl flex flex-col items-center">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/ed5ea5/bard.png" alt="bard" />
                            </motion.div>
                        </div>

                        <div className="ml-8 sm:ml-10 lg:ml-16 md:justify-between xl:justify-start 2xl:ml-16 h-auto md:h-[80vh] 2xl:h-[80vh] flex-1 flex flex-col gap-6">

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-[90%] sm:w-auto rounded-xl shadow-2xl  bg-white min-h-[140px] sm:min-h-[160px] xl:h-auto 2xl:h-auto p-4 sm:p-4 flex flex-col gap-2 items-start ring-2 ring-gray-200">
                                <div className="bg-[#f45a3315] text-[#f45a33] px-3 py-1 rounded-2xl text-sm sm:text-base" style={{ fontWeight: "500" }}>2023</div>
                                <div className="text-base sm:text-lg" style={{ fontWeight: "600" }}>Started BTech Journey</div>
                                <div className="text-gray-500 text-xs sm:text-sm">Began exploring programming fundamentals and web development basics.</div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-[90%] sm:w-auto rounded-xl shadow-2xl bg-white min-h-[140px] sm:min-h-[160px]  xl:h-auto 2xl:h-auto p-4 sm:p-5 flex flex-col gap-2 items-start ring-2 ring-gray-200">
                                <div className="bg-[#22c3ad15] text-[#22c3ad] px-3 py-1 rounded-2xl text-sm sm:text-base" style={{ fontWeight: "500" }}>2024</div>
                                <div className="text-base sm:text-lg" style={{ fontWeight: "600" }}>Discovered MERN Stack</div>
                                <div className="text-gray-500 text-xs sm:text-sm">Felt keen interest in JavaScript ecosystem and full-stack development.</div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-[90%] sm:w-auto rounded-xl shadow-2xl bg-white min-h-[140px] sm:min-h-[160px]  xl:h-auto 2xl:h-auto p-4 sm:p-5 flex flex-col gap-2 items-start ring-2 ring-gray-200">
                                <div className="bg-[#8347EA15] text-[#8347EA] px-3 py-1 rounded-2xl text-sm sm:text-base" style={{ fontWeight: "500" }}>2024-25</div>
                                <div className="text-base sm:text-lg" style={{ fontWeight: "600" }}>Built Real Projects</div>
                                <div className="text-gray-500 text-xs sm:text-sm">Created production-ready applications with authentication, real-time features.</div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-[90%] sm:w-auto rounded-xl shadow-2xl bg-white min-h-[140px] sm:min-h-[160px]  xl:h-auto 2xl:h-auto p-4 sm:p-5 flex flex-col gap-2 items-start ring-2 ring-gray-200">
                                <div className="bg-[#ed5ea515] text-[#ed5ea5] px-3 py-1 rounded-2xl text-sm sm:text-base" style={{ fontWeight: "500" }}>2026</div>
                                <div className="text-base sm:text-lg" style={{ fontWeight: "600" }}>Machine Learning & Gen AI</div>
                                <div className="text-gray-500 text-xs sm:text-sm">Expanded knowledge into machine learning algorithms , models and how large LLM's work.</div>
                            </motion.div>

                        </div>
                    </div>

                </section>
            </div>
        </section>
    )
}
