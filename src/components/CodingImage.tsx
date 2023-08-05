import React from "react";

export default function CodingImage() {
    return <div className="place-self-center grid aspect-square max-w-[560px] md:h-full grid-cols-3 grid-rows-3 gap-5">
        <div className="row-span-2 bg-black rounded-md" style={{boxShadow: "-20px -20px 0px 0px #2e53a3"}}>

        </div>
        <div className="col-span-2 col-start-2 bg-black rounded-md">

        </div>
        <div className="col-span-1 col-start-2 row-span-1 bg-black rounded-md">

        </div>
        <div className="col-span-1 col-start-3 row-span-2 bg-black rounded-md" style={{boxShadow: "20px 20px 0px 0px #2D78E2"}}>

        </div>
        <div className="col-span-2 col-start-1 row-span-1 bg-black rounded-md">

        </div>

    </div>;
}
