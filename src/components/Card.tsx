import React from "react";
import Image from "next/image";

interface props {
    title: string;
    description: string;
}

export default function Card({ title, description }: props) {
    return (
        <div className="flex flex-col flex-shrink-0 max-w-[300px] gap-3 p-4 text-black transition-colors shadow-2xl hover:bg-primary hover:text-white">
            <Image
                width={100}
                height={100}
                src="/images/icon-1.svg"
                alt="Icon"
                color="black"
            />
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <a
                href="#"
                className={`text-2xl font-bold text-white`}
            >
                <p>Leer Mas</p>
            </a>
        </div>
    );
}
