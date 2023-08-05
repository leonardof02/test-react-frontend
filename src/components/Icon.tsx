import React from "react";
import Image from "next/image";

interface props {
    color: string;
    src: string;
    alt: string;
}

export default function Icon({ color, src, alt }: props) {
    // eslint-disable-next-line @next/next/no-img-element
    return <Image width={150} height={150} src={src} alt={alt} style={{fill: color}}/>;
}
