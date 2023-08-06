import { ASSETS_PREFIX } from "@/Constants";
import React from "react";

export default function CodingImage() {

    return (
        <div className="grid gap-2 aspect-square max-w-[900px] md:h-[450px] h-[300px]">
            <div
                className="row-span-2 rounded-md"
                style={{
                    boxShadow: "-20px -20px 0px 0px #2e53a3",
                    backgroundImage: `url(${ASSETS_PREFIX}/images/top-left.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div
                className="col-span-2 col-start-2 bg-black rounded-md"
                style={{
                    backgroundImage: `url(${ASSETS_PREFIX}/images/top-right.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "-15px"
                }}
            ></div>
            <div
                className="col-span-1 col-start-2 row-span-1 bg-black rounded-md"
                style={{
                    backgroundImage: `url(${ASSETS_PREFIX}/images/center.png)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "cover"
                }}
            ></div>
            <div
                className="col-span-1 col-start-3 row-span-2 bg-black rounded-md"
                style={{
                    boxShadow: "20px 20px 0px 0px #2D78E2",
                    backgroundImage: `url(${ASSETS_PREFIX}/images/bottom-right.png)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>
            <div
                className="col-span-2 col-start-1 row-span-1 bg-black rounded-md"
                style={{
                    backgroundImage: `url(${ASSETS_PREFIX}/images/bottom-left.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>
        </div>
    );
}
