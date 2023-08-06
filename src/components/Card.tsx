import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { ASSETS_PREFIX } from "@/Constants";

interface props {
    title: string;
    description: string;
    imageUrl: string;
}

export default function Card({ title, description, imageUrl }: props) {

    const [ hovered, setHovered ] = useState<boolean>(false)

    const handleMouseEnter = (  ) => {
        setHovered( true );
    }

    const handleMouseLeave = (  ) => {
        setHovered( false );
    }

    return (
        <div
            className={`flex flex-col flex-shrink-0 max-w-[280px] gap-3 p-4 text-black transition-colors shadow-lg hover:bg-primary hover:text-white hover:cursor-pointer`}
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
        >
            <Icon hovered={ hovered } src={imageUrl} alt="Icon"/>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <a href="#" className={`flex gap-2 text-2xl font-bold text-white`}>
                <p>Leer Mas</p>
                <Image width={10} height={10} src={`${ASSETS_PREFIX}/images/read-more.svg`} alt="Right Arrow" />
            </a>
        </div>
    );
}
