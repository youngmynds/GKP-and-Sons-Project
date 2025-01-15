import { Carousel } from "@material-tailwind/react";

interface CarouselItem {
    src: string;
    title: string;
}

interface CarouselProps {
    items: CarouselItem[];
    placeholder?: string;
}

export function Advertisements({ items }: CarouselProps) {
    return (
        <Carousel
            autoplay={true}
            loop={true}
            transition={{ duration: 2000 }}
            placeholder="Carousel Placeholder" // Example placeholder
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
    );
}
