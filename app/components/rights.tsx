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

export default function Rights() {
    return (
        <div
            className={`md:flex text-sm text-center md:justify-evenly text-gray-500 bg-black pt-8 pb-8 pl-14 pr-14 ${cardo.className}`}
        >
            <p>GKP & Sons Jewellers @ 2025 | All Rights Reserved</p>
            <p>Privacy Policy | Terms and Conditions</p>
        </div>
    );
}
