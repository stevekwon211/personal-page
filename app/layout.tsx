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
        <html lang="en" className={cx("text-black", GeistSans.variable, GeistMono.variable)}>
            <body className="antialiased flex flex-row items-center justify-center m-12">
                <div className="flex flex-col items-center justify-center max-w-4xl">
                    <Navbar />
                    <main className="flex-grow flex flex-col items-center justify-center w-full">{children}</main>
                    <Footer />
                </div>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
