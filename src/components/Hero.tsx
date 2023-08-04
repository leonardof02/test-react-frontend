import React from "react";
import Image from "next/image";

interface props {
    title: string;
    subtitle: string;
}

export default function Hero({ title, subtitle }: props) {
    return (
        <div className="flex flex-1 gap-5 text-white shadow-2xl sm:flex-col md:flex-row justify-evenly bg-background-blue">
            <div className="max-w-lg mb-32 mt-72 ms-20">
                <h1 className="text-6xl font-extrabold">{title}</h1>
                <h2 className="text-lg mt-7">{subtitle}</h2>
                <div className="relative ms-10">
                    <div className="absolute w-32 h-32 rotate-45 rounded-xl top-14 bg-background-blue"></div>
                </div>
            </div>
            <div className="flex-1 m-5">
                <Image
                    src="/images/numbers.svg"
                    alt="Numbers"
                    className="absolute opacity-30"
                    objectFit="contain"
                    fill
                />
                <Image
                    fill
                    objectFit="contain"
                    src="/images/main-image.png"
                    alt="People and Computers"
                    className="h-auto max-w-3xl"
                />
            </div>
        </div>
    );
}
