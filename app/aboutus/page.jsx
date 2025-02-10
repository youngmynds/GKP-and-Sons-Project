"use client";

import { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Rights from "../Components/rights";
import Image from "next/image";
import { Parisienne, Montserrat, Cardo } from "next/font/google";

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

export default function AboutUs() {
    const [isTamil, setIsTamil] = useState(false);

    const toggleLanguage = () => {
        setIsTamil(!isTamil);
    };

    const milestones = isTamil ? [
        { title: "அசைக்க முடியாத கைவினைப்பணி", description: "எங்கள் நகைகள் பாரம்பரியத்தையும் நவீன நேர்த்தியையும் ஒருங்கிணைத்து உருவாக்கப்படுகின்றன." },
        { title: "அற்புதமான வடிவமைப்புகள்", description: "கிளாசிக் பாரம்பரிய வடிவங்கள் முதல் நவீன சுவைகள்வரை, அனைத்து தருணங்களுக்கும் பொருந்தும் வகையில் வடிவமைக்கப்பட்டுள்ளது." },
        { title: "நம்பிக்கைக்குரிய உறவுகள்", description: "நேர்மை மற்றும் வெளிப்படைத்தன்மையுடன், எங்கள் வாடிக்கையாளர்களுடன் உறுதியான உறவுகளை உருவாக்குகிறோம்." },
        { title: "உத்தரவாத தரம்", description: "சுத்தமான தங்கம் மற்றும் வைரத்துடன், எங்கள் நகைகள் சிறப்பாக வடிவமைக்கப்படுகின்றன." }
    ] : [
        { title: "Unmatched Craftsmanship", description: "Our jewellery is crafted with precision and artistry, using only the finest materials to create timeless pieces that blend tradition and contemporary elegance." },
        { title: "Exquisite Designs", description: "We offer a diverse collection that caters to every occasion, from classic heritage designs to modern creations that reflect evolving trends." },
        { title: "Trusted Relationships", description: "Integrity and transparency define our approach. We build lasting relationships with our customers through ethical practices and genuine service." },
        { title: "Guaranteed Quality", description: "With a commitment to purity and excellence, we ensure ethical sourcing and rigorous quality checks, delivering only the finest jewellery to our valued customers." }
    ];

    return (
        <div className="bg-[#FFFCF8]">
            <Header />
            <div className="bg-black w-full h-52 flex flex-col items-center justify-center relative">
                <div className="absolute flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-2xl mt-8 ml-4"></div>
                </div>
                <div className="flex flex-col items-center z-10">
                    <h1 className={`text-white uppercase text-center font-normal font-serif text-2xl md:text-4xl ${montserrat.className}`}>
                        {isTamil ? "எங்களை பற்றி" : "ABOUT US"}
                    </h1>
                    <div className="h-1 w-24 bg-gold mt-3"></div>
                    
                    
                </div>
            </div>

            <div className="flex justify-center -mt-1">
                <Image src="/Polygon.svg" alt="Triangle" width="100" height="100" />
            </div>

            <div className="max-w-5xl mx-auto py-16 px-8 justify-center items-center pb-20">
                    <div className="mt-4">
                        <label className="flex items-center cursor-pointer">
                                            <span className={`mr-2 ${parisienne.className} ${isTamil ? "text-gold" : "text-gold"} text-xl`}>English</span>
                            <input type="checkbox" className="hidden" onChange={toggleLanguage} checked={isTamil} />
                            <div className={`w-10 h-5 ${isTamil ? "bg-gold" : "bg-gray-300"} rounded-full p-1 relative ml-4`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform ${isTamil ? "translate-x-5" : "translate-x-0"} transition-transform`}></div>
                            </div>
                            <span className={`ml-2 ${parisienne.className} ${isTamil ? "text-gold" : "text-gold"} text-xl`}>Tamil</span>
                        </label>
                    </div>


                <p className={`text-gray-600 text-center text-base md:text-lg ${cardo.className}`}>
                    {isTamil
                        ? "G.K.P & Sons Jewellers இல், நாங்கள் நகைகள் வெறும் அலங்காரம் அல்ல, அது பண்பாடு, கைதிறன் மற்றும் நினைவுகளின் பிரதிபலிப்பாகும் என்று நம்புகிறோம்."
                        : "At G.K.P & Sons Jewellers, we believe that jewellery is more than just an ornament—it is a reflection of culture, craftsmanship, and cherished emotions."}
                </p>

                <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
                    {isTamil ? "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?" : "Why Choose Us?"}
                </p>

                <div className="relative border-l-4 border-gold pl-6 mt-10">
                    {milestones.map((item, index) => (
                        <div key={index} className="mb-8 relative">
                            <div className="absolute -left-[34px] w-4 h-4 bg-gold rounded-full border-4 border-white"></div>
                            <h3 className={`text-3xl text-gold font-bold ${parisienne.className}`}>{item.title}</h3>
                            <p className={`text-gray-600 text-base md:text-lg ${cardo.className}`}>{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
            
            <p className={`text-black uppercase text-center text-xl md:text-2xl mt-16 ${montserrat.className}`}>
    {isTamil ? "எங்கள் வாக்குறுதி" : "Our Promise"}
</p>

<p className={`text-gray-600 text-center text-base md:text-lg mt-5 ${cardo.className}`}>
    {isTamil
        ? "நகைகள் வெறும் அணிகலன்கள் அல்ல—அவை அன்பு, பாரம்பரியம் மற்றும் கொண்டாட்டத்தின் காலத்திற்கும் அழியாத வெளிப்பாடாகும். G.K.P & Sons Jewellers இல், நாங்கள் உணர்வுப்பூர்வமான மதிப்பைக் கொண்ட நகைகளை உருவாக்க உறுதியாக இருக்கிறோம், அவை அணிபவருக்கு மகிழ்ச்சியை அளிக்கும். இது ஒரு திருமணமாக இருக்கலாம், நினைவு நாளாக இருக்கலாம், ஒரு தனிப்பட்ட முக்கிய நிகழ்வாக இருக்கலாம், அல்லது நன்றியுச் சொல்லும் சின்னமாக இருக்கலாம்—எங்கள் நகைகள் தலைமுறைகள் முழுவதும் மதிப்புமிக்கதாக இருப்பதற்காக வடிவமைக்கப்படுகின்றன. நாங்கள் உருவாக்கிய அற்புதமான தொகுப்பை ஆராய்ந்து பாருங்கள், G.K.P & Sons Jewellers குடும்பத்தின் ஒரு பகுதியாக வாருங்கள், எங்கே பாரம்பரியம் நேர்த்தியுடன் கலக்கிறது, மற்றும் ஒவ்வொரு துண்டும் ஒரு அழகான கதையை கூறுகிறது."
        : "Jewellery is not just an accessory—it is a timeless expression of love, tradition, and celebration. At G.K.P & Sons Jewellers, we are devoted to crafting jewellery that holds sentimental value and brings joy to its wearer. Whether it is a wedding, an anniversary, a personal milestone, or a token of appreciation, our jewellery is designed to be cherished for generations to come. We invite you to explore our exquisite collection and become a part of the G.K.P & Sons Jewellers family, where tradition meets elegance, and every piece tells a beautiful story."
    }
</p>

            <Footer />
            <Rights />
        </div>
    );
}
