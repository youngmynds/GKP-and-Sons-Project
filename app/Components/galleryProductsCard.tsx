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
    productId: string;
    onClick?: () => void;
}

export default function Card({ src, title, productId ,onClick }: CardProps) {
    return (
        <div className="bg-black text-center mb-5 w-[calc(50%-16px)] sm:w-[calc(30%-12px)] md:w-[calc(30%-12px)] hover:scale-105 transition-transform duration-300 relative">
            <button onClick={onClick} className="w-full h-full flex flex-col">
                <div className="relative w-full h-full">
                    <Image
                        src={src}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full"
                    />
                    <p className={`absolute bottom-0 left-0 w-full bg-black text-white py-2 my-0 sm:text-lg md:text-xl ${montserrat.className}`}>
                        {title}
                    </p>
                </div>
            </button>
        </div>
    );
}

