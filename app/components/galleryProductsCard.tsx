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
    onClick?: () => void; 
}

export default function Card({ src, title, onClick }: CardProps) {
    return (

        <div
            className="bg-black text-center mb-5 w-[calc(50%-16px)] sm:w-[calc(30%-12px)] md:w-[calc(30%-12px)] hover:scale-105 transition-transform duration-300">
            <button onClick={onClick} >
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="object-cover"
                />
                <p
                    className={`bg-black text-white py-2 my-0 sm:text-lg md:text-xl ${montserrat.className}`}
                >
                    {title}
                </p>
            </button>
        </div >

    );
}
