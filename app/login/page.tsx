"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-hot-toast";
import { Dancing_Script, Montserrat } from "next/font/google";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // Adjust as needed
});

const montserrat = Montserrat({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function Home() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        if (!name || !password) {
            return;
        }
        if (
            name === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
            password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        ) {
            secureLocalStorage.setItem("auth", "true");
            router.push("/admin");
        } else {
            toast.error("Enter correct username and password");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center bg-[#FAF3E0] h-screen w-full">
            <h1
                className={`absolute text-[#B8860B] top-5 left-5 text-5xl ${dancingScript.className}`}
            >
                GKP & Sons Jewellers
            </h1>
            <div className="absolute left-50vh top-1/2 transform -translate-y-1/2 rounded-3xl w-full md:w-[500px] bg-[#FCFCFC] shadow-lg">
                <h1
                    className={`text-2xl ${montserrat.className} font text-center pt-4 pb-4`}
                >
                    Sign In
                </h1>
                <hr />
                <form
                    className="flex flex-col gap-4 p-8"
                    onSubmit={handleLogin}
                >
                    <input
                        type="name"
                        placeholder="Email"
                        className={`border border-gray-200 py-2 px-4 rounded-lg ${montserrat.className}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={`border border-gray-200 py-2 px-4 rounded-lg w-full ${montserrat.className}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <i
                                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                            ></i>
                        </span>
                    </div>
                    <button
                        type="submit"
                        disabled={!name || !password}
                        className={`w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer mt-8 ${montserrat.className}`}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
