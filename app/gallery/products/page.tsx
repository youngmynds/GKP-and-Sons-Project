"use client";

import { useState, useEffect, Suspense, use } from "react";
import Image from "next/image";
import Header from "../../Components/header";
import Card from "../../Components/galleryProductsCard";
import Footer from "../../Components/footer";
import Rights from "../../Components/rights";
import { Dancing_Script, Montserrat, Cardo } from "next/font/google";
import { useSearchParams, useRouter } from "next/navigation";
import { getbyCat } from "../../utils/queries";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // Adjust as needed
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
    const [cat, setCat] = useState<string>(searchParams.get("cat") || "");

    const [data, setData] = useState<{
        subcategories: string[];
        items: {
            productId: string;
            src: string;
            title: string;
            subcategory?: string;
        }[];
    }>({ subcategories: [], items: [] });
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<
        {
            productId: string;
            src: string;
            title: string;
            subcategory?: string;
        }[]
    >([]);

    useEffect(() => {
        getbyCat(cat).then((res: any) => {
            const subcategories = Array.from(
                new Set(res.map((item: any) => item.subcategory)),
            ) as string[];
            const items = res.map((item: any) => ({
                productId: item.productId,
                src: item.imageUrl,
                title: item.name,
                subcategory: item.subcategory,
            }));
            setData({ subcategories, items });
            setSelectedSubcategory(subcategories[0] || "");
            setFilteredItems(
                items.filter(
                    (item: {
                        productId: string;
                        src: string;
                        title: string;
                        subcategory?: string;
                    }) => {
                        if (subcategories[0] === "") {
                            return true;
                        }
                        return (
                            item.subcategory?.toString() ===
                            subcategories[0].toString()
                        );
                    },
                ),
            );
        });
    }, [cat]);

    useEffect(() => {
        console.log(selectedSubcategory);
        if (data.items.length === 0) return;
        setFilteredItems(
            data.items.filter((item) => {
                if (selectedSubcategory === "") {
                    return true;
                }
                return (
                    item.subcategory?.toString() ===
                    selectedSubcategory.toString()
                );
            }),
        );
    }, [selectedSubcategory, data]);

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
                        {cat}
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
            <div className="max-w-7xl mx-auto h-72 md:h-36 flex flex-col items-center justify-center">
                <h1
                    className={`text-gold text-6xl md:text-8xl text-center w-[95%] ${dancingScript.className}`}
                >
                    Best Gold {cat} Designs
                </h1>
                <p
                    className={`h-4 text-gray-800 text-2xl md:text-3xl font-light  ${montserrat.className} `}
                >
                    IN COIMBATORE
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex justify-center md:mt-10 gap-8">
                {data.subcategories.map((item, index) => (
                    <button
                        className={`border-b-2 ${
                            selectedSubcategory === item
                                ? "border-b-gold text-black"
                                : "border-transparent text-gray-400"
                        } text-lg md:text-2xl ${cardo.className}`}
                        onClick={() => setSelectedSubcategory(item)}
                        key={index}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly gap-0 mt-5 md:mt-10">
                {filteredItems.map((item, index) => (
                    <Card
                        key={index}
                        productId={item.productId}
                        src={item.src}
                        title={item.title}
                        onClick={() => {
                            const encodedId = encodeURIComponent(
                                item.productId,
                            );
                            router.push(
                                `/gallery/products/productsDescription/?productId=${encodedId}`,
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

export default function Display() {
    return (
        <Suspense>
            <Products />
        </Suspense>
    );
}
