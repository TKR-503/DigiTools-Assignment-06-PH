import React from 'react';
import { ArrowRight, Circle, CircleAlert, CircleCheck, CircleDot, CircleDotIcon, CircleSlash, Play, Sparkles } from 'lucide-react';


const Banner = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-14">
                    <div className="lg:ml-12 items-center lg:text-left text-center">

                        <div className="inline-flex items-center gap-2 bg-[#4F39F6]/15 border border-[#4F39F6]/30 text-[#a89cff] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 mt-12">
                            <CircleDot size={13} />
                            New: AI-Powered Tools Available
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
                            Supercharge Your <br /> Digital Workflow
                        </h1>

                        <p className="text-[#82626c] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today. <br />
                            Explore Products</p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <button className="btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-[#8A5CF2]
                          py-3 px-6">Get Started</button>
                            <button className="btn rounded-full py-3 px-6 text-base bg-base-300 hover:bg-amber-300"><img src="./src/assets/play.png" alt="" />
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="./src/assets/banner.png" alt="" />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Banner;