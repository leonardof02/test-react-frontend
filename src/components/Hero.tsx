import React from "react";
import Image from "next/image";
import { ASSETS_PREFIX } from "@/Constants";

interface props {
    title: string;
    subtitle: string;
}

export default function Hero({ title, subtitle }: props) {
    return (
        <div className="shadow-2xl px-14 bg-background-blue">
            <div className="flex flex-col items-center justify-center w-full gap-5 text-white md:grid md:grid-cols-2 bg-background-blue">
                <div className="max-w-2xl m-12">
                    <h1 className="text-5xl font-extrabold md:text-6xl">{title}</h1>
                    <h2 className="mt-6 text-md md:text-lg">{subtitle}</h2>
                </div>
                <div className="flex items-center m-5">
                    <Image
                        src={`${ASSETS_PREFIX}/images/numbers.svg`}
                        alt="Numbers"
                        className="absolute z-10 opacity-30 right-3"
                        width={1000}
                        height={900}
                    />
                    <Image
                        width={1000}
                        height={900}
                        src={`${ASSETS_PREFIX}/images/main-image.png`}
                        alt="People and Computers"
                        className="z-10 w-full m-10 md:m-0 md:translate-y-12 md:scale-125"
                    />
                </div>
            </div>
            <div className="relative">
                <div className="absolute w-20 h-20 rotate-45 -top-12 md:w-20 md:h-20 ms-10 md:ms-52 rounded-xl bg-background-blue"></div>
            </div>
        </div>
    );
}
