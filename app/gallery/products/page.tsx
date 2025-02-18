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
import { weightRanges } from "@/app/utils/data";
import Loading from "@/app/Components/Loading";

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
    const [selectedWeightRange, setSelectedWeightRange] = useState<{
        min: number;
        max: number;
        label: string;
    } | null>(
        searchParams.get("min") && searchParams.get("max")
            ? {
                  min: parseFloat(searchParams.get("min") || "0"),
                  max: parseFloat(searchParams.get("max") || "0"),
                  label:
                      searchParams.get("max") === "Infinity"
                          ? `24+ g`
                          : `${searchParams.get("min")}-${searchParams.get("max")} g`,
              }
            : null,
    );

    const [data, setData] = useState<{
        subcategories: string[];
        items: {
            productId: string;
            src: string;
            title: string;
            subcategory?: string;
            weight: number;
        }[];
    }>({ subcategories: [], items: [] });
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<
        {
            productId: string;
            src: string;
            title: string;
            subcategory?: string;
            weight: number;
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
                weight: parseFloat(item.weight),
            }));
            setData({ subcategories, items });
            setSelectedSubcategory(subcategories[0] || "");
        });
    }, [cat]);

    useEffect(() => {
        if (data.items.length === 0) return;
        setFilteredItems(
            data.items.filter((item) => {
                return (
                    (selectedSubcategory === "" ||
                        item.subcategory?.toString() ===
                            selectedSubcategory.toString()) &&
                    (!selectedWeightRange ||
                        (item.weight >= selectedWeightRange.min &&
                            item.weight <= selectedWeightRange.max))
                );
            }),
        );
    }, [selectedSubcategory, data, selectedWeightRange]);

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

            {data.items.length === 0 ? (
                <Loading message="Please wait while we find the best designs for you..." />
            ) : (
                <>
                    <div className="flex flex-col items-center mt-5">
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-white border border-gold hover:border-gold px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                                onChange={(e) => {
                                    const selectedRange = weightRanges.find(
                                        (range: {
                                            min: number;
                                            max: number;
                                            label: string;
                                        }) => range.label === e.target.value,
                                    );
                                    setSelectedWeightRange(
                                        selectedRange || null,
                                    );
                                }}
                                value={selectedWeightRange?.label}
                                title="Select a weight range to filter categories by products that fall within the selected range."
                            >
                                <option value="">
                                    Filter collections by gold weight (in grams)
                                </option>
                                {weightRanges.map(
                                    (
                                        range: {
                                            label: string;
                                            min: number;
                                            max: number;
                                        },
                                        index: number,
                                    ) => (
                                        <option key={index} value={range.label}>
                                            {range.label}
                                        </option>
                                    ),
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M7 10l5 5 5-5H7z" />
                                </svg>
                            </div>
                        </div>
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
                </>
            )}

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
