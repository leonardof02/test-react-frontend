import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card";

export default function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const data = [
        {
            title: "Leonardo",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
        dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
        animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?`
        },
        {
            title: "Leonardo",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
        dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
        animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?`
        },
        {
            title: "Leonardo",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
        dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
        animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?`
        }
    ];

    const next = () => {
        setCurrentIndex(currentIndex === data.length - 2 ? data.length - 2 : currentIndex + 1);
    };

    const prev = () => {
        setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
    };

    return (
        <div className="mt-10 ms-3 md:mt-0">
            <div className="flex gap-5 overflow-hidden">
                <Image
                    src="/images/left-arrow.svg"
                    width={15}
                    height={15}
                    alt="Left Arrow"
                    className="z-40 hover:cursor-pointer"
                    onClick={prev}
                />
                <div
                    className="relative flex gap-4"
                    style={{
                        transform: `translateX(${-currentIndex * 300}px)`,
                        transition: "transform .2s ease"
                    }}
                >
                    {data.map((item, index) => (
                        <Card {...item} key={index} />
                    ))}
                </div>
                <Image
                    src="/images/right-arrow.svg"
                    width={15}
                    height={15}
                    alt="Right Arrow"
                    className="z-40 hover:cursor-pointer"
                    onClick={next}
                />
            </div>
            <div>
                <div></div>
            </div>
        </div>
    );
}
