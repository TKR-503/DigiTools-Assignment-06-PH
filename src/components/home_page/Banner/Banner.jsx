import React from 'react';
import bannerImage from '../../../assets/banner.png';
import playIcon from '../../../assets/play.png';
import { ArrowRight, Circle, CircleAlert, CircleCheck, CircleDot, CircleDotIcon, CircleSlash, Play, Sparkles } from 'lucide-react';


const Banner = () => {
    return (
        <div>

            <div className="container mx-auto px-4 py-10 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

                    {/* text section */}
                    <div className="w-full lg:ml-12 text-center lg:text-left">

                        <div className="inline-flex items-center gap-2 bg-[#4F39F6]/15 border border-[#4F39F6]/30 text-[#a89cff] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 mt-6 lg:mt-12">
                            <CircleDot size={13} />
                            New: AI-Powered Tools Available
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
                            Supercharge Your <br /> Digital Workflow
                        </h1>

                        <p className="text-[#82626c] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#8A5CF2] py-3 px-6">
                                Get Started
                            </button>

                            <button className="btn rounded-full py-3 px-6 text-base bg-base-300 hover:bg-amber-300 flex items-center gap-2">
                                <img src={playIcon} alt="play icon" className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>

                    </div>

                    {/* image section */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <img
                            src={bannerImage}
                            alt="Banner"
                            className="w-full max-w-md md:max-w-lg lg:max-w-full"
                        />
                    </div>

                </div>
            </div>

            {/* stats section */}
            <div className="bg-linear-to-r from-[#4F39F6] to-[#8A5CF2] py-16 px-6 lg:p-24 mb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center space">

                    <div>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">50K+</h1>
                        <p className="text-white font-normal">Active Users</p>
                    </div>

                    <div>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">200+</h1>
                        <p className="text-white font-normal">Premium Tools</p>
                    </div>

                    <div>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">4.9</h1>
                        <p className="text-white font-normal">Rating</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;