import React, { useState } from "react";
import Image from "next/image";
import { Parisienne, Montserrat } from "next/font/google";

const parisienne = Parisienne({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            <header className="flex items-center justify-between p-6 bg-[#170722] w-full">
                {/* Mobile Menu Icon */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden focus:outline-none"
                >
                    <Image
                        src="/Others/MenuIcon.svg"
                        alt="MenuIcon"
                        width={25}
                        height={25}
                    />
                </button>

                {/* Logo Centered in Mobile/Tablet */}
                <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
                    <Image
                        src="/GKP_Logo.png"
                        alt="Logo"
                        width={170}
                        height={150}
                    />
                </div>

                {/* Desktop Navigation */}
                <nav
                    className={`hidden lg:flex gap-8 ml-20 ${montserrat.className} justify-center`}
                >
                    {[
                        "Home",
                        "About Us",
                        "Products",
                        "Collections",
                        "Contact Us",
                    ].map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`hover:underline text-base tracking-wide ${
                                item === "Collections"
                                    ? "text-gold"
                                    : "text-white"
                            }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Call Us Section */}
                <div className="hidden lg:flex items-center justify-center space-x-3">
                    <p className={`text-gold text-xl ${parisienne.className}`}>
                        Call Us
                    </p>
                    <p className={`text-white ${montserrat.className}`}>
                        +91 98765 43210
                    </p>
                </div>
            </header>

            {/* Mobile Side Navbar */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full bg-white text-white z-50 transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 w-[70%]`}
            >
                <div className=" p-4 md:flex items-center justify-between border-black mb-5">
                    <h2
                        className={`text-xl text-black font-semibold tracking-wide ${montserrat.className}`}
                    >
                        Welcome to <br></br> GKP & Sons Jewellers
                    </h2>
                </div>
                <nav className="flex flex-col gap-1">
                    {[
                        "Home",
                        "About Us",
                        "Products",
                        "Collections",
                        "Contact Us",
                        "FAQs",
                    ].map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`p-4 text-base text-black tracking-wide border-b border-b-gold pb-2 ${montserrat.className}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Overlay when menu is open */}
            {isMenuOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                ></div>
            )}
        </div>
    );
}
