import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

interface CarouselItem {
    src: string;
    title: string;
}

interface CarouselProps {
    items: CarouselItem[];
    placeholder?: string;
}

export function Advertisements({ items, placeholder }: CarouselProps) {
    return (
        <>
            <Carousel
                placeholder={placeholder}
                transition={{ duration: 2000 }}
                className="rounded-xl"
            >
                {items.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        alt={item.title}
                        className="w-full h-[350px] object-cover"
                    />
                ))}
            </Carousel>
        </>
    );
}
