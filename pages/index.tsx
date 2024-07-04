// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <Head>
                <title>Doeon Kwon</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload" href="/background-1.webp" as="image" />
            </Head>

            <div className="absolute inset-0">
                <Image
                    src="/background-1.webp"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    sizes="100vw"
                    alt="Background"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-black/35 via-black/5 to-transparent"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                <div className="flex justify-end">
                    <div className="text-right">
                        <h1 className="text-6xl font-medium mb-2">Doeon Kwon</h1>
                        <p className="text-xl font-normal">
                            write contents, spread inspire, connect things on internet
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div>
                        <Link
                            href="/taste"
                            className="text-8xl font-light mb-2 transition-colors duration-1500 hover:text-custom-gray block"
                        >
                            taste
                        </Link>
                        <Link
                            href="/think"
                            className="text-8xl font-light mb-2 transition-colors duration-1500 hover:text-custom-gray block"
                        >
                            think
                        </Link>
                        <Link
                            href="/work"
                            className="text-8xl font-light mb-2 transition-colors duration-1500 hover:text-custom-gray block"
                        >
                            work
                        </Link>
                        <Link
                            href="/people"
                            className="text-8xl font-light transition-colors duration-1500 hover:text-custom-gray block"
                        >
                            people
                        </Link>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-light mb-1">find me on</p>
                        <p className="text-xl font-light">
                            <Link
                                href="https://disquiet.com"
                                className="transition-colors duration-500 hover:text-custom-gray"
                            >
                                disquiet
                            </Link>{" "}
                            /{" "}
                            <Link
                                href="https://instagram.com"
                                className="transition-colors duration-500 hover:text-custom-gray"
                            >
                                ig
                            </Link>{" "}
                            /{" "}
                            <Link
                                href="https://www.threads.net"
                                className="transition-colors duration-500 hover:text-custom-gray"
                            >
                                thread
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
