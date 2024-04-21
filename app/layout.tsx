import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Doeon Kwon",
        template: "%s | Doeon Kwon",
    },
    description: "This is Doeon Kwon",
    openGraph: {
        title: "Doeon Kwon",
        description: "This is Doeon Kwon",
        url: baseUrl,
        siteName: "Doeon Kwon",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cx("text-black ", GeistSans.variable, GeistMono.variable)}>
            <body className="antialiased px-10 py-10 lg:mx-auto">
                <Navbar />
                <main className="flex-wrap min-w-0 mt-6 flex-col px-2 md:px-0">
                    {children}
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}
