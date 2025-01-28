"use client";

import Header from "./components/header";
import Image from "next/image";
import { Advertisements } from "./components/advertisementSlider";
import Footer from "./components/footer";
import Rights from "./components/rights";
import Reviews from "./components/reviews";
import Pdtcard from "./components/productCategoryCard";
import { Members, Ads, Products } from "./utils/data";
import { Parisienne, Montserrat, Cardo } from "next/font/google";
import { useRouter } from "next/navigation";

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

export default function Home() {
    const router = useRouter();
    return (
        <div className="bg-[#FFFCF8]">
            <Header />
            <Advertisements items={Ads} />
            <div className="">
                <section className="lg:flex text-center justify-center lg:gap-28 px-4 py-8 items-center">
                    {/* Title */}
                    <div className="text-center mb-5 lg:mb-5">
                        <p
                            className={`h-4 text-black text-xl md:text-2xl ${montserrat.className} `}
                        >
                            DISCOUNTS ON
                        </p>
                        <h1
                            className={`text-gold text-5xl md:text-7xl ${parisienne.className}`}
                        >
                            Bridal Jewellery
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
                <section className="py-8 px-4 md:px-4 mb-10 bg-gray-100">
                    <div className="flex justify-between md:mx-16 items-center gap-2 md:gap-4">
                        {/* Certified Gold */}
                        <div className="flex gap-1 md:gap-4 items-center">
                            <Image
                                src="/Others/916CertifiedIcon.svg"
                                alt="certified"
                                width={45}
                                height={45}
                                className="md:w-[70px]"
                            />
                            <p
                                className={`font-normal text-sm md:text-xl text-[#551513] ${montserrat.className}`}
                            >
                                Certified <br /> 916 Gold
                            </p>
                        </div>

                        {/* Purity Guaranteed */}
                        <div className="flex gap-1 md:gap-4 items-center">
                            <Image
                                src="/Others/PurityIcon.svg"
                                alt="certified"
                                width={45}
                                height={45}
                                className="md:w-[70px]"
                            />
                            <p
                                className={`font-normal text-sm md:text-xl text-[#551513] ${montserrat.className}`}
                            >
                                Purity <br /> Guaranteed
                            </p>
                        </div>

                        {/* Custom Designs */}
                        <div className="flex gap-1 md:gap-4 items-center">
                            <Image
                                src="/Others/SettingsIcon.svg"
                                alt="certified"
                                width={30}
                                height={30}
                                className="md:w-[55px]"
                            />
                            <p
                                className={`font-normal text-sm md:text-xl text-[#551513] ${montserrat.className}`}
                            >
                                Custom <br /> Designs
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="text-center" id="Products">

                <p
                    className={`h-4 text-black text-xl md:text-2xl ${montserrat.className} `}
                >
                    OUR CRAFTED
                </p>
                <h1
                    className={`text-gold text-5xl md:text-7xl ${parisienne.className}`}
                >
                    Products
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {Products.map((item, index) => (
                    <Pdtcard key={index} src={item.src} title={item.title} />
                ))}
            </div>

            <div className="text-center mt-10" id="Collections">
                <p
                    className={`h-4 text-black text-xl md:text-2xl -mt-2 ${montserrat.className} `}
                >
                    DISCOVER OUR LUXURY
                </p>
                <h1
                    className={`text-gold text-5xl md:text-7xl ${parisienne.className}`}
                >
                    Collections
                </h1>
            </div>
            <div className="flex flex-wrap mb-10 gap-2 pl-2">
                {/* Card 1 */}
                <div className="bg-black text-center w-[calc(50%-8px)] sm:w-[calc(25%-8px)] md:w-[calc(25%-8px)]">
                    <Image
                        src="/Collections/pendants.png"
                        alt="pendants"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Card 2 */}
                <div className="bg-black text-center w-[calc(50%-8px)] sm:w-[calc(25%-8px)] md:w-[calc(25%-8px)]">
                    <Image
                        src="/Collections/chains.png"
                        alt="chains"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Card 3 */}
                <div className="bg-black text-center w-[calc(50%-8px)] sm:w-[calc(25%-8px)] md:w-[calc(25%-8px)]">
                    <Image
                        src="/Collections/bangles.png"
                        alt="bangles"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Card 4 */}
                <div className="relative bg-black text-center w-[calc(50%-8px)] sm:w-[calc(25%-8px)] md:w-[calc(25%-8px)]">
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
            <div>
                <p
                    className={`h-4 text-black text-center text-xl md:text-2xl mb-10 ${montserrat.className} `}
                >
                    REVIEWS
                </p>
            </div>
            <div className="flex gap-4 mb-10 overflow-x-auto pl-5 pr-5 hide-scrollbar">
                {Members.map((item, index) => (
                    <Reviews
                        key={index}
                        src={item.src}
                        name={item.name}
                        review={item.review}
                        stars={item.stars}
                    />
                ))}
            </div>
            <div className="md:flex mb-10 pl-4 pr-4 items-center gap-5">
                <div className="md:w-[50%] text-center" id="Contact Us">
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
                            <div className="w-[50%] flex flex-col justify-center items-center text-center border-2 border-[#FFD195] drop-shadow-lg h-[200px] md:h-[220px]">
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
                                    Swarna Mahal Complex, 441/2, Big Bazaar St,
                                    Prakasam, Town Hall, Coimbatore, Tamil Nadu
                                    641001
                                </p>
                            </div>
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
                                    0422 239 6449 <br /> (+91) 98745 43210
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-[50%] flex flex-col justify-center items-center text-center border-2 border-[#FFD195] drop-shadow-lg h-[200px] md:h-[220px]">
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
                                    gkpjewellers24 @gmail.com
                                </p>
                            </div>
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
                                    Open Monday to Saturday <br /> 10AM - 9PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#2C1338] text-white p-4 mt-5 md:mt-0 md:w-[50%] mx-auto shadow-md text-center">
                    <h2
                        className={`text-center text-xl mb-8 ${montserrat.className}`}
                    >
                        GET IN TOUCH WITH US
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="First Name *"
                            className="col-span-1 border border-gray-300 p-2 text-black"
                        />
                        <input
                            type="text"
                            placeholder="Last Name *"
                            className="col-span-1 border border-gray-300 p-2 text-black"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="email"
                            placeholder="Email *"
                            className="col-span-1 border border-gray-300 p-2 text-black"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number *"
                            className="col-span-1 border border-gray-300 p-2 text-black"
                        />
                    </div>

                    <textarea
                        placeholder="Message *"
                        className="w-full border border-gray-300 p-2 text-black h-24 mb-4"
                    ></textarea>

                    <div className="border border-dashed border-blue-300 bg-blue-50 p-4 text-center mb-4">
                        <div className="flex justify-center items-center mb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-2 0V4H4v12h4a1 1 0 110 2H4a1 1 0 01-1-1V3z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M14 14a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 00-2 0v6a1 1 0 102 0V9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p
                            className={`text-gray-600 mb-2 ${montserrat.className}`}
                        >
                            Drag your documents, photos, or videos here to start
                            uploading.
                        </p>
                        <p
                            className={`text-gray-600 mb-2 ${montserrat.className}`}
                        >
                            ----- OR -----
                        </p>
                        <button
                            className={`bg-blue-500 text-white px-4 py-2 rounded-full ${montserrat.className}`}
                        >
                            Browse files
                        </button>
                    </div>
                    <button
                        className={`bg-yellow-500 mt-2 text-[#2C1338] px-8 py-2 rounded-full hover:bg-yellow-600 ${cardo.className}`}
                    >
                        Send Message
                    </button>
                </div>
            </div>
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
