import React from "react";
import Client1 from "../assets/MSFT.png";
import Client2 from "../assets/ORCL.png";
import Client3 from "../assets/ATLASSIAN.png";
import Client4 from "../assets/CLDFLR.png";
import Client5 from "../assets/VMW.png";

const clients = [Client1, Client2, Client3, Client4, Client5];

export default function LatestClient() {
  return (
    <section className="p-8 bg-white">
    {/* Title */}
      <h2 className="text-center text-lg/8 font-semibold text-gray-900 mb-6">Who we work with</h2>
      
      {/* Client logo */}
      <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
        {clients.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-4 md:h-6 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}