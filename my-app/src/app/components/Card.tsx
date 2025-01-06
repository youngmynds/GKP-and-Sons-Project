"use client";

import Image from "next/image";

interface CardProps {
  src: string;
  title: string;
}

export default function Card({ src, title }: CardProps) {
  return (
    <div className="bg-black text-center p-4 rounded-lg w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-12px)]">
      <Image
        src={src}
        alt={title}
        width={400}
        height={400}
        className="rounded-lg shadow-lg object-cover"
      />
      <p className="text-lg mt-2 text-white">{title}</p>
    </div>
  );
}
