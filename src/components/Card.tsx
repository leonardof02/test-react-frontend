import React, { ReactNode, useState } from "react";
import styles from "@/components/Card.module.css";
import Image from "next/image";

interface props {
    title: string;
    description: string;
    image: ReactNode;
}

export default function Card({ title, description, image }: props) {

    const [ hovered, setHovered ] = useState<boolean>(false)

    const handleMouseEnter = (  ) => {
        setHovered( true );
    }

    const handleMouseOver = (  ) => {
        setHovered( false );
    }

    return (
        <div
            className={` ${ hovered ? styles.hovered : styles.noHovered } flex flex-col flex-shrink-0 max-w-[280px] gap-3 p-4 text-black transition-colors shadow-lg hover:bg-primary hover:text-white hover:cursor-pointer`}
            onMouseEnter={ handleMouseEnter }
            onMouseOver={ handleMouseOver }
        >
            {image}
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <a href="#" className={`flex gap-2 text-2xl font-bold text-white`}>
                <p>Leer Mas</p>
                <Image width={10} height={10} src="/images/read-more.svg" alt="Right Arrow" />
            </a>
        </div>
    );
}
