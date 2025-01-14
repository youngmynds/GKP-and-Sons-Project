"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Rights from "../components/rights";
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
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("Casting");

    // Data for each category
    const castingItems = [
        { src: "/CastRing1.png", title: "Casting 1" },
        { src: "/CastRing2.png", title: "Casting 2" },
    ];

    const antiqueItems = [
        { src: "/AntiqueRing1.png", title: "Antique 1" },
        { src: "/AntiqueRing2.png", title: "Antique 2" },
        { src: "/AntiqueRing3.png", title: "Antique 3" },
        { src: "/AntiqueRing4.png", title: "Antique 4" },
    ];

    const displayedItems =
        selectedCategory === "Casting" ? castingItems : antiqueItems;

    return (
        <div className="bg-[#FFFCF8]">
            <Header />
            <div className="bg-black w-full h-52 flex items-center justify-center relative">
                {/* Glowing Background */}
                <div className="absolute flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-2xl mt-8 ml-4"></div>
                </div>
                {/* Content */}
                <div className="flex flex-col items-center z-10">
                    <h1
                        className={`text-white text-center font-normal font-serif text-2xl md:text-4xl ${montserrat.className}`}
                    >
                        CASTING GOLD RINGS
                    </h1>
                    <div className="h-1 w-16 bg-gold mt-3"></div>
                </div>
            </div>
            <div className="flex justify-center -mt-1">
                <Image
                    src="/Polygon.svg"
                    alt="Triangle"
                    width="100"
                    height="100"
                />
            </div>
            <div className="md:flex p-4 justify-center items-center mt-5">
                <div className="flex justify-center items-center">
                    <Image
                        src="/CastRing1.png"
                        alt="CastingRing1"
                        className="object-cover w-[450px] md:w-[400px] h-[280px]"
                        width="250"
                        height="100"
                    />
                </div>
                <div className="md:w-[30%] justify-center md:ml-10 mt-5 md:mt-0">
                    <h1
                        className={`text-3xl md:text-4xl text-center text-black font-medium ${montserrat.className}`}
                    >
                        Golden Grace
                    </h1>
                    <p
                        className={`mt-5 text-center md:text-none text-base text-gray-600 ${cardo.className}`}
                    >
                        This exquisite casting gold ring is a masterpiece of
                        craftsmanship, blending tradition with modern artistry.
                        Radiating a brilliant golden luster, its intricate
                        details highlight the precision of expert artisanship.
                        Whether adorned with delicate engravings or left in its
                        pure, minimalist form, this ring exudes sophistication
                        and charm.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="border-2 border-gray-500 rounded-2xl mt-5 mb-5 p-4 md:p-8 inline-block justify-center">
                    <p
                        className={`text-black text-lg md:text-2xl ${montserrat.className}`}
                    >
                        Product Details
                    </p>
                    <div className="flex mt-6 md:mt-8 gap-14 md:gap-80">
                        <div>
                            <p
                                className={`text-black font-semibold text-base md:text-lg ${cardo.className}`}
                            >
                                22grms
                            </p>
                            <p
                                className={`text-gray-600 text-sm md:text-lg ${montserrat.className}`}
                            >
                                Weight
                            </p>
                        </div>
                        <div>
                            <p
                                className={`text-black font-semibold text-base md:text-lg ${cardo.className}`}
                            >
                                32
                            </p>
                            <p
                                className={`text-gray-600 text-sm md:text-lg ${montserrat.className}`}
                            >
                                Size
                            </p>
                        </div>
                        <div>
                            <p
                                className={`text-black font-semibold text-base md:text-lg ${cardo.className}`}
                            >
                                24 Karat
                            </p>
                            <p
                                className={`text-gray-600 text-sm md:text-lg ${montserrat.className}`}
                            >
                                Carat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Rights />
        </div>
    );
}
