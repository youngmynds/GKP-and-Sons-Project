import { Carousel } from "@material-tailwind/react";

interface CarouselItem {
  src: string;
  title: string;
}

interface CarouselProps {
  items: CarouselItem[];
  placeholder?: string;
  onPointerEnterCapture?: (event: React.PointerEvent) => void;
  onPointerLeaveCapture?: (event: React.PointerEvent) => void;
}

export function CarouselTransition({ items }: CarouselProps) {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 2000 }}
      placeholder="Carousel Placeholder" // Example placeholder
      onPointerEnterCapture
      onPointerLeaveCapture
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
