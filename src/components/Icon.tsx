import React from "react";

interface props {
    hovered: boolean;
    src: string;
    alt: string;
}

export default function Icon({ hovered, src, alt }: props) {
    // eslint-disable-next-line @next/next/no-img-element
    return <div className="w-32 h-32 bg-primary" style={ { filter: hovered ? "brightness(100)" : "", mask: `url(${ src })`, maskRepeat: "no-repeat", maskSize: "cover"  } }/>;
}
