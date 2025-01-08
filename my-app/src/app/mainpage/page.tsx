"use client";

import { useState } from "react";
import Header from "../components/header";
import Card from "../components/Card";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Items = [
    { src: "/pendants.png", title: "PENDANTS" },
    { src: "/chains.png", title: "CHAINS" },
    { src: "/bangles.png", title: "BANGLES" },
    { src: "/necklaces.png", title: "NECKLACES" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      <Header />
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Discounts Section */}
        <section className="text-center px-4 py-8 bg-white">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 font-serif">
            Discounts on <span className="italic">Bridal Jewellery</span>
          </h2>

          {/* Image Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Left Images */}
            <div className="col-span-1 grid grid-rows-2 gap-4">
              <img
                src="/jewellery.png"
                alt="Bridal Jewellery 1"
                className="w-full h-[200px] object-cover rounded-md"
              />
              <img
                src="/jewellery.png"
                alt="Bridal Jewellery 2"
                className="w-full h-[200px] object-cover rounded-md"
              />
            </div>

            {/* Right Image */}
            <div className="col-span-1 md:col-span-2 relative">
              <img
                src="/jewellery.png"
                alt="Featured Bridal Jewellery"
                className="w-full h-[420px] object-cover rounded-md"
              />
              {/* Explore Button */}
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-lg py-2 px-6 rounded-lg hover:bg-opacity-60 transition">
                Explore →
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
            {/* Certified Gold */}
            <div className="text-center">
              <div className="text-3xl text-yellow-700">🪙</div>
              <p className="mt-2 font-semibold text-gray-700">Certified 916 Gold</p>
            </div>

            {/* Purity Guaranteed */}
            <div className="text-center">
              <div className="text-3xl text-yellow-700">💎</div>
              <p className="mt-2 font-semibold text-gray-700">Purity Guaranteed</p>
            </div>

            {/* Custom Designs */}
            <div className="text-center">
              <div className="text-3xl text-yellow-700">🎨</div>
              <p className="mt-2 font-semibold text-gray-700">Custom Designs</p>
            </div>
          </div>
        </section>
      </div>

      <div className="text-3xl md:text-4xl font-bold text-yellow-700 font-serif text-center -mt-40">
        <h2>Discover our LUXURY</h2>
        <h2 className="italic">Gallery</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Items.map((item, index) => (
          <Card key={index} src={item.src} title={item.title} />
        ))}
      </div>


    </div>
  );
}
