"use client";

import Header from "../Components/header";
import Footer from "../Components/footer";
import Rights from "../Components/rights";
import Image from "next/image";
import { Parisienne, Montserrat, Cardo } from "next/font/google";

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const cardo = Cardo({
    weight: "400",
    subsets: ["latin"],
});

export default function aboutus() {
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
                        className={`text-white uppercase text-center font-normal font-serif text-2xl md:text-4xl ${montserrat.className}`}
                    >
                        TERMS AND CONDITIONS
                    </h1>
                    <div className="h-1 w-24 bg-gold mt-3"></div>
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
            <div className="max-w-5xl mx-auto py-16 px-8 justify-center items-center pb-20">
                <p
                    className={`text-gray-600 text-center text-base md:text-lg ${cardo.className}`}
                >
                    We are committed to providing our customers with the highest
                    quality jewelry and exceptional customer service. By
                    accessing and using our website, you agree to abide by the
                    following Terms and Conditions. Please read them carefully
                    before making a purchase or using any of our services.
                </p>
                <p
                    className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}
                >
                    Products and Availability
                </p>
                <p
                    className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}
                >
                    All products displayed on our website are subject to
                    availability. While we strive to ensure that our inventory
                    is accurate, certain items may become unavailable due to
                    demand. If an item you ordered is out of stock, we will
                    notify you as soon as possible and provide alternatives if
                    available. Additionally, we offer customization services to
                    meet your specific requirements. Custom orders may take
                    additional processing time, and pricing may vary
                    accordingly.
                </p>
                <p
                    className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}
                >
                    Privacy and Security
                </p>
                <p
                    className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}
                >
                    At GKP & Son's Jewellers, we take the privacy and security
                    of our customers seriously. We use industry-standard
                    encryption and security measures to protect all sensitive
                    data, including personal and financial information. We do
                    not share or sell customer information to third parties. If
                    you wish to opt out of marketing communications, you can do
                    so by contacting us.
                </p>
                <p
                    className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}
                >
                    Intellectual Property and Liability
                </p>
                <p
                    className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}
                >
                    All content on our website, including text, images,
                    graphics, logos, and product designs, is the exclusive
                    property of GKP & Son's Jewellers and is protected by
                    copyright laws. Unauthorized reproduction, distribution, or
                    use of any content without our written consent is strictly
                    prohibited. <br /> <br />
                    While we take every effort to ensure the accuracy of
                    information on our website, GKP & Son's Jewellers shall not
                    be held liable for any indirect, incidental, or
                    consequential damages arising from the use of our website,
                    products, or services.
                </p>
                <p
                    className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}
                >
                    Contact Us
                </p>
                <p
                    className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}
                >
                    By accessing and using our website, you acknowledge and
                    agree to abide by our Terms and Conditions. These terms
                    outline the rules, responsibilities, and guidelines for
                    using our platform, ensuring a safe and seamless experience
                    for all users. If you have any questions, concerns, or
                    require further clarification regarding our Terms and
                    Conditions, please do not hesitate to reach out to us. You
                    can contact our support team at
                    <a
                        href="mailto:gkpjewellers1997@gmail.com"
                        className="text-blue-600 hover:underline ml-2"
                    >
                        gkpjewellers1997@gmail.com
                    </a>
                    , and we will be happy to assist you.
                </p>
            </div>
            <Footer />
            <Rights />
        </div>
    );
}
