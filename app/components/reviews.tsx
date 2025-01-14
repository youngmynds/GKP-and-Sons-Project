"use client";

import { Parisienne, Montserrat, Cardo } from "next/font/google";

const parisienne = Parisienne({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const cardo = Cardo({
    weight: "400",
    subsets: ["latin"],
});

interface CardProps {
    src: string;
    name: string;
    review: String;
    stars: String;
}

export default function Reviews({ src, name, review, stars }: CardProps) {
    return (
        <div className="min-w-[350px] drop-shadow-lg">
            <div className="flex-row bg-white p-4 h-48">
                <img
                    src="/annotate.svg"
                    alt="testimonialIcon"
                    width={40}
                    className="mb-3"
                />
                <p className={`text-gray-500 md:text-lg ${cardo.className}`}>
                    {review}
                </p>
            </div>
            <div className="bg-[#F0F0F0] flex p-4 items-center">
                <img
                    src={src}
                    alt={name}
                    width={45}
                    className="object-cover mr-2"
                />
                <div className="flex-row">
                    <p
                        className={`text-black font-semibold md:text-sm ${montserrat.className}`}
                    >
                        {name}
                    </p>
                    <p className="text-gold text-2xl -mt-2">{stars}</p>
                </div>
            </div>
        </div>
    );
}
