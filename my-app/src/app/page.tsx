"use client";

import Image from "next/image";
import Header from "./components/header";
import Card from "./components/Card";
import { Parisienne, Montserrat } from "next/font/google";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"],
});

export default function Home() {
  const Items = [
    { src: "/pendants.png", title: "PENDANTS" },
    { src: "/chains.png", title: "CHAINS" },
    { src: "/bangles.png", title: "BANGLES" },
    { src: "/Bracelets.png", title: "BRACELETS" },
    { src: "/Earrings.png", title: "EARRINGS" },
    { src: "/Necklaces.png", title: "NECKLACES" },
  ];

  return (
    <div className="bg-[#FFFCF8]">
      <Header />
      <div className="bg-black w-full h-52 flex items-center justify-center relative">
        {/* Glowing Background */}
        <div className="absolute flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-2xl mt-8 ml-4"></div>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center z-10">
          <h1 className={`text-white text-center font-normal font-serif text-3xl md:text-4xl ${montserrat.className}`}>
            COLLECTIONS
          </h1>
          <div className="h-1 w-20 bg-gold mt-4"></div>
        </div>
      </div>


      <div className="flex justify-center -mt-1">
        <Image src="/Polygon.svg" alt="Triangle" width="100" height="100" />
      </div>
      <div className='w-full h-36 flex flex-col items-center justify-center'>
        <h1 className={`text-gold text-6xl md:text-8xl ${parisienne.className}`}>Elegance</h1>
        <p className={`h-4 text-slate-800 text-2xl md:text-3xl font-light -mt-2 ${montserrat.className} `}>A COLLECTION OF</p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-3 mt-5 md:mt-10">
        {Items.map((item, index) => (
          <Card key={index} src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
}
