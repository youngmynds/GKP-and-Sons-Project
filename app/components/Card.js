"use client";

import { Parisienne, Montserrat } from "next/font/google";
import Image from "next/image";

const parisienne = Parisienne({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function Card({ src, title }) {
    return (
        <div className="bg-black text-center mb-5 w-[calc(50%-16px)] sm:w-[calc(30%-12px)] md:w-[calc(30%-12px)]">
            <Image
                src={src}
                alt={title}
                width={300}
                height={300}
                className="object-cover"
            />
            <p
                className={`bg-black text-white py-2 my-0 sm:text-lg md:text-xl ${montserrat.className}`}
            >
                {title}
            </p>
        </div>
    );
}
