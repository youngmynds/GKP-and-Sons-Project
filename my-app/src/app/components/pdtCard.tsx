"use client";

import { Parisienne, Montserrat } from "next/font/google";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

interface CardProps {
  src: string;
  title: string;
}

export default function Pdtcard({ src, title }: CardProps) {
  return (
    <div className="relative w-[calc(50%-16px)] md:w-[calc(25%-12px)]">
      {/* Image */}
      <img src={src} alt={title} className="w-full h-full object-cover" />
      {/* Overlay Text */}
      <p
        className={`absolute text-center w-[20%] top-2 left-2 md:top-2 md:left-2 lg:top-4 lg:left-4 text-white text-xs md:text-lg lg:text-2xl ${montserrat.className}`}
      >
        {title}
      </p>
    </div>
  );
}
