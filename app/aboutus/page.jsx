"use client"

import Header from "../Components/header";
import Footer from "../Components/footer";
import Rights from "../Components/rights";
import Image from "next/image";
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


export default function aboutus() {

    const milestones = [
        {
            title: "Unmatched Craftsmanship",
            description: "Our jewellery is crafted with precision and artistry, using only the finest materials to create timeless pieces that blend tradition and contemporary elegance."
        },
        {
            title: "Exquisite Designs",
            description: "We offer a diverse collection that caters to every occasion, from classic heritage designs to modern creations that reflect evolving trends."
        },
        {
            title: "Trusted Relationships",
            description: "Integrity and transparency define our approach. We build lasting relationships with our customers through ethical practices and genuine service."
        },
        {
            title: "Guaranteed Quality",
            description: "With a commitment to purity and excellence, we ensure ethical sourcing and rigorous quality checks, delivering only the finest jewellery to our valued customers."
        }
    ];

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
                        ABOUT US
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
                <p className={`text-gray-600 text-center text-base md:text-lg ${cardo.className}`}>
                    At G.K.P & Sons Jewellers, we believe that jewellery is more than just an ornament—it is a reflection of culture, craftsmanship, and cherished emotions. Since our inception in 1997, we have remained dedicated to creating exquisite jewellery that seamlessly blends tradition with modern elegance. Our commitment to excellence has made us a trusted name in the industry, offering timeless pieces that celebrate life’s special moments.
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    OUR STORY
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    For over two decades, G.K.P & Sons Jewellers has been synonymous with quality, authenticity, and remarkable craftsmanship. What began as a humble family venture has flourished into a renowned jewellery brand, earning the trust of generations. Our journey is rooted in a passion for preserving traditional artistry while embracing contemporary trends. Today, we take immense pride in being the preferred choice for individuals who seek exquisite jewellery that symbolizes love, prosperity, and timeless beauty.
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    Our Craftsmanship
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    Every piece of jewellery at G.K.P & Sons Jewellers is a masterpiece, meticulously crafted by skilled artisans who bring decades of expertise to their work. We believe that true beauty lies in the details, and our artisans pay close attention to every curve, cut, and embellishment to ensure unparalleled precision and elegance. By blending traditional techniques with modern innovations, we create designs that are not only visually stunning but also deeply meaningful. From intricate gold and diamond collections to bespoke designs, our jewellery is crafted to perfection, making each piece a treasured heirloom.
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    Why Choose Us?
                </p>
                <div className="relative border-l-4 border-gold pl-6 mt-10">
                    {milestones.map((item, index) => (
                        <div key={index} className="mb-8 relative">
                            {/* Circle Indicator */}
                            <div className="absolute -left-[34px] w-4 h-4 bg-gold rounded-full border-4 border-white"></div>
                            {/* Content */}
                            <h3 className={`text-3xl text-gold font-bold ${parisienne.className}`}>{item.title}</h3>
                            <p className={`text-gray-600 text-base md:text-lg ${cardo.className}`}>{item.description}</p>
                        </div>
                    ))}
                </div>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    Our Promise
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    Jewellery is not just an accessory—it is a timeless expression of love, tradition, and celebration. At G.K.P & Sons Jewellers, we are devoted to crafting jewellery that holds sentimental value and brings joy to its wearer. Whether it is a wedding, an anniversary, a personal milestone, or a token of appreciation, our jewellery is designed to be cherished for generations to come.  <br /> <br />
                    We invite you to explore our exquisite collection and become a part of the G.K.P & Sons Jewellers family, where tradition meets elegance, and every piece tells a beautiful story.
                </p>
            </div>
            <Footer />
            <Rights />
        </div>
    )
}