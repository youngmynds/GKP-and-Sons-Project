"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";

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
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <p
                className={`absolute text-center w-[20%] top-2 left-2 md:top-2 md:left-2 lg:top-4 lg:left-4 text-white text-xs md:text-lg lg:text-2xl ${montserrat.className}`}
            >
                {title}
            </p>
        </div>
    );
}
