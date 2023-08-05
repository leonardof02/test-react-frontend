import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Card from "./Card";
import Post from "@/types/Post";
import { API_URL, ICONS_URL } from "@/Constants";
import { useServiceContext } from "@/context/ServicesContextProvider";

export default function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [data, setData] = useState<Post[] | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    const { setServices } = useServiceContext();

    useEffect(() => {
        // Traer los recursos de jsonplaceholder
        async function fetchData() {
            const response = await fetch(API_URL);
            const data: Post[] = await response.json();
            // Seleccionar solo 3 elementos
            setData(data.slice(0, 3));
            setLoading(false);
            // Actualizar el contexto
            setServices( data.slice(0, 3).map( item => item.title ) );
        }

        fetchData();

        const slideInterval = setInterval(next, 5_000);
        return () => {
            clearInterval(slideInterval);
        };
    }, []);

    // Slider Navigation
    const next = () => {
        if (data) setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    };

    const prev = () => {
        if (data) setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };

    return (
        <div className="flex flex-col items-center w-full md:mt-0">
            {isLoading ? (
                "Loading"
            ) : (
                <>
                    <div className="flex gap-5">
                        <Image
                            src="/images/left-arrow.svg"
                            width={15}
                            height={15}
                            alt="Left Arrow"
                            className="z-40 hover:cursor-pointer"
                            onClick={prev}
                        />
                        <div className="flex overflow-hidden md:w-[630px] w-[315px] sm:w-[630px]">
                            {data && (
                                <div
                                    className="flex gap-5 p-5 md:m-10"
                                    style={{
                                        transform: `translateX(${(-currentIndex * 630) / 2}px)`,
                                        transition: "transform .2s ease"
                                    }}
                                >
                                    {data.map((item, index) => (
                                        <Card
                                            imageUrl={ ICONS_URL[index] }
                                            title={item.title}
                                            description={item.body}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            )}
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
                </>
            )}
            {data && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-4 h-4 border border-black rounded-full cursor-pointer bg-blue-shadow"
                            onClick={() => setCurrentIndex(index)}
                        >
                            <div
                                className={`h-2 w-2 rounded-full ${
                                    currentIndex === index ? "bg-white" : "bg-primary"
                                }`}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
