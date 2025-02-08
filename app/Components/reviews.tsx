"use client";

import { Montserrat, Cardo } from "next/font/google";
import Image from "next/image";

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
            <div className="flex-row bg-white p-4 h-48 rounded-t-lg">
                <Image
                    src="/Others/TestimonialIcon.svg"
                    alt="testimonialIcon"
                    width={40}
                    height={40}
                    className="mb-3"
                />
                <p className={`text-gray-500 md:text-lg ${cardo.className}`}>
                    {review}
                </p>
            </div>
            <div className="bg-[#2C1338] flex p-4 items-center rounded-b-lg">
                <Image
                    src={src}
                    alt={name}
                    width={45}
                    height={45}
                    className="object-cover mr-2"
                />
                <div className="flex-row">
                    <p
                        className={`text-white font-semibold md:text-sm ${montserrat.className}`}
                    >
                        {name}
                    </p>
                    <p className="text-orange-600 text-2xl -mt-1">{stars}</p>
                </div>
            </div>
        </div>
    );
}
