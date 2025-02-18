import Image from "next/image";
import InstaCard from "./instagramPostsCard";
import { Montserrat, Cardo } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const cardo = Cardo({
    weight: "400",
    subsets: ["latin"],
});

export default function Footer() {
    const router = useRouter();
    const Items = [
        { src: "/Collections/pendants.png", title: "PENDANTS" },
        { src: "/Collections/chains.png", title: "CHAINS" },
        { src: "/Collections/bangles.png", title: "BANGLES" },
        //   { src: "/Collections/bracelets.png", title: "BRACELETS" },
    ];
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#" + id);
        }
    };

    return (
        <div className="md:flex gap-5 pt-10 pb-10 pl-5 md:pl-14 md:pr-14 bg-[#170722] text-gray-300 justify-evenly">
            <div className="flex-1">
                <p
                    className={`underline decoration-gold decoration-4 underline-offset-8 text-xl font-medium mb-5 text-white ${montserrat.className}`}
                >
                    Contact Information
                </p>
                <div className={`text-lg font-medium ${cardo.className}`}>
                    <div className={`pl-4 border-l-4 mb-2`}>
                        <p className={`text-gold`}>Call Us</p>
                        <p>+91 98428 31542</p>
                    </div>
                    <div className={`pl-4 border-l-4 mb-2`}>
                        <p className={`text-gold`}>Email Us</p>
                        <p>gkpjewellers1997@gmail.com</p>
                    </div>
                    <div className={`pl-4 border-l-4 mb-2`}>
                        <p className={`text-gold`}>Follow Us</p>
                        <div className="flex gap-4 mt-1">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/SocialMediaIcons/Facebook.svg"
                                    alt="Facebook"
                                    width="12"
                                    height="12"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/gkp.jewellers.cbe?igsh=MXZpZXo5cDQ3ZHVteQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/SocialMediaIcons/Instagram.svg"
                                    alt="Instagram"
                                    width="25"
                                    height="25"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@gkpjewellers7161"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/SocialMediaIcons/Youtube.svg"
                                    alt="Youtube"
                                    width="30"
                                    height="30"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/SocialMediaIcons/Linkedin.svg"
                                    alt="Linkedin"
                                    width="23"
                                    height="23"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-[70%] md:w-[100%] mt-10 md:mt-0">
                <p
                    className={`underline decoration-gold decoration-4 underline-offset-8 text-xl font-medium mb-5 text-white ${montserrat.className}`}
                >
                    Locate Us
                </p>
                <p className={`text-lg font-medium ${cardo.className}`}>
                    Swarna Mahal Complex, 441/2, Big Bazaar St, Prakasam, Town
                    Hall, Coimbatore, Tamil Nadu 641001
                </p>
            </div>
            <div className="flex-1 mt-10 md:mt-0 md:ml-10">
                <p
                    className={`underline decoration-gold decoration-4 underline-offset-8 text-xl font-medium mb-5 text-white ${montserrat.className}`}
                >
                    Useful Links
                </p>
                <p
                    onClick={() => scrollToSection("Home")}
                    className={`text-lg font-medium mb-2 cursor-pointer ${cardo.className}`}
                >
                    Home
                </p>
                <p
                    onClick={() => router.push("/aboutus")}
                    className={`text-lg font-medium mb-2 cursor-pointer ${cardo.className}`}
                >
                    About Us
                </p>
                <p
                    onClick={() => router.push("/gallery")}
                    className={`text-lg font-medium mb-2 cursor-pointer ${cardo.className}`}
                >
                    Collections
                </p>
                <p
                    onClick={() => scrollToSection("Contact Us")}
                    className={`text-lg font-medium mb-2 cursor-pointer ${cardo.className}`}
                >
                    Contact Us
                </p>
            </div>
            <div className="flex-1 mt-10 md:mt-0">
                <p
                    className={`underline decoration-gold decoration-4 underline-offset-8 text-xl font-medium mb-5 text-white ${montserrat.className}`}
                >
                    Instagram Feeds
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                    {Items.map((item, index) => (
                        <InstaCard
                            key={index}
                            src={item.src}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
