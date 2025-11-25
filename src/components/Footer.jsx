import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="bg-gradient-to-b from-[#064EA4] to-[#053A7E] text-white p-4 border-t border-white/10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Explore */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Explore</h3>
      <ul className="space-y-2 text-white/90">
        <li><a href="#" className="hover:underline hover:text-white">Homepage</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Jobseekers</a></li>
        <li><a href="#" className="hover:underline hover:text-white">For clients</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Our sectors</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Resources</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Contact us</a></li>
      </ul>
    </div>

    {/* Sectors */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Sectors</h3>
      <ul className="space-y-2 text-white/90">
        <li><a href="#" className="hover:underline hover:text-white">Software Engineering</a></li>
        <li><a href="#" className="hover:underline hover:text-white">DevOps</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Cloud</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Infrastructure</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Testing</a></li>
        <li><a href="#" className="hover:underline hover:text-white">Security</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Services</h3>
      <ul className="space-y-2 text-white/90">
        <li><a href="#" className="hover:underline hover:text-white">New item</a></li>
        <li><a href="#" className="hover:underline hover:text-white">New item</a></li>
        <li><a href="#" className="hover:underline hover:text-white">New item</a></li>
      </ul>
    </div>

  </div>

  {/* Bottom Section */}
  <div className="flex justify-between items-center mt-10 max-w-6xl mx-auto">
    <p className="text-sm text-white/80">
      © 2025 Software Recruitment co. All rights reserved.
    </p>

    {/* Social Icons */}
    <div className="flex gap-4">
      <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><FaLinkedin /></a>
      <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><FaFacebook /></a>
      <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><FaInstagram /></a>
      <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"><FaTwitter /></a>
    </div>
  </div>
</footer>

  );
}


