import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Head from "next/head";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "GKP & Sons Jewellers - Premium Gold & Diamond Jewellery",
    description: "Discover exquisite handcrafted jewellery at GKP & Sons Jewellers. Shop our premium gold, diamond, and silver collections online.",
    keywords: "gold jewellery, diamond rings, silver bracelets, GKP & Sons, fine jewellery, best jewellery shop in Coimbatore, Coimbatore jewellery shop",
    author: "GKP & Sons Jewellers",
    url: "https://gkpjewellers.vercel.app/",
    image: "https://9siqqlni71.ufs.sh/f/WMsxN2Pmsk0brk0fa9KeZEG9tWu5kDPCAoaXQvxcsnz8f1YU", // Replace with actual image URL
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <Head>
                {/* Essential Meta Tags */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content={metadata.title} />
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="author" content={metadata.author} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={metadata.url} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:url" content={metadata.url} />
                <meta property="og:image" content={metadata.image} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content={metadata.image} />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
            </Head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <Toaster />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
