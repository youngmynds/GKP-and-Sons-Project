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
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const Items = [
    { src: "/pendants.png", title: "PENDANTS" },
    { src: "/chains.png", title: "CHAINS" },
    { src: "/bangles.png", title: "BANGLES" },
    { src: "/necklaces.png", title: "NECKLACES" },
  ];

  return (
    <div>
      <Header />
      <div className='bg-black w-full h-52 flex flex-col items-center justify-center'>
        <h1 className="text-white font-serif text-7xl">Gallery</h1>
        <p className="h-4 text-gold">_______________________</p>
      </div>
      <div className="flex justify-center -mt-1">
        <Image src="/Polygon.svg" alt="Triangle" width="100" height="100" />
      </div>
      <div className='bg-white w-full h-52 flex flex-col items-center justify-center'>
        <h1 className={`text-gold text-8xl ${parisienne.className}`}>Elegance</h1>
        <p className={`h-4 text-slate-800 text-4xl ${montserrat.className} `}>A Gallery Of</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Items.map((item, index) => (
          <Card key={index} src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
}
