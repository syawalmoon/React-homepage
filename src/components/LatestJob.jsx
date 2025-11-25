import React from "react";
import { FaArrowLeft, FaArrowRight, FaRegBookmark } from "react-icons/fa";

const jobs = [
    {
        language: "Python",
        title: "Software Engineer",
        location: "Kuala Lumpur, Malaysia",
        salary: "RM7,000 - RM12,000",
        desc: "Work on backend systems, API integrations, and automation pipelines.",
        posted: "2 days ago",
    },
    {
        language: "JavaScript",
        title: "Frontend Developer",
        location: "Remote",
        salary: "RM6,000 - RM10,000",
        desc: "Build and optimize UI using React, Tailwind, and modern libraries.",
        posted: "5 days ago",
    },
    {
        language: "Java",
        title: "Backend Developer",
        location: "Penang, Malaysia",
        salary: "RM8,000 - RM13,000",
        desc: "Develop microservices architecture and maintain core platforms.",
        posted: "1 week ago",
    },
];

export default function LatestJob() {
    return (
        <section className="px-4 md:px-16 py-12 bg-[#D7E7FB]">
            {/* Title */}
            <h2 className="text-4xl font-semibold mb-8 text-center">
                Latest Jobs
            </h2>

            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="rounded-3xl p-6 bg-[#033C8F] shadow-md hover:shadow-lg transition flex flex-col justify-between h-[380px] w-full max-w-[320px]"
                    >
                        <div className="justify-between flex">
                            {/* Language Tag */}
                            <span className="inline-block bg-white/30 text-white px-3 py-1 w-max rounded-md text-sm font-medium mb-4">
                                {job.language}
                            </span>
                            <FaRegBookmark className="w-8 h-8 text-white hover:fill-white py-1" />
                        </div>

                        {/* Job Title */}
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {job.title}
                        </h3>

                        {/* Location & Salary */}
                        <p className="text-white text-sm mb-1 flex items-center gap-1">
                            📍 {job.location}
                        </p>
                        <p className="text-white text-sm mb-3 flex items-center gap-1">
                            💰 {job.salary}
                        </p>

                        {/* Description */}
                        <p className="text-white text-sm mb-4">
                            {job.desc}
                        </p>

                        {/* Footer Row */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                            <span className="text-white text-sm">Posted {job.posted}</span>

                            <button className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition">
                                View this job
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination web */}
            <div className="flex items-center justify-between mt-8 px-2">

                {/* Pagination */}
                <div className="hidden md:flex flex gap-3">
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-200 transition">
                        <FaArrowLeft className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-200 transition">
                        <FaArrowRight className="w-4 h-4 text-gray-700" />
                    </button>
                </div>

                {/* View More */}
                <button className="hidden md:flex text-gray-700 hover:text-gray-900">
                    View more jobs
                </button>

                {/* Pagination mobile */}
                <button className="md:hidden w-full px-5 py-2 rounded-full 
                   text-[#033C8F] 
                   border border-[#033C8F] bg:none hover:bg-blue-200
                   shadow-sm hover:shadow-md 
                   transition">
                    View more jobs
                </button>
            </div>
        </section>
    );
}

