import React from "react";
import { FaSearch } from "react-icons/fa";
import RecruitImg from "../assets/recruit.jpg";

export default function Hero() {
    return (
        <section className="relative h-auto md:h-[674px] overflow-hidden">

            {/* BACKGROUND GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#064EA4] via-[#0A63C5] to-[#0C7AD8]" />

            {/* DECORATIVE SHAPES */}
            <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-[#F7D45A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-120px] right-[-80px] w-[340px] h-[340px] bg-[#F2996A] rounded-full blur-3xl"></div>

            {/* MAIN CONTENT */}
            <div className="relative max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">

                {/* LEFT TEXT */}
                <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                    <p className="text-white text-lg md:text-xl mb-4 mt-4">
                        Software Recruitment Specialist
                    </p>

                    <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
                        Elevate Your Career
                    </h1>

                    {/* Search Box */}
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded-full flex items-center gap-3 w-full max-w-xl shadow-lg">
                        <FaSearch className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                            placeholder="Search jobs, roles, skills..."
                        />
                        <button className="bg-yellow-300 rounded-full px-4 py-2 hover:bg-yellow-400 transition">
                            Search
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={RecruitImg}
                        alt="Hero"
                        className="w-[260px] md:w-[420px] rounded-lg shadow-xl object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
