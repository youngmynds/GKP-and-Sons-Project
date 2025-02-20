"use client";

import Image from "next/image";

interface CardProps {
    src: string;
    title: string;
    instaUrl : string;
    onClick() : void;
}

export default function InstaCard({ src, title , instaUrl }: CardProps) {
    return (
        <div className="bg-black mb-3 w-[calc(100%-16px)] sm:w-[calc(30%-12px)] md:w-[calc(50%-12px)]">
            <Image
                src={src}
                alt={title}
                width={500}
                height={500}
                className="object-cover"
                onClick={()=>{
                    window.location.href = instaUrl
                }}  
            />
        </div>
    );
}
