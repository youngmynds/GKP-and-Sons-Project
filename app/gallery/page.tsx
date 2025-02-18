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
import { weightRanges } from "../utils/data";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // Adjust as needed
});

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function Gallery() {
    const [Items, setItems] = useState<
        { title: string; src: string; weights: number[] }[]
    >([]);
    const [selectedWeightRange, setSelectedWeightRange] = useState<{
        min: number;
        max: number;
    } | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const categories = await getCategories();
            const images: string[] = [];
            const weights: Map<string, number[]> = new Map();

            for (const cat of categories) {
                let product = await getbyCat(cat);
                if (product) {
                    images.push(product[0].imageUrl);
                    weights.set(
                        cat,
                        product.map((p) => parseFloat(p.weight ?? "0 g")),
                    );
                }
            }

            const itemsData = categories.map((cat, index) => ({
                title: cat,
                src: images[index] || "",
                weights: weights.get(cat) || [],
            }));

            setItems(itemsData);
        }

        fetchData();
    }, []);

    const filteredItems = selectedWeightRange
        ? Items.filter((item) =>
              item.weights.some(
                  (weight) =>
                      weight >= selectedWeightRange.min &&
                      weight <= selectedWeightRange.max,
              ),
          )
        : Items;

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
                <p
                    className={`h-4 text-gray-800 text-2xl md:text-3xl font-light mt-2 ${montserrat.className} `}
                >
                    A COLLECTION OF
                </p>
                <h1
                    className={`text-gold text-6xl md:text-8xl mt-2 ${dancingScript.className}`}
                >
                    Elegance
                </h1>
            </div>

            <div className="flex flex-col items-center mt-5">
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-white border border-gold hover:border-gold px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                        onChange={(e) => {
                            const selectedRange = weightRanges.find(
                                (range) => range.label === e.target.value,
                            );
                            setSelectedWeightRange(selectedRange || null);
                        }}
                        title="Select a weight range to filter categories by products that fall within the selected range."
                    >
                        <option value="">
                            Filter collections by gold weight (in grams)
                        </option>
                        {weightRanges.map((range, index) => (
                            <option key={index} value={range.label}>
                                {range.label}
                            </option>
                        ))}
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

            <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly gap-0 mt-5 md:mt-10">
                {filteredItems.length > 0 &&
                    filteredItems.map((item, index) => (
                        <Card
                            key={index}
                            src={item.src}
                            title={item.title}
                            productId={item.title}
                            onClick={() => {
                                const encodedTitle = encodeURIComponent(
                                    item.title,
                                );
                                let url = `/gallery/products/?cat=${encodedTitle}`;
                                if (selectedWeightRange) {
                                    url += `&range=${selectedWeightRange.min}-${selectedWeightRange.max}`;
                                }
                                router.push(url);
                            }}
                        />
                    ))}
            </div>
            <Footer />
            <Rights />
        </div>
    );
}
