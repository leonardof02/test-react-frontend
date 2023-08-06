import React from "react";
import Image from "next/image";
import Button from "./Button";
import Carrousel from "./Carrousel";
import { ASSETS_PREFIX } from "@/Constants";

export default function Services() {
    return (
        <section className="flex flex-col gap-4 mx-5 mt-20 md:px-20 md:py-20 md:grid md:grid-cols-6">
            <div className="flex flex-col col-span-2 gap-5">
                <h3 className="text-xl font-bold uppercase text-primary">Servicios</h3>
                <h4 className="text-3xl font-bold text-black">Datos de la API</h4>
                <p className="text-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
                    dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
                    animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?
                </p>
                <Button
                    text="Ver Mas"
                    fit
                    icon={
                        <Image width={25} height={25} src={`${ASSETS_PREFIX}/images/arrow.svg`} alt="Arrow" />
                    }
                />
            </div>
            <div className="col-span-4 my-10 md:my-0">
                <Carrousel />
            </div>
        </section>
    );
}
