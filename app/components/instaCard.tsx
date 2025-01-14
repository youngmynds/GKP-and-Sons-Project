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

export default function InstaCard({ src, title }: CardProps) {
  return (
    <div className="bg-black mb-3 w-[calc(100%-16px)] sm:w-[calc(30%-12px)] md:w-[calc(50%-12px)]">
      <img src={src} alt={title} className="object-cover" />
    </div>
  );
}
