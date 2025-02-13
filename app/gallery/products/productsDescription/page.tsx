"use client";

import Image from "next/image";
import Header from "../../../Components/header";
import Footer from "../../../Components/footer";
import Rights from "../../../Components/rights";
import { Montserrat, Cardo } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { getProduct } from "../../../utils/queries";
import { Suspense, useEffect, useState } from "react";

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const cardo = Cardo({
    weight: ["400", "700"],
    subsets: ["latin"],
});

function ProductsDescription() {
    const searchParams = useSearchParams();
    const encodedId = searchParams.get("productId");
    const productId = encodedId ? decodeURIComponent(encodedId) : "";
    const [product, setProduct] = useState<{ productId: string; name: string; description: string, imageUrl: string, weight: string, carat: string, size: string }>();
    useEffect(() => {
        getProduct(productId).then((res: any) => {
            setProduct(res);
        });
    }, [])
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
                        className={`text-white text-center font-normal uppercase font-serif text-2xl md:text-4xl ${montserrat.className}`}
                    >
                        {product?.name}
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
            <div className="max-w-7xl mx-auto md:flex p-4 justify-center items-center mt-5">
                <div className="flex justify-center items-center">
                    {product?.imageUrl && (
                        <Image
                            src={product.imageUrl}
                            alt="CastingRing1"
                            className="object-cover w-[450px] md:w-[400px] h-[280px]"
                            width="250"
                            height="100"
                        />
                    )}
                </div>
                <div className="md:w-[30%] flex flex-col items-center md:items-start md:ml-10 mt-5 md:mt-0">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <h1
                            className={`text-3xl md:text-4xl text-center md:text-left uppercase text-black tracking-wide ${montserrat.className}`}
                        >
                            {product?.name}
                        </h1>
                    </div>
                    <p className={`mt-4 text-center md:text-left text-lg text-gray-700 leading-relaxed ${cardo.className}`}>
                        {product?.description}
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <div className="border-2 border-gray-500 rounded-2xl mt-5 mb-5 p-4 md:p-8 inline-block justify-center">
                    <p
                        className={`text-black text-lg md:text-2xl ${montserrat.className}`}
                    >
                        Product Details
                    </p>
                    <div className="flex mt-6 md:mt-8 gap-8 md:gap-64">
                        <div>
                            <p
                                className={`text-black font-semibold text-base md:text-lg ${cardo.className}`}
                            >
                                {product?.weight}
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
                                {product?.size}
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
                                {product?.carat}
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

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center mt-10">
                <p className={`text-gray-800 text-center md:text-left text-base md:text-lg mr-0 md:mr-2 ${montserrat.className}`}>For any questions or inquiries about our products,</p>
                <button
                    className={`flex gap-2 bg-purple-500 text-white px-10 md:px-5 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:bg-purple-600 hover:scale-105 focus:ring-4 focus:ring-purple-300 my-5 text-center ${cardo.className}`}
                    onClick={() => {
                        const ownerNumber = "9842831542";
                        const message = encodeURIComponent(
                            `Hello, I'm interested in *${product?.name}* (ID: ${productId}, URL: ${window.location.href}). Can you provide more details?`
                        );
                        const whatsappURL = `https://wa.me/${ownerNumber}?text=${message}`;
                        window.open(whatsappURL, "_blank");
                    }}
                >
                    <Image src="/SocialMediaIcons/whatsapp.svg" alt="Enquire" width={24} height={24}/> Enquire
                </button>
            </div>

            <Footer />
            <Rights />
        </div>
    );
}

export default function Display() {
    return (
        <Suspense>
            <ProductsDescription />
        </Suspense>
    )
}