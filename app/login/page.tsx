"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-hot-toast";
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
    console.log(process.env.NEXT_PUBLIC_ADMIN_USERNAME, process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
    if (name === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      secureLocalStorage.setItem("auth", "true");
      router.push('/admin')
    } else {
      toast.error("Enter correct username and password");
    }

  };

  return (
    <main className="flex h-screen flex-col justify-center items-center m-4">
      <h1 className="absolute top-4 left-4 text-[24px] font-bold">
        GKP & Sons Jewellers
      </h1>
      (
      <div className="absolute left-50vh top-1/2 transform -translate-y-1/2 border border-gray-200 rounded-3xl w-full md:w-[500px] bg-white shadow-lg">
        <h1 className="text-2xl font-semibold text-center pt-2">
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
            className="border border-gray-200 p-2 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-200 p-2 rounded-lg w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>
          <button
            type="submit"
            disabled={!name || !password}
            className="w-full text-lg rounded-lg bg-black text-white p-2 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed mt-8"
          >
            Sign In
          </button>
        </form>
      </div>
      )
    </main>
  );
}