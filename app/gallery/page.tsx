"use client";

import Image from "next/image";
import Header from "../Components/header";
import Card from "../Components/galleryProductsCard";
import Footer from "../Components/footer";
import { Dancing_Script, Montserrat } from "next/font/google";
import Rights from "../Components/rights";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getbyCat, getCategories } from "../utils/queries";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // Adjust as needed
});

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function Gallery() {
    const [Items, setItems] = useState<{ title: string; src: string }[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const categories = await getCategories();
            const images: string[] = [];

            for (const cat of categories) {
                let product = await getbyCat(cat);
                if (product) images.push(product[0].imageUrl);
            }

            const itemsData = categories.map((cat, index) => ({
                title: cat,
                src: images[index] || "",
            }));

            setItems(itemsData);
        }

        fetchData();
    }, []);

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
                        COLLECTIONS
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
            <div className="w-full h-36 flex flex-col items-center justify-center">
                <h1
                    className={`text-gold text-6xl md:text-8xl ${dancingScript.className}`}
                >
                    Elegance
                </h1>
                <p
                    className={`h-4 text-gray-800 text-2xl md:text-3xl font-light mt-2 ${montserrat.className} `}
                >
                    A COLLECTION OF
                </p>
            </div>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly gap-0 mt-5 md:mt-10">
                {Items.length > 0 &&
                    Items.map((item, index) => (
                        <Card
                            key={index}
                            src={item.src}
                            title={item.title}
                            productId={item.title}
                            onClick={() => {
                                const encodedTitle = encodeURIComponent(
                                    item.title,
                                );
                                router.push(
                                    `/gallery/products/?cat=${encodedTitle}`,
                                );
                            }}
                        />
                    ))}
            </div>
            <Footer />
            <Rights />
        </div>
    );
}
