"use client";

import Header from "./Components/header";
import Image from "next/image";
import { UploadCloud } from "lucide-react"; // Import Lucide React icon
import Footer from "./Components/footer";
import Rights from "./Components/rights";
import Reviews from "./Components/reviews";
import Pdtcard from "./Components/productCategoryCard";
import { Members, Products } from "./utils/data";
import { Dancing_Script, Montserrat, Cardo } from "next/font/google";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageSlider } from "./utils/queries";
import { useState, useEffect, useRef } from "react";

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

const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => (
    <div
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 bg-opacity-50 pr-4 pl-3 py-2 rounded-full text-white"
        onClick={onClick}
    >
        ◀
    </div>
);

const CustomNextArrow = ({ onClick }: { onClick: () => void }) => (
    <div
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 bg-opacity-50 pr-3 pl-4 py-2 rounded-full text-white"
        onClick={onClick}
    >
        ▶
    </div>
);

export default function Home() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const router = useRouter();
    const [heroImages, setheroImages] = useState<string[]>([]);
    useEffect(() => {
        getImageSlider().then((data) => {
            if (data) {
                setheroImages(data);
            } else {
                setheroImages([
                    "https://i.imgur.com/OJ3Sfnb.jpeg",
                    "https://i.imgur.com/D8G3fGb.jpeg",
                    "https://i.imgur.com/YYgCe75.png",
                ]);
            }
        });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true, // Enable arrows
        prevArrow: <CustomPrevArrow onClick={() => {}} />, // Custom left arrow
        nextArrow: <CustomNextArrow onClick={() => {}} />, // Custom right arrow
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3, // Number of cards visible at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Adjust the speed of autoplay
        cssEase: "linear",
        arrows: false, // Hide next/prev arrows if not needed
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [result, setResult] = useState("");

    const uploadImageToImgBB = async (file: File) => {
        try {
            const formData = new FormData();
            formData.append("image", file);
            formData.append("key", "e22bf75ff3567cd84086365dbdca9a21"); // Replace with your actual API key

            const response = await fetch("https://api.imgbb.com/1/upload", {
                method: "POST",
                body: formData,
            });

            // Check if response is valid
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const text = await response.text(); // Get response text
            if (!text) {
                throw new Error("Empty response received from ImgBB.");
            }

            const data = JSON.parse(text); // Safely parse JSON

            return data.success ? data.data.url : null; // Return uploaded image URL
        } catch (error) {
            console.error("Image upload failed:", error);
            return null;
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);
        console.log("Has image:", formData.has("image"));

        if (formData.has("image")) {
            const file = formData.get("image");

            if (file instanceof File) {
                const imageUrl = await uploadImageToImgBB(file); // Upload to ImgBB

                if (imageUrl) {
                    formData.append("url", imageUrl);
                    formData.delete("image"); // Remove original file
                } else {
                    console.log("Image upload failed");
                }
            }
        }

        console.log("Final FormData entries:");
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        formData.append("access_key", "5d1e1a42-cf09-41b8-9f6c-24ee29e7c867");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="bg-[#FFFCF8]">
            <Header />
            {/* <div className="mt-20"> */}
            <Slider {...sliderSettings}>
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-[150px] md:h-[350px] relative"
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            layout="fill" // Ensures the image takes the full width of the parent
                            objectFit="cover" // Ensures the image covers the area without distortion
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </Slider>
            <section
                id="Home"
                className="max-w-7xl lg:flex text-center justify-center lg:gap-28 px-4 py-8 items-center mx-auto scroll-mt-24 mt-10"
            >
                {/* Title */}
                <div className="text-center mb-5">
                    <p
                        className={`h-4 text-black text-xl md:text-2xl ${montserrat.className} `}
                    >
                        EXCLUSIVE COLLECTIONS AT
                    </p>
                    <h1
                        className={`text-gold text-5xl md:text-7xl mt-5 ${dancingScript.className}`}
                    >
                        {"GKP & Son's Jewellers"}
                    </h1>
                </div>
                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {/* Left Images */}
                    <div className="col-span-1 grid grid-rows-2">
                        <Image
                            src="/BridalJewels/bridal1.png"
                            alt="Bridal Jewellery 1"
                            width={1000}
                            height={1000}
                            className="w-full h-[200px] object-cover"
                        />
                        <Image
                            src="/BridalJewels/bridal2.png"
                            alt="Bridal Jewellery 2"
                            width={1000}
                            height={1000}
                            className="w-full h-[210px] object-cover"
                        />
                    </div>

                    {/* Right Image */}
                    <div className="col-span-1 md:col-span-2 relative">
                        <Image
                            src="/BridalJewels/bridal3.png"
                            alt="Featured Bridal Jewellery"
                            width={1000}
                            height={1000}
                            className="w-full h-[420px] object-cover"
                        />
                        {/* Explore Button */}
                        <button
                            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-xl py-2 px-6 hover:bg-opacity-80 transition ${montserrat.className}`}
                            onClick={() => {
                                router.push("/gallery");
                            }}
                        >
                            Explore →
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-8 px-4 md:px-0 mt-5 bg-gray-100">
                <div className="max-w-7xl mx-auto flex justify-evenly items-center gap-2 md:gap-16">
                    {/* Certified Gold */}
                    <div className="flex gap-2 md:gap-4 items-center">
                        <Image
                            src="/Others/916CertifiedIcon.svg"
                            alt="certified"
                            width={45}
                            height={45}
                            className="w-[35px] md:w-[70px]"
                        />
                        <p
                            className={`font-normal text-xs sm:text-sm md:text-xl text-[#551513] ${montserrat.className}`}
                        >
                            Certified <br /> 916 Gold
                        </p>
                    </div>

                    {/* Purity Guaranteed */}
                    <div className="flex gap-2 md:gap-4 items-center">
                        <Image
                            src="/Others/PurityIcon.svg"
                            alt="certified"
                            width={45}
                            height={45}
                            className="w-[35px] md:w-[70px]"
                        />
                        <p
                            className={`font-normal text-xs sm:text-sm md:text-xl text-[#551513] ${montserrat.className}`}
                        >
                            Purity <br /> Guaranteed
                        </p>
                    </div>

                    {/* Custom Designs */}
                    <div className="flex gap-1 md:gap-4 items-center">
                        <Image
                            src="/Others/CustomIcon.svg"
                            alt="certified"
                            width={30}
                            height={30}
                            className="w-[30px] md:w-[65px]"
                        />
                        <p
                            className={`font-normal text-xs sm:text-sm md:text-xl text-[#551513] ${montserrat.className}`}
                        >
                            Custom <br /> Designs
                        </p>
                    </div>
                </div>
            </section>
            <section
                id="Products"
                className="max-w-7xl mx-auto mt-10 scroll-mt-24"
            >
                <div className="text-center">
                    <p
                        className={`h-4 text-black text-xl md:text-2xl ${montserrat.className} `}
                    >
                        OUR CRAFTED
                    </p>
                    <h1
                        className={`text-gold text-5xl md:text-7xl mt-5 ${dancingScript.className}`}
                    >
                        Products
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-5">
                    {Products.map((item, index) => (
                        <Pdtcard
                            key={index}
                            src={item.src}
                            title={item.title}
                        />
                    ))}
                </div>
            </section>

            <section
                id="Collections"
                className="max-w-7xl mx-auto items-center mt-10 scroll-mt-24"
            >
                <div className="text-center">
                    <p
                        className={`h-4 text-black text-xl md:text-2xl ${montserrat.className} `}
                    >
                        DISCOVER OUR LUXURY
                    </p>
                    <h1
                        className={`text-gold text-5xl md:text-7xl mt-5 ${dancingScript.className}`}
                    >
                        Collections
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-5">
                    {/* Card 1 */}
                    <div className="bg-black text-center w-[calc(50%-16px)] md:w-[calc(25%-12px)]">
                        <Image
                            src="/Collections/pendants.png"
                            alt="pendants"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Card 2 */}
                    <div className="bg-black text-center w-[calc(50%-16px)] md:w-[calc(25%-12px)]">
                        <Image
                            src="/Collections/chains.png"
                            alt="chains"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Card 3 */}
                    <div className="bg-black text-center w-[calc(50%-16px)] md:w-[calc(25%-12px)]">
                        <Image
                            src="/Collections/bangles.png"
                            alt="bangles"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Card 4 */}
                    <div className="relative bg-black text-center w-[calc(50%-16px)] md:w-[calc(25%-12px)]">
                        <Image
                            src="/Collections/rings.png"
                            alt="rings"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                        <button
                            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-xl hover:bg-opacity-80 transition ${montserrat.className}`}
                            onClick={() => {
                                router.push("/gallery");
                            }}
                        >
                            Explore →
                        </button>
                    </div>
                </div>
            </section>
            {/* </div> */}
            <div className="mt-10">
                <p
                    className={`h-4 text-center text-black text-xl md:text-2xl ${montserrat.className} `}
                >
                    REVIEWS
                </p>
                <p
                    className={`text-gray-700 text-center text-lg md:text-lg font-light mt-5 mb-5 ${cardo.className}`}
                >
                    Take a look at the glowing reviews from our satisfied
                    customers!
                </p>
                <Slider {...settings} className="py-5 max-w-7xl mx-auto mt-5">
                    {Members.map((item, index) => (
                        <div key={index} className="px-2 py-5">
                            <Reviews
                                src={item.src}
                                name={item.name}
                                review={item.review}
                                stars={item.stars}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <section
                id="Contact Us"
                className="max-w-7xl mx-auto mt-10 scroll-mt-24"
            >
                <div className="md:flex mb-10 pl-4 pr-4 items-center gap-5">
                    <div className="md:w-[50%] text-center">
                        <p
                            className={`h-4 text-black text-center text-xl md:text-2xl mb-5 ${montserrat.className}`}
                        >
                            CONTACT US
                        </p>
                        <p
                            className={`text-gray-700 text-center text-lg md:text-lg font-light mb-5 ${cardo.className}`}
                        >
                            We&rsquo;re here to help! Reach out to us for any
                            inquiries or assistance.
                        </p>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <a
                                    href="https://www.google.com/maps/place/GKP+%26+Sons+Jewellers/@10.9928859,76.9549267,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8eebbb32d66f9:0x692fe4cfcaedeb96!8m2!3d10.9928859!4d76.9575016!16s%2Fg%2F1tplj4x7?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[50%]"
                                >
                                    <div className="w-full flex flex-col justify-center items-center text-center border-2 border-[#FFD195] drop-shadow-lg h-[200px] md:h-[220px] cursor-pointer">
                                        <Image
                                            src="/ShopInfoIcons/locationIcon.svg"
                                            alt="locationIcon"
                                            width={40}
                                            height={40}
                                            className="mt-4 mb-4 md:-mt-6 md:mb-8"
                                        />
                                        <p
                                            className={`text-sm md:text-sm ${cardo.className} text-black`}
                                        >
                                            Swarna Mahal Complex, 441/2, Big
                                            Bazaar St, Prakasam, Town Hall,
                                            Coimbatore, Tamil Nadu 641001
                                        </p>
                                    </div>
                                </a>

                                <div className="w-[50%] flex flex-col justify-center items-center text-center border-2 border-[#FFD195] drop-shadow-lg h-[200px] md:h-[220px]">
                                    <Image
                                        src="/ShopInfoIcons/callIcon.svg"
                                        alt="callIcon"
                                        width={60}
                                        height={60}
                                        className="-mt-8 mb-6 md:-mt-6 md:mb-8"
                                    />
                                    <p
                                        className={`text-sm md:text-sm ${cardo.className} text-black`}
                                    >
                                        (+91) 98428 31542
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href="mailto:gkpjewellers1997@gmail.com"
                                    className="w-[50%]"
                                >
                                    <div className="w-full flex flex-col justify-center items-center text-center border-2 border-[#FFD195] drop-shadow-lg h-[200px] md:h-[220px] cursor-pointer">
                                        <Image
                                            src="/ShopInfoIcons/mailIcon.svg"
                                            alt="mailIcon"
                                            width={60}
                                            height={60}
                                            className="-mt-6 mb-8 md:-mt-4 md:mb-12"
                                        />
                                        <p
                                            className={`text-sm md:text-sm ${cardo.className} text-black`}
                                        >
                                            gkpjewellers1997 @gmail.com
                                        </p>
                                    </div>
                                </a>
                                <div className="w-[50%] flex flex-col justify-center items-center text-center border-2 border-[#FFD195] drop-shadow-lg h-[200px] md:h-[220px]">
                                    <Image
                                        src="/ShopInfoIcons/clockIcon.svg"
                                        alt="clockIcon"
                                        width={50}
                                        height={50}
                                        className="-mt-2 mb-6 md:-mt-2 md:mb-10"
                                    />
                                    <p
                                        className={`text-sm md:text-sm ${cardo.className} text-black`}
                                    >
                                        Open Monday to Saturday <br /> 10AM -
                                        9PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="bg-[#2C1338] text-white p-4 mt-5 md:mt-0 md:w-[50%] mx-auto shadow-md text-center"
                    >
                        <h2
                            className={`text-center text-xl mt-2 mb-8 ${montserrat.className}`}
                        >
                            GET IN TOUCH WITH US
                        </h2>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="First Name *"
                                className="col-span-1 border border-gray-300 p-2 text-black"
                                required
                                name="First Name"
                            />
                            <input
                                type="text"
                                placeholder="Last Name *"
                                className="col-span-1 border border-gray-300 p-2 text-black"
                                required
                                name="Last Name"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input
                                type="email"
                                placeholder="Email *"
                                className="col-span-1 border border-gray-300 p-2 text-black"
                                required
                                name="Email"
                            />
                            <input
                                type="phone"
                                placeholder="Phone Number *"
                                className="col-span-1 border border-gray-300 p-2 text-black"
                                required
                                name="Phone Number"
                            />
                        </div>

                        <textarea
                            placeholder="Message *"
                            className="w-full border border-gray-300 p-2 text-black h-32 mb-4"
                            required
                            name="Message"
                        ></textarea>
                        <div
                            className="flex flex-col items-center justify-center border-2 border-dashed border-[#25BAFF] rounded-lg p-6 bg-[#F9FDFF] shadow-md w-full cursor-pointer"
                            onClick={handleClick}
                        >
                            <div className="text-center">
                                {/* Centering the Icon */}
                                <div className="flex items-center justify-center mb-2">
                                    <UploadCloud className="w-10 h-10 text-gray-500" />
                                </div>

                                <p
                                    className={`text-gray-700 ${montserrat.className}`}
                                >
                                    Drag your documents, photos or videos here
                                    to start uploading.
                                </p>
                                <p
                                    className={`text-gray-500 my-2 ${montserrat.className}`}
                                >
                                    ———— OR ————
                                </p>
                                <button
                                    className={`bg-[#288CFD] text-white px-6 py-2 rounded-full hover:bg-blue-600 ${montserrat.className}`}
                                >
                                    Browse files
                                </button>
                            </div>
                        </div>

                        <input
                            type="file"
                            id="imageUpload"
                            name="image"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                        />

                        <button
                            type="submit"
                            className={`bg-yellow-500 mt-8 mb-4 text-[#2C1338] px-8 py-2 rounded-full hover:bg-yellow-600 ${cardo.className}`}
                        >
                            Send Message
                        </button>

                        <p>{result}</p>
                    </form>
                </div>
            </section>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.60861578839!2d76.95492667509176!3d10.992885889169319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8eebbb32d66f9%3A0x692fe4cfcaedeb96!2sGKP%20%26%20Sons%20Jewellers!5e0!3m2!1sen!2sin!4v1736786922186!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md shadow-md border"
                ></iframe>
            </div>
            <Footer />
            <Rights />
        </div>
    );
}
