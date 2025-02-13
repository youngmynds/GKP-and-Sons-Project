"use client"

import Header from "../Components/header";
import Footer from "../Components/footer";
import Rights from "../Components/rights";
import Image from "next/image";
import { Parisienne, Montserrat, Cardo } from "next/font/google";

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const cardo = Cardo({
    weight: "400",
    subsets: ["latin"],
});


export default function aboutus() {

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
                        className={`text-white text-center uppercase font-normal font-serif text-2xl md:text-4xl ${montserrat.className}`}
                    >
                        PRIVACY POLICY
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
            <div className="max-w-5xl mx-auto py-16 px-8 justify-center items-center pb-20">
                <p className={`text-gray-600 text-center text-base md:text-lg ${cardo.className}`}>
                    At GKP & Sons Jewellers, we are committed to protecting your privacy and ensuring the security of any personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website. Our website is designed solely to showcase our products and does not facilitate online transactions or purchases.
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    Information We Collect
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    When you visit our website, we may collect certain information to enhance your browsing experience and respond to inquiries. If you choose to contact us via forms, email, or phone, we may collect personal details such as your name, email address, and phone number. This information allows us to assist you with inquiries about our products and services. <br /> <br />
                    In addition to the information you provide voluntarily, we may automatically collect non-personal data, such as your device type, browser, IP address, and website usage patterns. This helps us analyze visitor preferences and improve the functionality of our website. We may also use cookies and analytics tools to enhance user experience. However, we do not collect sensitive financial information as our website does not process online payments or transactions.
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    How We Use Your Information
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    The information we collect is used primarily to communicate with you, respond to your inquiries, and provide you with details about our products and services. If you reach out to us with questions about our jewelry collections, store locations, or other offerings, we will use your contact details to provide relevant information. <br /> <br />
                    Additionally, we may use non-personal data, such as website analytics, to better understand user behavior and improve our website’s design and functionality. If you choose to receive updates from us, we may also send occasional promotional messages regarding new collections, special offers, or store events. However, we respect your privacy and ensure that you have the option to opt out of such communications at any time. We do not share, sell, or rent your personal information to third-party companies for marketing purposes.
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    How We Protect Your Information
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    We take reasonable security measures to safeguard your personal information from unauthorized access, misuse, or disclosure. Our website employs encryption and secure servers to protect any data that is collected. Access to personal information is restricted to authorized personnel only, ensuring that your details remain confidential. <br /> <br />
                    Since our website is intended only for showcasing products and does not handle financial transactions, we do not store or process sensitive payment details. While we strive to maintain a secure platform, we encourage users to be mindful of online security practices, such as avoiding the sharing of personal information through unsecured channels.
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    Your Rights
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    As a user, you have the right to access, update, or request the deletion of any personal information you have shared with us. If you have previously subscribed to our updates but no longer wish to receive communications, you can opt out at any time. We respect your choices regarding privacy and are committed to addressing any concerns you may have regarding your data.
                    If you would like to update your information, unsubscribe from marketing messages, or request the removal of your data, please contact us at:
                    <a href="mailto:gkpjewellers1997@gmail.com" className="text-blue-600 hover:underline ml-2">
                        gkpjewellers1997@gmail.com
                    </a>
                </p>
                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    Changes to Our Privacy Policy
                </p>
                <p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
                    We may update this Privacy Policy periodically to reflect changes in our business operations or to comply with legal requirements. Any revisions will be posted on this page, and we encourage you to review the policy periodically to stay informed about how we handle your information.
                </p>
            </div>
            <Footer />
            <Rights />
        </div>
    )
}