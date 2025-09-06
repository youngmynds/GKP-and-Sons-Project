"use client";

import { Cardo } from "next/font/google";

const cardo = Cardo({
    weight: "400",
    subsets: ["latin"],
});

export default function Rights() {
    return (
        <div
            className={`md:flex text-sm text-center md:justify-evenly text-gray-500 bg-black pt-8 pb-8 pl-14 pr-14 ${cardo.className}`}
        >
            <p>
                © Developed by{" "}
                <a
                    href="https://wa.me/919363167299?text=HI%20Young%20Mynds%20Infotech.%20I%20am%20interested%20in%20your%20service"
                    className="cursor-pointer hover:underline ml-1"
                >
                    Young Mynds Infotech.
                </a>{" "}
            </p>
            <p>
                <a href="/privacy" className="cursor-pointer hover:underline">
                    Privacy Policy
                </a>{" "}
                |
                <a
                    href="/terms"
                    className="cursor-pointer hover:underline ml-1"
                >
                    Terms and Conditions
                </a>
            </p>
        </div>
    );
}
