"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../Components/header";
import Card from "../Components/galleryProductsCard";
import Footer from "../Components/footer";
import Rights from "../Components/rights";
import { Parisienne, Montserrat, Cardo } from "next/font/google";
import { useSearchParams, useRouter } from "next/navigation";
import { getbyCat } from "../utils/queries";
import { useEffect, Suspense } from "react";

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

 function Products() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const encodedcat = searchParams.get("cat");
    const cat = encodedcat ? decodeURIComponent(encodedcat) : "";
    const [displayedItems, setDisplayedItems] = useState<{ productId: string; src: string; title: string }[]>([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
    const [subcategory, setSubcategory] = useState<string[]>([]);
    useEffect(() => {
        let subcat: any = new Set();
        getbyCat(cat).then((res: any) => {

            res.map((item: any) => {
                subcat.add(item.subcategory)
            })
            subcat = Array.from(subcat)
            setSubcategory(subcat as string[])
            setSelectedSubcategory(subcat[0] as string)
        })
    }, [])

    useEffect(() => {
        getbyCat(cat, selectedSubcategory).then((res: any) => {

            setDisplayedItems(res.map((item: any) => ({
                productId: item.productId,
                src: item.imageUrl,
                title: item.name,
            })))
        })
    }, [selectedSubcategory])

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
                    Best Gold {cat} Designs
                </h1>
                <p
                    className={`h-4 text-gray-800 text-2xl md:text-3xl font-light -mt-2  ${montserrat.className} `}
                >
                    IN COIMBATORE
                </p>
            </div>

            <div className="flex justify-center md:mt-10 gap-4">
                {subcategory.map((item, index) => (
                    <button
                        className={`border-b-2 ${selectedSubcategory === `${item}`
                            ? "border-b-gold text-black"
                            : "border-transparent text-gray-400"
                            } text-lg md:text-xl ${cardo.className}`}
                        onClick={() => {
                            setSelectedSubcategory(item);
                        }}
                        key={index}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap justify-evenly gap-0 mt-5 md:mt-10">
                {displayedItems.map((item, index) => (
                    <Card
                        key={index}
                        productId={item.productId}
                        src={item.src}
                        title={item.title}
                        onClick={() => {
                            const encodedId = encodeURIComponent(item.productId);
                            router.push(`/productsDescription/?productId=${encodedId}`);
                        }}
                    />
                ))}
            </div>
            <Footer />
            <Rights />
        </div>
    );
}

export default function Display() {
    return (
        <Suspense>
            <Products />
        </Suspense>
    )
}