"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Card from "../components/Card";
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
    weight: "400",
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
                        RINGS
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
            <div className="w-full h-72 md:h-36 flex flex-col items-center justify-center">
                <h1
                    className={`text-gold text-6xl md:text-8xl text-center w-[95%] ${parisienne.className}`}
                >
                    Best Gold Ring Designs
                </h1>
                <p
                    className={`h-4 text-slate-800 text-2xl md:text-3xl font-light -mt-2  ${montserrat.className} `}
                >
                    IN COIMBATORE
                </p>
            </div>

            <div className="flex gap-10 justify-center md:mt-10">
                {/* Buttons to select category */}
                <button
                    className={`border-b-2 ${
                        selectedCategory === "Casting"
                            ? "border-b-gold text-black"
                            : "border-transparent text-gray-400"
                    } text-lg md:text-xl ${cardo.className}`}
                    onClick={() => setSelectedCategory("Casting")}
                >
                    Casting
                </button>
                <button
                    className={`border-b-2 ${
                        selectedCategory === "Antique"
                            ? "border-b-gold text-black"
                            : "border-transparent text-gray-400"
                    } text-lg md:text-xl ${cardo.className}`}
                    onClick={() => setSelectedCategory("Antique")}
                >
                    Antique
                </button>
            </div>

            {/* Display the selected category's items */}
            <div className="flex flex-wrap justify-evenly gap-0 mt-5 md:mt-10">
                {displayedItems.map((item, index) => (
                    <Card key={index} src={item.src} title={item.title} />
                ))}
            </div>
            <Footer />
            <Rights />
        </div>
    );
}
